import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import authService from '@/supabase/auth'
import { logout } from '@/store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = async () => {
        try {
            await authService.logout()
            dispatch(logout())
        } catch (error) {
            console.log("Logout :: logoutHandler :: error", error);
        }
    }
  return (
    <>
        <Button onClick={logoutHandler}>
            Sign Out
        </Button>
    </>
  )
}

export default LogoutBtn