import React from 'react'
import { Link } from 'react-router'

const Logo = () => {
    return (
        <Link to='/' className="flex items-center space-x-3 group">
            <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-primary dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                    Scriba
                </span>
                {/* <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Pro</div> */}
            </div>
        </Link>
    )
}

export default Logo