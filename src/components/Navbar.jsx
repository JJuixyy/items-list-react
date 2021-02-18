import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="menu">
                <ul className="navbar">
                    <li><link><a href="">HOME</a></link></li>
                    <li><a href="">PROJETS</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
