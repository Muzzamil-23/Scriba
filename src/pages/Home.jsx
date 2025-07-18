import Container from '@/components/Container'
import { PencilLine } from 'lucide-react'
import React from 'react'

const Home = () => {
    return (
        // hero section
        <section>
            <Container>
                <div className='flex flex-col gap-2'>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">Discover Amazing Stories</h1>
                    <p>
                        Join thousands of writers and readers in our community. Share your knowledge, discover new perspectives, and connect with like-minded individuals.
                    </p>
                </div>
                <div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-3">
                        <PencilLine/>
                        Start Writing Today
                    </button>
                    <button>Sign In</button>
                </div>
            </Container>
        </section>
    )
}

export default Home