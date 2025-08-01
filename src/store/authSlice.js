import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isAuthenticated: false,
    user: null,
    loading: true,
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
        }
    }
})

export const {setUser, clearUser} = authSlice.actions
export default authSlice.reducer