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
            state.user = action.payload
            state.loading = false
        },
        clearUser: (state) => {
            state.isAuthenticated = false
            state.user = null
            state.loading = false
            state.isProfileCompleted = false
            state.userId = null
        },
        updateIsProfileCompleted: (state, action) => {
            state.isProfileCompleted = action.payload
        },
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        setLoading: (state,action) => {
            state.loading = action.payload
        }
    }
})

export const {setUser, clearUser, updateIsProfileCompleted, setUserId, setLoading} = authSlice.actions
export default authSlice.reducer