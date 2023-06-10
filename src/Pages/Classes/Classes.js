import React, { useEffect, useState } from 'react'
import { getClass } from '../../API/class'
import ClassCards from './ClassCards'

function Classes() {
    const [classData, setClassData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getClass()
            .then(data => {
                setClassData(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <p>Loading...</p>
    } else {
        return (
            <div className='pt-20 md:w-[90%] mx-auto'>
                <p className='text-4xl font-serif my-8 text-gray-600'>Available Classes</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 mb-12'>
                    {
                        classData.map(data =>
                            <ClassCards key={data._id} data={data} ></ClassCards>
                        )
                    }
                </div>

            </div>
        )
    }
}

export default Classes