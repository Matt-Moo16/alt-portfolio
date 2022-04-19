import React from 'react'
import aboutLogo from '../../Images/about-logo.svg'
import projectLogo from '../../Images/project-logo.svg'
import blogLogo from '../../Images/blog-logo.svg'
import contactLogo from '../../Images/contact-logo.svg'
import './SideBar.css'

export default function SideBar() {
    const sideBarInfo = [
        {
            iconName: 'Projects',
            icon: `${projectLogo}`
        },
        {
            iconName: 'About Me',
            icon: `${aboutLogo}`
        },
        {
            iconName: 'Blog',
            icon: `${blogLogo}`
        },
        {
            iconName: 'About Me',
            icon: `${contactLogo}`
        },

    ]
    
    return (
        <>
            <div className='sideBar'>
                <ul>
                    {sideBarInfo.map((info, i) => {
                        return  <li key={i}>
                                    <img src={info.icon} title={info.iconName} className='tooltip' /> 
                                </li>
                    })}
                </ul>
            </div>
        </>
    )
}