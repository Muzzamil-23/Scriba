import React, { useState } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import authService from '@/supabase/auth'
import { Link, useNavigate } from 'react-router'
import Logo from './Logo'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from '@/validations/authSchema'
import { login } from '@/store/authSlice'
import Container from './Container'
import { Chrome, Lock, Mail } from 'lucide-react'


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(loginSchema)
    })


    const loginHandler = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login({ userData }))
                navigate("/test")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='w-full flex justify-center items-center h-screen'>
            <Container className="flex flex-col items-center">
                <div className='flex flex-col gap-2 items-center'>
                    <Logo />
                    <h3 className='text-xl'>Sign in to your account to continue</h3>
                </div>
                <div className='flex flex-col gap-4 w-[480px] items-center bg-gray-950 border rounded-xl mt-10 py-4 px-3'>

                    <form onSubmit={handleSubmit(loginHandler)} className='w-full p-4 rounded-2xl'>
                        <h2 className='text-center text-3xl font-semibold'>Sign In</h2>
                        <button
                            type="button"
                            variant="outline"
                            className="w-full bg-transparent border cursor-pointer border-gray-600 px-4 py-2 rounded-lg mt-6 flex justify-center items-center gap-2.5 hover:bg-gray-800"
                        >
                            <Chrome className="w-4 h-4 mr-2" />
                            Continue with Google
                        </button>
                        <div className="relative mt-10">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-300 dark:border-gray-600" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="dark:bg-gray-950 px-4 text-gray-400 text-sm">
                                    OR CONTINUE WITH
                                </span>
                            </div>
                        </div>

                        <div className='mt-8'>
                            <div className='flex flex-col'>
                                <label htmlFor="email">Email</label>
                                <div className='flex items-center gap-2 border py-2 px-4 rounded-lg mt-2'>
                                    <Mail size={20} className='text-gray-400' />
                                    <input
                                        type="email" id='email' placeholder='Enter your email'
                                        className='outline-none w-full'
                                        {...register("email")}
                                    />
                                </div>
                            </div>

                            {
                                errors.email && <p className='text-red-500'>{errors.email.message}</p>
                            }

                            <div className='flex flex-col mt-4'>
                                <label htmlFor="password">Password</label>
                                <div className='flex items-center gap-2 border py-2 px-4 rounded-lg mt-2'>
                                    <Lock size={20} className='text-gray-400' />
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder='Enter your password'
                                        className='outline-none w-full'
                                        {...register("password")}
                                    />
                                </div>
                            </div>


                            {
                                errors.password && <p className='text-red-500'>{errors.password.message}</p>
                            }

                            <div className='mt-8'>
                                <Button width="w-full">
                                    Sign In
                                </Button>
                            </div>

                            <div className='text-center mt-6'>
                                Don't have an account? <Link to='/signup' className='text-blue-400'>Sign up</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </Container>

        </div>
    )
}

export default Login