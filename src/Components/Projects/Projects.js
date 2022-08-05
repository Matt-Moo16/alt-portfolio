import React from 'react'
import './Projects.css'

const projectInfo = [
    {
        name: 'vintager',
        about: `Vintager is a men's vintage designer web store with a fully functioning checkout flow. Utilizing CommerceJS for cart managment and shipping information and email order conformation, and Stripe for payment information/intergration.`,
        link: 'https://ecommerce-app-matt-moo16.vercel.app/',
        githubLink: 'https://github.com/Matt-Moo16/ecommerce-app',
        techStack: ['React', 'Material UI', 'Commerce JS', 'Stirpe (React Elements)'],
    },
    {
        name: 'food delivery app',
        about: `This app looks and acts just like your faviorte food delivery app (except you dont get the food at the end 😢). You are able to search your location and have local restaurants to choose from as well as a complete checkout flow.`,
        link: 'https://github.com/Matt-Moo16/FoodDeliveryApp',
        githubLink: 'https://github.com/Matt-Moo16/FoodDeliveryApp',
        techStack: ['React Native', 'Redux', 'Firebase', 'Yelp API', 'Google Places API'],
    },
    {
        name: 'podivore',
        about: 'Podivore is an app that finds a random recipe for an ingredient search and will pair that recipe with a genred podcast search with the same length as the cook time of the recipe.',
        link: 'https://matt-moo16.github.io/podivore/',
        githubLink: 'https://github.com/Matt-Moo16/podivore',
        techStack: ['JavaScript', 'jQuery', 'RESTful APIs', 'HTML5', 'CSS3'],

    },
    {
        name: 'kitlab',
        about: 'Kitlab is an app that allows users to see guitar gear that they might want all together in one place to get an idea of what a setup might look like. Users can create custom setups of different gear including guitars, pedals, and amps and then save those setups. Once the setups are saved users can view their custom setups and click each product in the setup to go to its manufacturer product page.',
        link: 'https://github.com/Matt-Moo16/kitlab',
        githubLink: 'https://github.com/Matt-Moo16/giftwrap-app',
        techStack: ['React', 'Express', 'Node.js', 'PostgreSQL'],
    },
    {
        name: 'giftwrap',
        about: 'Giftwrap is an app that allows users to keep track of gifts that they want to purchase for their family or friends. Users can create lists to represent the people they want to gift to and add links from across the web. When the links are added as gifts, Giftwrap does the rest by taking the OG tags from the link to display product information at a glance for the user.',
        link: 'https://giftwrap-app.vercel.app/',
        githubLink: 'https://github.com/Matt-Moo16/giftwrap-app',
        techStack: ['React', 'Express', 'Node.js', 'PostgreSQL'],
    },
    
]

export default function Projects() {
    return (
        <>
            <h1>projects</h1>
            <div className='projectDiv' id='projects'>
                {projectInfo.map((info, index) => {
                   return   <div className='sideBySide '>
                       <div key={index} className='projectInfo bounce'>
                                <h3>{info.name}</h3>
                                <p>{info.about}</p>
                                <ul>
                                    {info.techStack.map((tech, i) => {
                                        return <li key={i}>{tech}</li>
                                    })}
                                </ul>
                                <div className='projectLinks'>
                                    <a href={info.link} target='_blank'><button>demo</button></a>
                                    <a href={info.githubLink} target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#00E5B0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                        <title>GitHub</title>
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    </a>
                                </div>
                            </div>  
                   </div>
                })}   
            </div>
        </>
    )
}