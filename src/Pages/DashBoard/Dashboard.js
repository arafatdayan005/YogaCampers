import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <>
            <Sidebar></Sidebar>
            <div className='ps-64'>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Dashboard