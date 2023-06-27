import React, { useEffect, useState } from 'react'
import { getSelectedClass } from '../../API/class'

function ClassCards({ data, handleSelect, userEmail, role }) {
    const [studentEmail, setStudentEmail] = useState(null)
    const [reload, setReload] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const { _id, image, name, instructor, description, price, seat, enrolled } = data

    useEffect(() => {
        getSelectedClass(data._id, userEmail)
            .then(res => res.json())
            .then(data => setStudentEmail(data.studentEmail))
            .catch(err => console.log(err))
    }, [reload, userEmail, data._id])

    return (
        <div className='shadow-lg rounded-xl bg-lime-100 dark:bg-teal-800'>
            <img className='h-64 w-full rounded-xl  rounded-bl-none rounded-br-none' src={image} alt="" />
            <div className='px-8 py-6 text-center'>
                <p className='font-semibold text-3xl text-gray-600 dark:text-white'> {name} </p>
                <p className='font-medium text-lg text-gray-600 dark:text-white mt-2'> Instructor: {instructor.name} </p>
                <div className='flex justify-around mt-4'>
                    <p className='text-lg text-gray-600 dark:text-white'> Available Seat: {seat - enrolled} </p>
                    <p className='text-lg text-gray-600 dark:text-white'> Price: ${price} </p>
                </div>
                <p className='text-left my-4'> Details: {description.slice(0, 180)}... </p>
                <button onClick={() => {
                    handleSelect(_id, name, image, price, instructor)
                    setReload(!reload)
                    setDisabled(true)
                }} className={`mx-auto bg-lime-500 ${userEmail === studentEmail || disabled ? "bg-lime-600" : "hover:bg-lime-600"} ${role === "instructor" ? "bg-lime-500 hover:bg-lime-500 cursor-not-allowed" : ""} px-6 py-2 rounded-full text-white`} disabled={userEmail === studentEmail || disabled || role === "instructor"}>{ (role && userEmail === studentEmail) || (role && disabled) ? "Selected" : "Select"}</button>
            </div>
        </div>
    )
}

export default ClassCards