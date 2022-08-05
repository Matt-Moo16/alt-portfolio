import React from 'react'
import mattLogo from '../../Images/new-logo.svg'
import './NavBar.css'

export default function NavBar() {

    return (
        <div className='NavBar'>
            <div className='NameImg'>
                <img src={mattLogo} alt='Matt M'></img>
            </div>
            <ul>
                <li><a href='#contact'><button>contact</button></a></li>
            </ul>
        </div>
    )
}