import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fakeBaseQuery(),
    endpoints: () => ({}),
})