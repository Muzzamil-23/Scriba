// import { Loader2 } from 'lucide-react'
// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router'

// const ProtectedRoute = ({children, authentication = true}) => {
//     const navigate = useNavigate()
//     const {isAuthenticated, loading} = useSelector(state => state.auth)
//     useEffect(() => {
//         if(loading) return
//         if(authentication && isAuthenticated !== authentication) navigate('/login')
//         else if(!authentication && isAuthenticated !== authentication) navigate('/')
//     }, [isAuthenticated, navigate, authentication])
//   return loading ? <div className='flex justify-center items-center h-screen'><Loader2 size={50} className='animate-spin'/></div> : <>{children}</>
// }

// export default ProtectedRoute


// Fixed ProtectedRoute.jsx
// import { Loader2 } from 'lucide-react'
// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router'

// const ProtectedRoute = ({ children, requireAuth = true, requireCompleteProfile = true }) => {
//   const navigate = useNavigate()
//   const { isAuthenticated, isProfileCompleted, loading } = useSelector(state => state.auth)

//   useEffect(() => {
//     if (loading) return // Don't do anything while loading

//     if (requireAuth) {
//       // This route requires authentication
//       if (!isAuthenticated) {
//         navigate('/login', { replace: true })
//         return
//       }
      
//       // If auth is required and profile completion is also required
//       if (requireCompleteProfile && !isProfileCompleted) {
//         navigate('/complete-profile', { replace: true })
//         return
//       }
//     } else {
//       // This is a public route (login, signup, etc.)
//       if (isAuthenticated) {
//         if (isProfileCompleted) {
//           navigate('/', { replace: true }) // or your default authenticated route
//         } else {
//           navigate('/complete-profile', { replace: true })
//         }
//       }
//     }
//   }, [isAuthenticated, isProfileCompleted, loading, navigate, requireAuth, requireCompleteProfile])

//   if (loading) {
//     return (
//       <div className='flex justify-center items-center h-screen'>
//         <Loader2 size={50} className='animate-spin'/>
//       </div>
//     )
//   }

//   return <>{children}</>
// }

// export default ProtectedRoute






import { Loader2 } from 'lucide-react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const ProtectedRoute = ({ children, requireAuth = true, requireCompleteProfile = true }) => {
  const navigate = useNavigate()
  const { isAuthenticated, isProfileCompleted, loading, user } = useSelector(state => state.auth)

  useEffect(() => {
    if (loading) return // wait until auth check finishes

    if (requireAuth) {
      if (!isAuthenticated) {
        navigate('/login', { replace: true })
        return
      }

      // only check profile completion when user is authenticated and state is known
      if (requireCompleteProfile && isAuthenticated && user && !isProfileCompleted) {
        navigate('/complete-profile', { replace: true })
        return
      }
    } else {
      // Public route (login, signup, etc.)
      if (isAuthenticated) {
        if (isProfileCompleted) {
          navigate('/', { replace: true })
        } 
        // else {
        //   navigate('/complete-profile', { replace: true })
        // }
      }
    }
  }, [isAuthenticated, isProfileCompleted, loading, user, navigate, requireAuth, requireCompleteProfile])

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loader2 size={50} className='animate-spin'/>
      </div>
    )
  }

  return <>{children}</>
}

export default ProtectedRoute
