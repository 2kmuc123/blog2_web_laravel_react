import React from 'react'
import './Navbar.scss'
import { Route, Routes, Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbarscss">
            <div className="container">
                <Link className="navbar-brand" to="/">MUC<span style={{ color: "green", fontWeight: "bold" }}>BLOG</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMain">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to='home'>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='blog'>BLOG</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
