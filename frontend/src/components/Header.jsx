import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>TaskSetter</Link>
            </div>
            <ul>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <FaUser /> Register
                    </Link>
                </li>
            </ul>
        </header>        
    )
}