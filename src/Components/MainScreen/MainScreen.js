import React from 'react'
import './MainScreen.css'

export default function MainScreen() {

    return (
        <>
            <div className='mainScreen'>
                <h1 className='green'>Fullstack Developer</h1>
                <h1> with a love for</h1>
                <h1 className='blue'>Front-End</h1>
                <div className='fadeIn'>
                    <h3>Scroll Down</h3>
                    <svg className="mouse" xmlns="..." viewBox="0 0 76 130" preserveAspectRatio="xMidYmid meet">
                        <g fill="none" fillRule="evenodd">
                        <rect width="70" height="118" x="1.5" y="1.5" stroke="#96FCB6" strokeWidth="3px" rx="36"/>
                        <circle className="scroll" cx="36.5" cy="31.5" r="5" fill="#96FCB6"/>
                        </g>
                    </svg>
                </div>
            </div>
        </>
    )
}