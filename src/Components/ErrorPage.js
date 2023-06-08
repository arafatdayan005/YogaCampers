import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Lottie from "lottie-react";
import img from './../Images/29894-error-404-page.json'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-md text-center'>
                    <h2 className='font-extrabold text-8xl text-green-400'>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2>
                    <Lottie animationData={img} loop={true} />
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-green-400 text-white'
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage