import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import authService from '@/supabase/auth'
import { Link, useNavigate } from 'react-router'
import Logo from './Logo'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loginHandler = async (data) => {
        try {
            await authService.login()

        } catch (error) {

        }
    }
    return (
        <div className='w-full flex justify-center items-center'>
            <Container>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <Logo />
                        <h3>Sign in to your account to continue</h3>
                    </div>

                    <form className='w-xl max-w-2xl p-4 rounded-2xl'>
                        <h2>Sign In</h2>
                        <Button>Continue with Google</Button>
                        <div className='flex gap-1'>
                            <div className='border border-gray-600'></div>
                            <h5>OR CONTINUE WITH</h5>
                            <div className='border border-gray-600'></div>
                        </div>

                        <div className='mt-2'>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' placeholder='Enter your email' />
                            <label htmlFor="email">Password</label>
                            <input type="text" id='email' placeholder='Enter your password' />

                        <div>
                            <Button>
                                Sign In
                            </Button>
                        </div>

                        <div>
                            Don't have an account? <Link to='/signup'>Sign up</Link>
                        </div>
                        </div>
                    </form>
                </div>
            </Container>

        </div>
    )
}

export default Login