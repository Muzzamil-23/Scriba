import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Container from '../Container'
import { useSelector } from 'react-redux'
import Logo from '../Logo'


const Header = () => {
    const authStatus = useSelector(state => state.auth.status)
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true,
        },
        {
            name: "Explore",
            slug: "/explore",
            active: true,
        },
        {
            name: "Categories",
            slug: "/category",
            active: true,
        },
        {
            name: "Sign In",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Sign Out",
            slug: "/logout",
            active: true,
        },
    ]

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
            <Container>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Logo/>
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">


                            {navItems.map((item) => item.active ? (
                                <button key={item.name}

                                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                                    {item.name}
                                </button>

                            ) : null)}

                            {
                                authStatus && (
                                    <div>
                                        
                                    </div>
                                )
                            }

                        </nav>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header