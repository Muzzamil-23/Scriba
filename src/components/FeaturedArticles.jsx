import { Calendar, Clock, Eye, Heart, MessageCircle } from 'lucide-react'
import React from 'react'

const FeaturedArticles = () => {
    return (
        <div className='flex gap-4 flex-col glass-effect rounded-xl'>
            <div className='flex rounded-xl'>
                <div className='w-[30%] relative'>
                    <img src="https://images.ctfassets.net/lzny33ho1g45/6VcDGWbQfWElVwAiMWLk9c/54a88cca295511333240c2919fc3f084/best-ai-productivity.jpg" alt="image" className='object-cover w-[100%] h-[100%] rounded-l-xl'/>
                    <span className='bg-red-600 absolute top-4 left-4 px-2 rounded-2xl'>Technology</span>
                </div>
                <div className='w-[70%] flex flex-col gap-6 py-6 pl-8 pr-4'>
                    <div className='flex gap-4 text-muted-foreground'>
                        <div className='flex items-center gap-2'>
                            <div>
                                <img src="https://images.ctfassets.net/lzny33ho1g45/6VcDGWbQfWElVwAiMWLk9c/54a88cca295511333240c2919fc3f084/best-ai-productivity.jpg" alt="" className='object-cover w-8 h-8 rounded-full' />
                            </div>
                            Sara Chen
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Calendar/>
                            1/15/2024
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Clock/>
                            8 min read
                        </div>

                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-2xl font-bold'>The Future of AI-Powered Development Tools</h3>
                        <p className='text-primary'>
                            Exploring how artificial intelligence is revolutionizing the way we build software, from code generation to automated testing and deployment.
                        </p>
                    </div>
                    <div className='flex gap-4 text-muted-foreground'>
                        <div className='flex items-center gap-1'>
                            <Eye/>
                            12,500
                        </div>
                        <div className='flex items-center gap-1'>
                            <Heart/>
                            12,500
                        </div>
                        <div className='flex items-center gap-1'>
                            <MessageCircle/>
                            12,500
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeaturedArticles