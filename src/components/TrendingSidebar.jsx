import { TrendingUp } from 'lucide-react'
import React from 'react'

const TrendingSidebar = () => {
  return (
    <div className='flex flex-col gap-4 glass-effect px-6 py-6 rounded-xl'>
      <div className='flex items-center gap-2 text-lg font-bold'><TrendingUp className='text-blue-500' strokeWidth={3}/>Trending Topics</div>
      <div className='flex flex-col flex-wrap justify-between px-4 py-4 hover:bg-secondary hover:cursor-pointer rounded-xl'>
        <h4 className='font-semibold'>Artifical Intelligence</h4>
        <div className='text-muted-foreground'>1247 posts</div>
      </div>
    </div>
  )
}

export default TrendingSidebar