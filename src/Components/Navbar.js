import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProviders'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-10">
                <div className="flex flex-wrap items-center justify-between mx-auto px-12">
                    <div className="flex items-center">
                        <img src="https://cdn.shopify.com/s/files/1/2622/4518/files/valka-yoga-logo.png" className="h-20" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">YogaCampers</span>
                    </div>
                    <div className='md:order-2'>
                        {user ? <div className="relative" onClick={() => setToggle(!toggle)}>
                            {user.photoURL ? <img className='h-12 rounded-full cursor-pointer' src={user.photoURL} alt="" /> : <img className='h-12 rounded-full cursor-pointer' src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent.png" alt="" />}
                            {toggle && (
                                <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-52 dark:bg-gray-700 dark:divide-gray-600">
                                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                        <div>{user.displayName}</div>
                                        <div className="font-medium truncate">{user.email}</div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                                        <li>
                                            <Link to="/dashboard" className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <a onClick={handleLogOut} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</a>
                                    </div>
                                </div>
                            )
                            }
                        </div> : 
                        <Link to="/login">
                            <button className="bg-[#6fc826] text-white px-5 py-2 rounded-full hover:bg-[#30a219]">Login</button>
                        </Link>}
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mr-8">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-lg">
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-green-500" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-green-500" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} to="/instructor">Instructer</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-green-500" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} to="/classes">Classes</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-green-500" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-green-500" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} to="/about">About Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar