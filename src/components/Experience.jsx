import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextJS from '../assets/nextjs.png'
import nodeJs from '../assets/node.png'
import graphQl from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'


const Experience = () => {
  return (
    <div name="experience" className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Experience</p>
                <p className='py-6'>These are the technologies I have worked with . . .</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                <div>
                    <img src={html} alt=""/>
                    <p>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience