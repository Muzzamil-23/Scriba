import { supabase } from '@/supabase/config'
import { baseApi } from './baseApi'

export const postApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            async queryFn() {
                const { data: posts, error } = await supabase
                    .from('articles')
                    .select('*')
                    .eq('status', true)
                if (error) return { error }
                return { data: posts }
            }
        }),

        getPostBySlug: builder.query({
            async queryFn(slug) {
                const { data: post, error } = await supabase
                    .from('articles')
                    .select('*')
                    .eq('slug', slug)
                    .single()
                if (error) return { error }
                return { data: post }
            }
        }),

        getFeaturedArticles: builder.query({
            async queryFn() {
                const { data: posts, error } = await supabase
                    .from('articles')
                    .select('featured')
                if (error) return { error }
                return { data: posts }
            }
        }),

        getPostViews: builder.query({
            async queryFn() {
                const { data: views, error } = supabase
                    .from('articles')
                    .select('views')
                if (error) return { error }
                return { data: views }
            }
        }),

        getPostReadTime: builder.query({
            async queryFn() {
                const { data: read_time, error } = supabase
                    .from('articles')
                    .select('read_time')
                if (error) return { error }
                return { data: read_time }
            }
        }),

        getPostReadTime: builder.query({
            async queryFn() {
                const { data: read_time, error } = supabase
                    .from('articles')
                    .select('read_time')
                if (error) return { error }
                return { data: read_time }
            }
        }),

        getPostReadTime: builder.query({
            async queryFn() {
                const { data: postLikes, error } = supabase
                    .from('articles')
                    .select('likes')
                if (error) return { error }
                return { data: postLikes }
            }
        }),

        getPublishTime: builder.query({
            async queryfn() {
                const { data: publish, error } = supabase
                    .from('articles')
                    .select('published_at')

                if (error) return { error }
                return { data: publish }
            }
        }),

        createPost: builder.mutation({
            async queryfn(
                { title, subtitle, slug, coverImage, status = active, featured, readTime, views, likes }
            ) {
                const { error } = await supabase
                    .from('articles')
                    .insert([
                        { title: title, subtitle: subtitle, slug: slug, featured: featured, read_time: readTime, views: views, likes: likes, cover_image: coverImage, status: status },
                    ])
                    .select()
                if (error) return { error }
            }
        })
    }),
    overrideExisting: false
})