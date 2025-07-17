import React from 'react'
import { useNavigate } from 'react-router'


const Header = () => {
    const navigate = useNavigate()

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
            active: false
        },
        {
            name: "Sign Out",
            slug: "/logout",
            active: false,
        },
        {
            
        }
    ]
    
  return (
    <div>Header</div>
  )
}

export default Header