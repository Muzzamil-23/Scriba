import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        // post: postReducer
    }
})

export default store;