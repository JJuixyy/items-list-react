import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="menu">
                <ul className="navbar">
                    <li><NavLink to="/" exact activeClassName="selected">HOME</NavLink></li>
                    <li><NavLink to="/projets" activeClassName="selected">PROJETS</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="selected">CONTACT</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
