import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="menu">
                <ul className="navbar">
                    <li><link><a href="">HOME</a></link></li>
                    <li><link><a href="">PROJETS</a></link></li>
                    <li><link><a href="">CONTACT</a></link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
