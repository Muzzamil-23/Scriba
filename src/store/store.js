import { configureStore } from '@reduxjs/toolkit';
import {baseApi} from './baseApi'
import authReducer from './authSlice'
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer: {
        auth: authReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)
export default store;