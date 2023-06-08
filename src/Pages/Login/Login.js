import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react";
import login from './../../Images/62773-yoga-developer.json'

function Login() {
    const [show, setShow] = useState(false)

    return (
        <section class="relative flex justify-center flex-wrap  lg:items-center">
            <div class="lg:ms-28 w-full px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-16 lg:w-96">
                <div class="mx-auto max-w-lg text-center">
                    <h2 className='text-center py-5 text-3xl text-green-400 font-extrabold'>Login</h2>
                </div>

                <form>
                    <div class="relative">
                        <input type="email" name="email" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-500 appearance-none  focus:outline-none focus:ring-0 focus:border-green-500 peer mb-6" placeholder=" " required />
                        <label for="floating_outlined" class="absolute text-md text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Enter Email</label>
                    </div>

                    <div class="relative">
                        <input type={show ? "text" : "password"} name="password" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-500 appearance-none  focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " required />
                        <label for="floating_outlined" class="absolute text-md text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                    </div>

                    <p className='m-0 underline cursor-pointer inline-block' onClick={() => setShow(!show)}>
                        <small>
                            {
                                show ? <span>Hide Password</span> :
                                    <span>Show Password</span>
                            }
                        </small>
                    </p>
                    <br />
                    <div className='flex justify-center'>
                        <button className='bg-green-400 mx-auto text-white py-4 px-8 mt-6 font-bold rounded-full hover:bg-green-600' type="submit">Sign in</button>
                    </div>

                </form>
                <hr className='border border-green-500 opacity-50 my-4' />
                <p className='text-center'><small>Or Sign in With</small></p>
                <div className='flex justify-center space-x-4'>
                    <img className='my-4 cursor-pointer h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                    <img className='my-4 cursor-pointer h-8' src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" />
                    <img className='my-4 cursor-pointer h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="" />
                </div>

                <p className='text-center'><small>Don't have an account? <Link to="/signup"> <span className="text-green-500">Signup</span></Link></small></p>
            </div>

            <div class="relative h-64 sm:h-96 lg:h-full lg:w-1/3">
                <Lottie animationData={login} loop={true} />
            </div>
        </section>
    )
}

export default Login