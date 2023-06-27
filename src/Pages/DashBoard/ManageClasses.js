import React, { useEffect, useState } from 'react'
import { classStatus, getAllClasses } from '../../API/class'

function ManageClasses() {
    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        getAllClasses()
            .then(data => setData(data))
    }, [reload])

    const handleApprove = (id) => {
        classStatus(id, "approved")
            .then(data => {
                if (data.modifiedCount === 1) {
                    setReload(!reload)
                }
            })
    }

    const handleReject = (id) => {
        classStatus(id, "denied")
            .then(data => {
                if (data.modifiedCount === 1) {
                    setReload(!reload)
                }
            })
    }

    return (
        <>
            <p className='text-center font-bold text-5xl tracking-tight pt-10 font-serif dark:text-white'>All Classes</p>
            <div className='max-w-[85%] mx-auto mt-8 pb-16'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className='flex justify-between items-center'>
                        <div className="pb-4 bg-white dark:bg-gray-900">
                            <label htmlFor="table-search" className="sr-only">Search</label>
                            <div className="relative mt-1">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500" placeholder="Search for classes" />
                            </div>
                        </div>
                        <button className='py-2 px-4 bg-emerald-500 text-white rounded-lg'>Sort by</button>
                    </div>

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-center text-gray-700 uppercase bg-green-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3">
                                    No.
                                </th>
                                <th scope="col" className="py-3 text-left">
                                    Image
                                </th>
                                <th scope="col" className="py-3 text-left">
                                    Class name
                                </th>
                                <th scope="col" className="py-3">
                                    Instructor
                                </th>
                                <th scope="col" className="py-3">
                                    Email
                                </th>
                                <th scope="col" className="py-3">
                                    Seat
                                </th>
                                <th scope="col" className="py-3">
                                    Price
                                </th>
                                <th scope="col" className="py-3">
                                    Status
                                </th>
                                <th scope="col" className="py-3">
                                    Action
                                </th>
                                <th scope="col" className="py-3">
                                    Feedback
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((d, i) =>
                                    <tr key={d._id} className="bg-white text-center border-b dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="p-4">
                                            <div className="flex ps-2 items-center">
                                                {i + 1}
                                            </div>
                                        </td>
                                        <th scope="row" className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img className='w-16' src={d.image} alt="" />
                                        </th>
                                        <th scope="row" className="py-4 font-medium text-gray-900 text-left whitespace-nowrap dark:text-white">
                                            {d.name}
                                        </th>
                                        <td className="py-4">
                                            {d.instructor.name}
                                        </td>
                                        <td className="py-4">
                                            {d.instructor.email}
                                        </td>
                                        <td className="py-4">
                                            {d.seat - d.enrolled}
                                        </td>
                                        <td className="px-4 py-4 text-right">
                                            {d.price}
                                        </td>
                                        <td className="py-4">
                                            {d.status}
                                        </td>
                                        <td className="py-4">

                                            <div className='flex items-center justify-center space-x-4'>
                                                <button onClick={() => handleApprove(d._id)} disabled={d.status === "approved" || d.status === "denied"}>
                                                    <img className='w-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png" alt="" />
                                                </button>
                                                <button onClick={() => handleReject(d._id)} disabled={d.status === "approved" || d.status === "denied"}>
                                                    <img className='w-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1024px-Flat_cross_icon.svg.png" alt="" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <button type="button" className="text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center">Feedback</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ManageClasses