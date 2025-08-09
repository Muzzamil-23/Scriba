import { supabase } from '@/supabase/config';
import { baseApi } from './baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    isProfileCompleted: builder.query({
      async queryFn(id) {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('is_profile_completed')
          .eq('id', id)
          .single();

        if (error) return { error };
        return { data: profile };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useIsProfileCompletedQuery } = userApi;
