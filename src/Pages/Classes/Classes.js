import React, { useContext, useEffect, useState } from 'react'
import { getApprovedClasses, selectClass } from '../../API/class'
import ClassCards from './ClassCards'
import { AuthContext } from '../../Providers/AuthProviders'
import { useNavigate } from 'react-router-dom'

function Classes() {
    const [classData, setClassData] = useState([])
    const [reload, setReload] = useState(false)
    const { user, role } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        getApprovedClasses()
            .then(data => {
                setClassData(data)
            })
    }, [user, reload])

    const handleSelect = (id, name, image, price, instructor) => {
        if (!role) {
            navigate("/login")
        } else {
            const data = {
                class_id: id,
                className: name,
                classImage: image,
                price: price,
                instructor: instructor,
                studentName: user.displayName,
                studentEmail: user.email,
                enrolled: false
            }

            selectClass(data)
            setReload(!reload)
        }


    }

    return (
        <div className='pt-20 md:w-[90%] mx-auto dark:text-white'>
            <p className='text-4xl font-serif my-8 text-gray-600 dark:text-white'>Available Classes</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 pb-12'>
                {
                    classData.map(data =>
                        <ClassCards key={data._id} data={data} handleSelect={handleSelect} userEmail={user?.email} role={role} ></ClassCards>
                    )
                }
            </div>

        </div>
    )
}

export default Classes