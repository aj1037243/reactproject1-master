import React from 'react';
import '../css/NavLinks.css';

let loggedstate;

const NavLinks = props => {
    if (props.loginstatus) {
        loggedstate = (
            <ul className='nav-links'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/more_info">Information</a>
                </li>
                <li>
                    <a href="/locations">Locations</a>
                </li>
                <li>
                    <a href="/logout">Logout</a>
                </li>
                <li>
                    <a href="/Register">Register</a>
                </li>

            </ul>
        );
    } else {
        loggedstate = (
            <ul className='nav-links'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/more_info">Information</a>
                </li>
                <li>
                    <a href="/locations">Locations</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/Register">Register</a>
                </li>
            </ul>
        );
    }

    return loggedstate;
};

export default NavLinks;