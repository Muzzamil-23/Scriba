import React from 'react'
import { Link } from 'react-router'
import Container from '../Container'
import Logo from '../Logo'

const Footer = () => {
    return (
        <footer className='mt-26 bg-popover'>
            <Container className='pt-10'>
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-col items-center'>
                        <Logo/>
                        <p className='text-muted-foreground text-lg mt-4 max-w-2xl text-center'>
                            The ultimate platform for writers and readers to connect, share, and discover amazing content.
                        </p>
                    </div>
                    <div className='flex justify-center gap-16 mt-8'>
                        <Link to='/' className='hover:text-primary text-muted-foreground text-lg'>Categories</Link>
                        <Link to='/' className='hover:text-primary text-muted-foreground text-lg'>Write</Link>
                        <Link to='/' className='hover:text-primary text-muted-foreground text-lg'>Dashboard</Link>
                    </div>
                    <div className='my-8 border-t border-border'>
                        <p className='text-muted-foreground text-center mt-6'>
                            © 2025 Scriba. All rights reserved.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer