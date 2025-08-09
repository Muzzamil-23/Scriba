import React from 'react'
import { BookOpen, FileText, Users, Zap } from 'lucide-react'

const Stats = () => {
    return (
        <div className='relative rounded-2xl mt-25 py-6 px-8 bg-gray-900/60 border border-white/20 dark:border-gray-800/20'>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-3xl'></div>
            <div className='grid grid-cols-4 gap-4 rounded-2xl mt-8'>
                <div className='flex flex-col justify-center items-center relative py-4'>
                    <div className='bg-blue-500 flex px-4 py-4 rounded-2xl'>
                        <Users strokeWidth={3} className='text-primary z-10' />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className='flex flex-col items-center z-10'>
                        <div className='text-3xl font-bold mt-2'>50K+</div>
                        <div className='text-primary'>Writers</div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center relative py-4'>
                    <div className='bg-violet-500 flex px-4 py-4 rounded-2xl'>
                        <FileText strokeWidth={3} className='text-primary z-10' />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className='flex flex-col items-center z-10'>
                        <div className='text-3xl font-bold mt-2'>1M+</div>
                        <div className='text-primary'>Articles</div>
                    </div>
                </div>
                <div className='flex flex-col items-center relative py-4'>
                    <div className='bg-cyan-500 flex px-4 py-4 rounded-2xl'>
                        <BookOpen strokeWidth={3} className='text-primary z-10' />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className='flex flex-col items-center z-10'>
                        <div className='text-3xl font-bold mt-2'>5M+</div>
                        <div className='text-primary'>Readers</div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center relative py-4'>
                    <div className='bg-green-500 flex px-4 py-4 rounded-2xl'>
                        <Zap strokeWidth={3} className='text-primary z-10' />
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    <div className='z-10 flex flex-col items-center'>
                        <div className='text-3xl font-bold mt-2'>100+</div>
                        <div className='text-primary'>Topics</div>
                    </div>
                </div>
            </div>
            <div className='mt-16 border-t'>
                <div className='flex justify-center gap-8 mt-8'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-blue-400 w-2 h-2 rounded-full animate-caret-blink'></div>
                        Live community activity
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='bg-yellow-400 w-2 h-2 rounded-full animate-caret-blink'></div>
                        Real-time engagement
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='bg-green-400 w-2 h-2 rounded-full animate-caret-blink'></div>
                        Growing daily
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats