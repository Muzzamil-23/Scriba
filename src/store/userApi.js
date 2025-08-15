import { supabase } from '@/supabase/config';
import { baseApi } from './baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
  }),
  overrideExisting: false,
});

export const { useIsProfileCompletedQuery } = userApi;
