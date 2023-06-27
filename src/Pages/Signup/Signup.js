import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProviders'
import { saveUser } from '../../API/auth';

function Signup() {
    const [show, setShow] = useState(false)
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                updateUser(name, photo)
                    .then(() => {
                        // Profile updated!
                        saveUser(user)
                        navigate('/')
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
            })
            .catch((error) => {
                
            });
    }

    return (
        <section className='2xl:h-[100vh] relative flex justify-center items-center dark:bg-gray-900'>
            <div className="w-full px-4 my-8 sm:px-6 sm:py-8 lg:px-8 lg:w-96 bg-gray-100 rounded-xl">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className='text-center pb-5 text-3xl text-green-400 font-extrabold'>Sign Up</h2>
                </div>

                <form onSubmit={handleSignUp}>
                    <div className="relative">
                        <input type="text" name="name" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-green-400 appearance-none  focus:outline-none focus:ring-0 focus:border-green-400 peer mb-6" placeholder=" " required />
                        <label htmlFor="floating_outlined" className="absolute text-md text-green-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-green-400 peer-focus:dark:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-gray-100">Enter Username</label>
                    </div>

                    <div className="relative">
                        <input type="email" name="email" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-green-400 appearance-none  focus:outline-none focus:ring-0 focus:border-green-400 peer mb-6" placeholder=" " required />
                        <label htmlFor="floating_outlined" className="absolute text-md text-green-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-green-400 peer-focus:dark:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-gray-100">Enter Email</label>
                    </div>

                    <div className="relative">
                        <input type={show ? "text" : "password"} name="password" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-green-400 appearance-none  focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " required />
                        <label htmlFor="floating_outlined" className="absolute text-md text-green-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-green-400 peer-focus:dark:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-gray-100">Password</label>
                    </div>

                    <p className='mb-4 text-black underline cursor-pointer inline-block' onClick={() => setShow(!show)}>
                        <small>
                            {
                                show ? <span>Hide Password</span> :
                                    <span>Show Password</span>
                            }
                        </small>
                    </p>

                    <div className="relative">
                        <input type="text" name="photo" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-green-400 appearance-none  focus:outline-none focus:ring-0 focus:border-green-400 peer mb-6" placeholder=" " required />
                        <label htmlFor="floating_outlined" className="absolute text-md text-green-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-green-400 peer-focus:dark:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-gray-100">Enter Photo URL</label>
                    </div>

                    <br />

                    <div className='flex justify-center'>
                        <button className='bg-green-400 mx-auto text-white py-4 px-8 font-bold rounded-full hover:bg-green-400' type="submit">Sign up</button>
                    </div>

                </form>
                <hr className='border border-green-400 opacity-50 my-4' />
                <p className='text-center text-black'><small>Already have an account? <Link to="/login"> <span className="text-blue-600 text-lg">Login</span></Link></small></p>
            </div>
        </section>
    )
}

export default Signup