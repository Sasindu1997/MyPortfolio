import React from 'react'
import ReactQueryApp from '../assets/portfolio/p1.jpg'
import ReactFirebase from '../assets/portfolio/p2.png'
import ReactJSNodeJS from '../assets/portfolio/p3.jpg'
import TaskTracker from '../assets/portfolio/p4.png'
import JAVA from '../assets/portfolio/p5.jpg'
import NLP from '../assets/portfolio/p6.jpg'
import MicroServices from '../assets/portfolio/p7.jpg'
import ReactNative from '../assets/portfolio/p8.jpg'
import Bootstrap from '../assets/portfolio/p10.png'
import NetCore from '../assets/portfolio/p11.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: ReactQueryApp,
            title: 'React-Query-todoApp',
            link: 'https://github.com/Sasindu1997/React-Query-todoApp'
        },
        {
            id: 2,
            src: ReactFirebase,
            title: 'React-Firebase-crud',
            link: 'https://github.com/Sasindu1997/React-Firebase-crud'
        },
        {
            id: 3,
            src: ReactJSNodeJS,
            title: 'ReactJS-NodeJS-with-MongoDB',
            link: 'https://github.com/Sasindu1997/ReactJS-NodeJS-CRUD-with-MongoDB'
        },
        {
            id: 4,
            src: TaskTracker,
            title: 'Task-tracker_Angular',
            link: 'https://github.com/Sasindu1997/Task-tracker_Angular'
        },
        {
            id: 5,
            src: JAVA,
            title: 'RepX',
            link: 'https://github.com/Sasindu1997/RepX'
        },
        {
            id: 6,
            src: NLP,
            title: 'ML-NLP-English-to-ASL-translation-app',
            link: 'https://github.com/Sasindu1997/ML-NLP-English-to-ASL-translation-app'
        },
        {
            id: 7,
            src: MicroServices,
            title: 'CTSE-Microservice-E-Shopping',
            link: 'https://github.com/ShalithaCell/CTSE-Microservice-E-Shopping'
        },
        {
            id: 8,
            src: ReactNative,
            title: 'SaveMyPin',
            link: 'https://github.com/ShalithaCell/SaveMyPin'
        },
        {
            id: 9,
            src: ReactJSNodeJS,
            title: 'EventManager',
            link: 'https://github.com/ShalithaCell/EventManager'
        },
        {
            id: 10,
            src: Bootstrap,
            title: 'Native-E-Mart',
            link: 'https://github.com/ShalithaCell/Native-E-Mart'
        },
        {
            id: 11,
            src: NetCore,
            title: 'APlus-React-Web',
            link: 'https://github.com/ShalithaCell/APlus-React-Web'
        },
        {
            id: 12,
            src: JAVA,
            title: 'SimpleSurveyCreator',
            link: 'https://github.com/ShalithaCell/SimpleSurveyCreator'
        }
    ]
  return (
    <div name="portfolio" id="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-24 pt-10'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500' >Portfolio</p>
            <p className='py-6'>Check out some of my work here . . .</p>
        </div>
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {portfolios.map(({id, src, title, link}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg justify-center text-center mb-2'>
                <h3 className='py-2 mb-2'>{title}</h3>
                <img  alt="" src={src} className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-gray-500'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={link}  target="_blank" rel="noreferrer"
                    className='flex justify-between items-center w-full text-white'>Code
                    </a></button>
                </div>
            </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Portfolio