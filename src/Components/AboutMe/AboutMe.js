import React from 'react'
import './AboutMe.css'
import jsLogo from '../../Images/js_logo.svg'
import htmlLogo from '../../Images/html5-logo.svg'
import cssLogo from '../../Images/css3-logo.svg'
import reactLogo from '../../Images/react-logo.svg'
import pythonLogo from '../../Images/python-5.svg'
import nodeLogo from '../../Images/nodejs-icon.svg'
import materialUILogo from '../../Images/material-ui-1.svg'
import postgresqlLogo from '../../Images/postgresql.svg'
import gitLogo from '../../Images/git-icon.svg'
import githubLogo from '../../Images/github-icon.svg'
import firebaseLogo from '../../Images/firebase-1.svg'
import reduxLogo from '../../Images/redux.svg'


const skillsInfo = [
    {
        logo: reactLogo,
        skillName: 'React'
    },
    {
        logo: reactLogo,
        skillName: 'React Native'
    },
    {
        logo: jsLogo,
        skillName: 'JavaScript'
    },
    {
        logo: htmlLogo,
        skillName: 'HTML'
    },
    {
        logo: cssLogo,
        skillName: 'CSS'
    },
    {
        logo: pythonLogo,
        skillName: 'Python'
    },
    {
        logo: nodeLogo,
        skillName: 'Node.js'
    },
    {
        logo: materialUILogo,
        skillName: 'Material UI'
    },
    {
        logo: postgresqlLogo,
        skillName: 'PostgreSQL'
    },
    {
        logo: gitLogo,
        skillName: 'Git'
    },
    {
        logo: githubLogo,
        skillName: 'GitHub'
    },
    {
        logo: firebaseLogo,
        skillName: 'Firebase'
    }, 
    {
        logo: reduxLogo,
        skillName: 'Redux'
    }

]

export default function AboutMe() {
    return (
        <>
            <div className='aboutMeDiv' id='about'>
                <div className='infoDiv'>
                    <h1>about me</h1>
                    <h3>hi! i'm matt. 👋</h3>
                    <p>I am a web developer from Atlanta, GA that specializes in front-end development. I graduated from Thinkful's Software Engineering Flex Program in March of 2021.</p>
                    <p>When I am not designing and creating projects I am cooking, playing with my cat and dog, or thrift shopping. My project interests currently are focused on apps that have a positive social impact and creating beautiful, accessible, and intuitive user experiences. If this is up your alley, then <a href='#contact'>let's get in touch!</a></p>
                </div>
                <div className='skillsDiv'>
                    <h3>stuff i know</h3>
                    <ul>
                        {skillsInfo.map((skill, i) => {
                            return <div key={i} className='skillDiv'>
                                <img src={skill.logo}></img>
                                <h4>{skill.skillName}</h4>
                            </div>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}