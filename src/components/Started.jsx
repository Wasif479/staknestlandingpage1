import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


export default function Started() {
  return (
    <div id='started'>
        <div className=' mt-24'>
            {/* px view */}
            <h1 className=' font-regular text-xl md:text-3xl font-bold ml-2 mr-2 flex  justify-center items-center'>Get Started with in 48-72 Hours</h1>
            <p className='font-regular text-xs mt-10 flex ml-1 mr-1 justify-center items-center '>We&apos;ll connect you with elite talent on-demand, ensuring your project never loses momentum</p>
            <p className='font-regular text-md mt-10 flex ml-1 mr-1 justify-center items-center  leading-relaxed'>During our regular business hours, we usually reply within a few minutes(EST)</p>
            <div className='flex justify-center items-center'>
                 <Image src={'/Icons.png'} alt='' width={150} height={50} className='flex justify-center items-center'/>
            </div>
            <div className='ml-9 mr-9 hidden md:flex'>
               <img src="/arrow.png" alt="" />  
            </div>
            <div className='md:hidden flex'>
                <img src="/arrow2.png" alt="" />
            </div>
            <div className='flex justify-center items-center mt-9 mb-12'>
              <a href='#Form'>
                 <button className='px-3 flex justify-center items-center py-2 border border-[#0577eb] text-[#0577eb] font-regular text-xs rounded-md'>Let&apos;s Talk<FaArrowRightLong className='ml-2' /></button>
              </a>
       
       </div>
        </div>
        <div>
            {/* Mobile view */}
        </div>
    </div>
  )
}
