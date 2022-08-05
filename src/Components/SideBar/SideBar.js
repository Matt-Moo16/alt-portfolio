import React from 'react'
import {HiUser, HiCode, HiChatAlt, HiHome} from 'react-icons/hi'
import './SideBar.css'

export default function SideBar() {
    const sideBarInfo = [
        {
            iconName: 'Home',
            icon: <HiHome color='#00E5B0' size={30} title='Home'/>,
            id: '#home'
        },
        {
            iconName: 'Projects',
            icon: <HiCode color='#00E5B0' size={30} title='Projects'/>,
            id: '#projects'
        },
        {
            iconName: 'About Me',
            icon: <HiUser color='#00E5B0'size={30} title='About Me'/>,
            id: '#about'
        },
        {
            iconName: 'Contact Me',
            icon: <HiChatAlt color='#00E5B0' size={30} title='Contact Me'/>,
            id: '#contact'
        },

    ]
    
    return (
        <>
            <div className='sideBar'>
                <ul>
                    {sideBarInfo.map((info, i) => {
                        return  <li key={i}>
                                    <a href={info.id}>{info.icon}</a> 
                                </li>
                    })}
                </ul>
            </div>
        </>
    )
}