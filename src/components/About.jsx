import React from 'react'
import { ABOUT_TEXT } from '../constants'
import aboutImage from '../assets/aboutImage.png'

function About() {
  return (
    <div className='border-b border-neutral-900 pb-4 flex flex-col justify-center items-center'>
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='w-100 mt-[-50px]' src={aboutImage} alt="about" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About