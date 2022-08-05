import React from 'react'
import './ContactMe.css'

export default function ContactMe() {
    return (
        <div className='contactMe' id='contact'>
            <div className='centerAll'>
                <h1>contact me</h1>
                <p>I am currently looking for new opprotunities in frontend web development. Whether you are looking for someone to build your dream website or think I would be a perfect fit for your team, let's get in touch!</p>
                <a href='mailto:matt.roger.m@gmail.com'><button>let's talk</button></a>
            </div>
        </div>
    )
}