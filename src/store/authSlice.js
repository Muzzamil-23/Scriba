import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isAuthenticated: false,
    user: null,
    loading: true,
    isProfileCompleted: false,
    userId: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.isAuthenticated = true
            state.user = action.payload.userData
            state.loading = false
        },
        clearUser: (state) => {
            state.isAuthenticated = false
            state.user = null
            state.loading = false
        },
        updateIsProfileCompleted: (state) => {
            state.isProfileCompleted = true
        },
        setUserId: (state, action) => {
            state.userId = action.payload
        }
    }
})

export const {setUser, clearUser, updateIsProfileCompleted, setUserId} = authSlice.actions
export default authSlice.reducer