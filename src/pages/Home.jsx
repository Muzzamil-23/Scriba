import Button from '@/components/Button'
import Container from '@/components/Container'
import FeaturedArticles from '@/components/FeaturedArticles'
import Stats from '@/components/Stats'
import TrendingSidebar from '@/components/TrendingSidebar'
import { BookOpen, FileText, PencilLine, PencilLineIcon, Star, Users, Zap } from 'lucide-react'
import React from 'react'

const Home = () => {
    return (
        // hero section
        <section>
            <Container>
                <div className='flex flex-col gap-2 justify-center items-center mt-18'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-primary dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight'>Discover Amazing Stories</h1>

                    <p className='text-primary text-xl/8 mt-4 max-w-3xl text-center'>
                        Join thousands of writers and readers in our community. Share your knowledge, discover new perspectives, and connect with like-minded individuals.
                    </p>
                    <Button className='mt-10 px-8 py-3 gap-4 text-primary'>
                        <PencilLineIcon className='text-primary' /> Start Writing Today</Button>
                </div>
                <Stats />
                
                <h2 className='flex items-center gap-4 justify-center text-4xl text-center my-20 font-extrabold'>
                    <Star size={38} strokeWidth={0} fill='yellow'/>
                    Featured Articles
                </h2>
                <div className='flex mb-10 gap-6 flex-wrap lg:flex-nowrap'>
                    <div className='lg:w-[75%] w-[100%]'>
                        <FeaturedArticles/>
                    </div>
                    <aside className='lg:w-[25%] w-[100%]'>
                        <TrendingSidebar/>  
                    </aside>
                </div>



            </Container>
        </section>
    )
}

export default Home