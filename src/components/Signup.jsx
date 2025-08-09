import React, { useState } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import authService from '@/supabase/auth'
import { Link, useNavigate } from 'react-router'
import Logo from './Logo'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from '@/validations/authSchema'
// import { login } from '@/store/authSlice'
import Container from './Container'
import { Chrome, Loader2, Lock, Mail } from 'lucide-react'


const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(signUpSchema)
    })

    const signupHandler = async (data) => {
        setError("")
        setLoading(true)
        try {
            const session = await authService.createAccount(data)
            if (session) navigate('/login');
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className='w-full flex justify-center items-center h-screen bg-background'>
            <Container className="flex flex-col items-center">
                <div className='flex flex-col gap-2 items-center'>
                    <Logo />
                    <h3 className='text-xl'>Create your account</h3>
                </div>
                <div className='flex flex-col gap-4 w-[480px] items-center mt-10 py-4 px-3 glass-effect rounded-xl'>

                    <form onSubmit={handleSubmit(signupHandler)} className='w-full p-4 rounded-2xl'>
                        <h2 className='text-center text-3xl font-semibold'>Sign Up</h2>
                        <button
                            type="button"
                            variant="outline"
                            className="w-full bg-transparent border cursor-pointer border-border px-4 py-2 rounded-lg mt-6 flex justify-center items-center gap-2.5 hover:bg-secondary"
                        >
                            <Chrome className="w-4 h-4 mr-2" />
                            Continue with Google
                        </button>
                        <div className="relative mt-10">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-300 dark:border-gray-600" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="dark:bg-primary-foreground px-4 text-muted-foreground text-sm bg-background">
                                    OR CONTINUE WITH
                                </span>
                            </div>
                        </div>

                        <div className='mt-8'>
                            <div className='flex flex-col'>
                                <label htmlFor="email">Email</label>
                                <div className='flex items-center gap-2 border border-input py-2 px-4 rounded-lg mt-2'>
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
                                <div className='flex items-center gap-2 border border-input py-2 px-4 rounded-lg mt-2'>
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
                                <Button 
                                    width="w-full"
                                    disabled={loading}
                                    className={`${loading ? 'opacity-40' : ''} px-6 py-2`}
                                >
                                    {loading ? (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    ) : null}
                                    {loading ? "Creating Account..." : "Create Account"}
                                </Button>
                            </div>

                            <div className='text-center mt-6'>
                                Already have an account? <Link to='/login' className='text-blue-400'>Sign in</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </Container>

        </div>
    )
}

export default Signup