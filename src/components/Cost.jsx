"use client"
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image';
  

export default function Cost() {
  return (
    <>
    <div id='cost' className='bg-[#cfebf3] min-h-screen flex flex-col justify-center items-center  -skew-y-6 mt-7'>
        <div className='skew-y-6  flex flex-col justify-center items-center  '>
            <div className='flex justify-center items-center'>
                <h1 className='font-regular font-bold text-xl md:text-3xl mt-9'>Clarity in Cost, Flexibility in Choice</h1>
            </div>
            <div className='md:flex mt-16 justify-center items-center hidden '>
                <div className='bg-white flex flex-col justify-center items-center aspect-square rounded-l-md h-64'>
                     <span className=' font-regular text-normal'>Lamp stack &</span>
                     <span className='font-regular'>Ecommerce Developers</span>
                     <span className='text-xs font-regular mt-3'>Starting From</span>
                     <span className='font-regular mt-3 text-3xl text-[#0755e9]'>$16/hr</span>
              </div>
              <div className=' flex flex-col justify-center items-center aspect-square rounded-xl h-72 bg-[#0755e9]'>
                     <span className='font-regular text-normal text-white'>Software Engineers & High-</span>
                     <span className='font-regular text-white'>Skilled Developers</span>
                     <span className='text-xs font-regular mt-3 text-white'>Starting From</span>
                     <span className='font-regular mt-3 text-3xl text-white'>$25/hr</span>
              </div>
              <div className='bg-white flex flex-col justify-center items-center aspect-square rounded-md h-64'>
                     <span className='text-sm text-[#0755e9] font-regular'>Flexible engagement</span>
                     <span className='text-sm text-[#0755e9] font-regular'>models to suit different</span>
                     <span className='text-sm text-[#0755e9] font-regular'>needs and budgets</span>
                     <span className='mt-8 text-xs font-regular '>
                      lets connect so that we can
                     </span>
                     <span className='text-xs font-regular '>
                        help you out with your project
                     </span>
                     <span className='text-xs font-regular '>
                        and a customized plan !
                     </span>
              </div>
    
            </div>
            {/* phone view */}
            <div className='flex justify-center items-center h-full md:hidden mt-5'>
                <Carousel>
            <CarouselContent>
              <CarouselItem className="flex justify-center items-center">
                <div className='bg-white flex flex-col justify-center items-center aspect-square rounded-l-md h-56'>
                     <span className=' font-regular text-normal'>Lamp stack &</span>
                     <span className='font-regular'>Ecommerce Developer</span>
                     <span className='text-xs font-regular mt-3'>Starting From</span>
                     <span className='font-regular mt-3 text-3xl text-[#0755e9]'>16$/hr</span>
              </div>
              </CarouselItem>
              <CarouselItem className="flex justify-center items-center">
              <div className=' flex flex-col justify-center items-center aspect-square rounded-xl h-60 bg-[#0755e9]'>
                     <span className='font-regular text-normal text-white'>Software Engineers & High-</span>
                     <span className='font-regular text-white'>Skilled Developers</span>
                     <span className='text-xs font-regular mt-3 text-white'>Starting From</span>
                     <span className='font-regular mt-3 text-3xl text-white'>$25/hr</span>
              </div>
              </CarouselItem>
              <CarouselItem className="flex justify-center items-center">
              <div className='bg-white flex flex-col justify-center items-center aspect-square rounded-md h-56'>
                     <span className='text-sm text-[#0755e9] font-regular'>Flexible engagement</span>
                     <span className='text-sm text-[#0755e9] font-regular'>models to suit different</span>
                     <span className='text-sm text-[#0755e9] font-regular'>needs and budgets</span>
                     <span className='mt-8 text-xs font-regular font-semibold'>
                      lets connect so that we can
                     </span>
                     <span className='text-xs font-regular font-semibold'>
                        help you out with your project
                     </span>
                     <span className='text-xs font-regular font-semibold'>
                        and a customized plan !
                     </span>
              </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
            </div>
            

            <div className='flex justify-center items-center mt-5 mb-8'>
              <a href="#Form">
                 <button className='px-3 flex justify-center items-center py-2 border border-[#0577eb] text-[#0577eb] font-regular text-xs rounded-md'>Let&apos;s Talk<FaArrowRightLong className='ml-2' /></button>
              </a>
       
       </div>
                       
        </div>
        {/* jensen */}
        
        
    </div>
    
    </> 
   
    
  )
}
