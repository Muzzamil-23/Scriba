
import { Outlet, useNavigate } from "react-router"
import Header from "./components/Header/Header"
import { useEffect, useState } from "react"
import { supabase } from "./supabase/config"
import { useDispatch, useSelector } from "react-redux"
import { clearUser, setUser, setUserId, updateIsProfileCompleted } from "./store/authSlice"
import Footer from "./components/Footer/Footer"
import { Loader2 } from "lucide-react"



function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const isProfileCompleted = useSelector((state) => state.auth.isProfileCompleted)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession()
      const user = data?.session?.user
      

      if (user) {
        dispatch(setUser(user))
        dispatch(setUserId(user.id))
        // console.log(isAuthenticated);
        // console.log(user);
        
        
        const { data: profile, error, loading} = await supabase
          .from('profiles')
          .select('is_profile_completed')
          .eq('id', user.id)
        if(loading) setLoading(true)
          if (profile && profile.length > 0 && !profile[0].is_profile_completed) {
            navigate('/complete-profile')
        } else {
          dispatch(updateIsProfileCompleted())
        }
      }
      else dispatch(clearUser())
      setLoading(false)
    }
    fetchSession()

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const user = session?.user
      if (user) {
        dispatch(setUserId(user.id))
        dispatch(setUser(user))
        // const { data: profile, error } = await supabase
        //   .from('profiles')
        //   .select('is_profile_completed')
        //   .eq('id', user.id)
        // if (profile && !profile.is_profile_completed) {
        //   navigate('/complete-profile');
        // } else {
        //   dispatch(updateIsProfileCompleted())
        // }
      }
      else dispatch(clearUser())
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  return loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader2 className="animate-spin h-10 w-10 z-40"/>
    </div>
  ) : (
    <>
      <main>
        {
          (isAuthenticated && isProfileCompleted) && <Header />
        }
        <Outlet />
        {
          (isAuthenticated && isProfileCompleted) && <Footer />
        }
      </main>
    </>
  )
}

export default App
