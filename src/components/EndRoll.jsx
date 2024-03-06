"use client"
import Image from 'next/image'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
  

export default function EndRoll() {
  return (
    <div>
        <div className='hidden md:flex justify-center items-center mt-11'>
            {/* Pc view */}
            <Image src={'/list.png'} alt='' width={900} height={700} quality={100}/>
        </div>
        <div className='flex md:hidden justify-center items-center mt-11'>
            {/* Mobile view */}
          <Carousel showArrows={true}>
             <div className=''>
                <Image src={'/2.png'} alt='' width={400} height={40} quality={100}/>
             </div>
             <div>
                <Image src={'/3.png'} alt='' width={400} height={40} quality={100}/>
             </div>
             <div>
                <Image src={'/4.png'} alt='' width={400} height={40} quality={100}/>
             </div>
             <div>
                <Image src={'/5.png'} alt='' width={400} height={40} quality={100}/>
             </div>
             <div>
                <Image src={'/61.png'} alt='' width={400} height={40} quality={100}/>
             </div>
          </Carousel>

        </div>
    </div>
  )
}
