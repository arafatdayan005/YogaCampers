import React from 'react'

function ClassCards({ data }) {
    const { image, name, instructor, description, price, seat } = data

    return (
        <div className='shadow-lg rounded-xl bg-lime-50'>
            <img className='h-64 w-full rounded-xl  rounded-bl-none rounded-br-none' src={image} alt="" />
            <div className='px-8 py-6 text-center'>
                <p className='font-semibold text-3xl text-gray-600'> {name} </p>
                <p className='font-medium text-lg text-gray-600 mt-2'> Instructor: {instructor.name} </p>
                <div className='flex justify-around mt-4'>
                    <p className='text-lg text-gray-600'> Available Seat: {seat} </p>
                    <p className='text-lg text-gray-600'> Price: ${price} </p>
                </div>
                <p className='text-left my-4'> Details: {description.slice(0, 180)}... </p>
                <button className='mx-auto bg-lime-500 hover:bg-lime-600 px-6 py-2 rounded-full text-white'>Select</button>
            </div>
        </div>
    )
}

export default ClassCards