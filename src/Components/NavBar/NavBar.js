import React from 'react'
import mattLogo from '../../Images/mattmlogo-removebg-preview.png'
import './NavBar.css'

export default function NavBar() {

    return (
        <div className='NavBar'>
            <div className='NameImg'>
                <img src={mattLogo} alt='Matt M'></img>
            </div>
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}