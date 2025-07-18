import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='bg-slate-600 border border-white flex gap-2 text-white max-w-md mt-10 ml-40 p-2 rounded-lg'>
        <div>
            <Search className='ml-2' width={20}/>
        </div>
        <div className='w-full'>
            <input className='w-full outline-none' type="text" placeholder='Search articles, authors, topics...' />
        </div>
    </div>
  )
}

export default SearchBar