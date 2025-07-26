import React, { useState } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import authService from '@/supabase/auth'
import { Link, useNavigate } from 'react-router'
import Logo from './Logo'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from '@/validations/authSchema'
import { login } from '@/store/authSlice'
import Container from './Container'


const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(signUpSchema)
    })


    const signupHandler = async (data) => {
        setError("")
        try {
            const session = await authService.createAccount(data)
            if (session) {
                // const userData = await authService.getCurrentUser()
                // if (userData) dispatch(login(userData))
                //     else console.log("problem in getting current User");
                navigate('/login')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='w-full flex justify-center items-center'>
            <Container>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <Logo />
                        <h3>Create your account</h3>
                        <p>Join thousands of writers and readers</p>
                    </div>

                    <form onSubmit={handleSubmit(signupHandler)} className='w-xl max-w-2xl p-4 rounded-2xl'>
                        <h2>Sign Up</h2>
                        <Button>Continue with Google</Button>
                        <div className='flex gap-1'>
                            <div className='border border-gray-600'></div>
                            <h5>OR CONTINUE WITH</h5>
                            <div className='border border-gray-600'></div>
                        </div>

                        <div className='mt-2'>
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text" id='fullName' placeholder='Enter your full name'
                                {...register("username")}
                            />
                            
                            <label htmlFor="email">Email</label>
                            <input
                                type="email" id='email' placeholder='Enter your email'
                                {...register("email")}
                            />

                            {
                                errors.email && <p className='text-red-500'>{errors.email.message}</p>
                            }


                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder='Enter your password'
                                {...register("password")}
                            />

                            {
                                errors.password && <p className='text-red-500'>{errors.password.message}</p>
                            }

                            <div>
                                <Button>
                                    Create Account
                                </Button>
                            </div>

                            <div>
                                Already have an account? <Link to='/signin'>Sign in</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </Container>

        </div>
    )
}

export default Signup