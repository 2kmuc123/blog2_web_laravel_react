import React from 'react'
import { Link, Outlet, Route } from 'react-router-dom'


export const Home = () => {
    return (
        <div>
            <br /><br /><br />
            <h1 className='text-center'>BLOG CỦA ANH HỢP ĐANG ĐƯỢC ĐIỀU CHẾ !!!</h1>
            <Link to='Add' className='btn btn-primary p-3'>ADD</Link>
            <br /><br /><br />
            <Outlet />
        </div>
    )
}
