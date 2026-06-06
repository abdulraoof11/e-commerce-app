import React from 'react'
import {assets} from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border-2 border-gray-400'>
    <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
    <div className='text-[#414141]'>
        <div className='flex items-center gap-2'>
            <h1 className='w-8 md:w-11 h-[2px] bg-[#414141]'/>
            <p className='font-medium text-sm md:text-base'>OUR BEST SELLER</p>
        </div>
        <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals </h1>
         <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>Shop Now</p>
            <h1 className='w-8 md:w-11 h-[2px] bg-[#414141]'/>
        </div>
    </div>
    </div>
    <img src={assets.hero_img} className='w-full
    sm:w-1/2' />
    </div>
  )
}

export default Hero