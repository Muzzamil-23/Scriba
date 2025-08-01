
import { Outlet, useNavigate } from "react-router"
import Button from "./components/Button"
import Header from "./components/Header/Header"
import LogoutBtn from "./components/LogoutBtn"
import SearchBar from "./components/SearchBar"
import Signup from "./components/Signup"

import Home from "./pages/Home"
import { useEffect } from "react"
import { supabase } from "./supabase/config"
import { useDispatch } from "react-redux"
import { clearUser, setUser } from "./store/authSlice"


function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSignUp = () => {
    navigate('/login')
  }

  useEffect(() => {
    const fetchSession = async () => {
      const {data} = supabase.auth.getSession()
      const user = data?.session?.user
      if(user) dispatch(setUser(user))
      else dispatch(clearUser())
    }
    fetchSession()
  }, [])

  return (
    <>
    
    {/* <Header/> */}
    {/* <Home/> */}
    {/* <LogoutBtn/> */}
    
      {/* <SearchBar/> */}

      {/* <button onClick={handleSignUp}>Click to SignUp</button> */}

      <Outlet/>
    
    </>
  )
}

export default App
