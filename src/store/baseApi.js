import { supabase } from '@/supabase/config'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fakeBaseQuery(),
    endpoints: () => ({}),
})