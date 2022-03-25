import React from 'react'
import './AdNavbar.scss'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="container AdNavbar py-4">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to={'/admin'} >BLOG</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to={'admin/Home'} className="nav-link font-weight-bold" >HOME </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={'admin/List'} className="nav-link font-weight-bold" >LIST </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={'admin/User'} className="nav-link font-weight-bold" >USER </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>

    )
}
