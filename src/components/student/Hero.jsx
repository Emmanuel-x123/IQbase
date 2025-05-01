import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
       <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3x1 max-auto'>
        Your tomorrow will only depend on the path <span className='text-blue-600'>you chose today.</span> <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>
        <p className='md:block hidden text-gray-500 max-w-2xl max-auto'>We bring together great minds as instructors, with a strong passion for growth and development with interacive contents for young talents</p>
        <p className='md:hidden text-gray-500 max-w-sm mx-auto'>We bring together the best instuctors to help you achieve your professional goals.</p>
        <SearchBar/>
    </div>
  )
}

export default Hero
