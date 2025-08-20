import React from 'react'
import Button from './Button'
import authService from '@/supabase/auth'
import { useDispatch } from 'react-redux'
import { clearUser } from '@/store/authSlice'
import { supabase } from '@/supabase/config'

const Test = () => {
    const dispatch = useDispatch()
    //  const handleLogout = async () => {
    //     try {
    //         console.log("clicked");

    //         await authService.logout()
    //         dispatch(clearUser())
    //     } catch (error) {
    //         console.log("Logout :: logoutHandler :: error", error);
    //     }
    // }

    async function fetchSession() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
        console.error("Error fetching session:", error);
        return;
    }

    console.log("Full data object:", data);

    const session = data?.session;

    if (!session) {
        console.log("No active session");
        return;
    }

    console.log("Current user ID:", session.user.id);
}





    return (
        <div>
            <button onClick={fetchSession}>
               fetchSession
            </button>
        </div>
    )
}

export default Test