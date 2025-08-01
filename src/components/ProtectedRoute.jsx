import { Loader2 } from 'lucide-react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const ProtectedRoute = ({children, authentication = true}) => {
    const navigate = useNavigate()
    const {isAuthenticated, loading} = useSelector(state => state.auth)
    useEffect(() => {
        if(loading) return
        if(authentication && isAuthenticated !== authentication) navigate('/login')
        else if(!authentication && isAuthenticated !== authentication) navigate('/')
    }, [isAuthenticated, navigate, authentication])
  return loading ? <div className='flex justify-center items-center h-screen'><Loader2 size={50} className='animate-spin'/></div> : <>{children}</>
}

export default ProtectedRoute