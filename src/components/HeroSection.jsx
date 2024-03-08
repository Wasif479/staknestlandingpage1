import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div>
        <div className='md:flex hidden  mt-8'>
            {/* Pc view */}
          <div className='w-1/2 ml-4  mt-32 '>
            <div className='text-4xl font-regular font-bold'>Hire Top 1% Pre-Vetted Developers in <span className='text-blue-700'>48 hours! </span></div> 
            <div className=' mt-12 font-regular '>
                Zero Risk, All Reward: Start Your 7 Day Free Trail Today!
            </div>
            <div className=' mt-12 font-regular '>
              <a href='#Candy'>
                  <button className='text-sm mb-2  mr-2 py-2 px-6 bg-blue-700 rounded-sm text-white'>Book a Discovery Workshop Call</button>
              </a>
          
            </div>
          </div>
          <div className=''>
            <Image src={'/Hero.png'} alt='' width={500} height={500} className='mt-5' />
          </div>
        </div>
        <div className='hidden md:flex justify-center items-center font-regular mt-10 '>Join the Ranks of Remote First Companies</div>
        <div className='flex md:hidden flex-col'>
            {/* Mobile View */}
            <div className='flex justify-center items-center'>
              <Image src={'/Hero.png'} alt='' width={500} height={500} className='mt-5' />
            </div>
            <div className='text-4xl font-regular font-bold mr-16  flex-justify-center text-center ml-16'>
             Hire Top 1% Pre-Vetted Developers in <span className='text-blue-700'>48 hours! </span>
            </div>
            <div className=' mt-12 font-regular font-medium flex justify-center items-center'>
              <a href='#Candy'>
                <button className='text-sm mb-2  mr-2 py-2 px-6 bg-blue-700 rounded-sm text-white'>Book a Discovery Workshop Call</button> 
              </a>
           
            </div>
            <div className=' flex md:hidden justify-center items-center font-regular mt-10 '>Join the Ranks of Remote First Companies</div>
        </div>
    </div>
  )
}
