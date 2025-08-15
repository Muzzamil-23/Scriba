import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Container from '../Container'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../Logo'
import Button from '../Button'
import { LogOut } from 'lucide-react'
import authService from '@/supabase/auth'
import { clearUser } from '@/store/authSlice'


const Header = () => {
    const authStatus = useSelector(state => state.auth.isAuthenticated)
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const dispatch = useDispatch()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: authStatus,
        },
        {
            name: "Categories",
            slug: "/category",
            active: authStatus,
        },
        // {
        //     name: "Sign Out",
        //     slug: "/logout",
        //     active: authStatus,
        // },

    ]

    const handleSignOut = async() => {
        await authService.logout()
        dispatch(clearUser())
        navigate('/login')
    }

    return (
        <header className="sticky glass-effect top-0 z-50  border-b  dark:border-gray-800">
            <Container>
                <div className="sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Logo />
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">


                            {navItems.map((item) => item.active ? (
                                <button key={item.name}
                                    className="text-primary hover:text-blue-600 dark:hover:text-blue-400  cursor-pointer font-medium transition-colors text-lg">
                                    {item.name}
                                </button>

                            ) : null)}

                            {
                                authStatus && (
                                    <div>
                                        <Button className='px-4 py-2.5 gap-3' onClick={handleSignOut}><LogOut size={18}/> Sign Out</Button>
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