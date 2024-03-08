"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { FaPhoneAlt } from "react-icons/fa";




import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Link } from 'react-scroll';




export default function Navbar() {


   
    
  return (
    <header>
        {/* pc view */}
        <nav className='hidden mb-2 md:flex justify-between items-center px-3 py-3'>
            <div className=''>
                 {/* Logo */}
               <Image src={'/Main.png'} alt='' width={220} height={45}/>
            </div>
            <div className=' flex items-center'>
                {/* middle part */}
                <ul className=' flex items-center justify-center mb-2'>
                   <a href='#started'>
                    <Link to='started' smooth={true} offset={200} duration={500}>
                     <li className='font-regular text-sm font-normal mr-3 cursor-pointer'>How it Works</li>
                    </Link>
                   </a>

                   
                  <a href='#Case'>
                    <Link to='Case' smooth={true} offset={200} duration={500}>
                     <li className='font-regular text-sm font-normal mr-3'>Case Studies</li>
                    </Link>
                  </a>
                  <a href='#Question'>
                    <Link to='Question' smooth={true} offset={200} duration={500}>
                     <li className='font-regular text-sm font-normal mr-3'>FAQs</li>
                    </Link>
                  </a>
                   <a href='#cost'>
                    <Link to='cost' smooth={true} offset={200} duration={500}>
                     <li className='font-regular text-sm font-normal mr-3'>Pricing</li>
                    </Link>
                   </a>
                  <a href="tel:+1-512-897-7189">
                    <li className='font-regular text-sm font-normal mr-3 flex justify-center items-center '><span className='text-blue-700 mr-1'><FaPhoneAlt /></span>+1-512-897-7189</li>
                  </a>
                </ul>
                <div className='ml-2'>
              {/* burron for hire now */}
              <a href='#Candy'>
                <Link to='Candy' smooth={true} offset={200} duration={500}>
                  <button className='text-sm mb-2 font-normal mr-2 py-2 px-6 bg-[#0755eb] rounded-sm text-white'>Hire Now</button>
                </Link>
              </a>
             
            </div>
            </div>
            
        </nav>
        <nav className='md:hidden flex mb-2 justify-between items-center px-3 py-3'>
            {/* Mobile view */}
            <div>
                {/* Logo */}
                <Image src={'/Main.png'} alt='' width={150} height={25}/>
            </div>
            
            <div className=''>
                <Sheet >
             <SheetTrigger>
             <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
             </SheetTrigger>
             <SheetContent  className="w-[300px] " side="right">
               <SheetHeader>
                 <SheetTitle></SheetTitle>
                
               </SheetHeader>
               <ul className=' mt flex flex-col py-3'>
               {/* <li className=' ml-3 mt-3'>
                <a href='#services'>
                 Services 
                </a>
                
                </li> */}
                <a href='#started'>
                <Link to='started' smooth={true} offset={200} duration={500}>
                  <li className=' ml-3 mt-3'>
                How it Works
                </li>
                </Link>
                </a>
                <a href='#Case'>
                <Link to='Case' smooth={true} offset={200} duration={500}>
                   <li className=' ml-3 mt-3'>
                Case Studies
                </li>
                </Link>
                </a>
               
                <a href='#cost'>
                  
                  <li className=' ml-3 mt-3'>
                 Pricing
                </li>
                </a>
                
                <a href='#Question'>
                  <li className=' ml-3 mt-3'>
                   FAQ&apos;s
                </li>
                </a>
                <a href="tel:+1-512-897-7189">
                <li className=' ml-3 mt-3  flex items-center'>
                 <span className='text-blue-700 mr-1'><FaPhoneAlt /></span>+1-512-897-7189
                </li>
                </a>
               </ul>
             </SheetContent>
           </Sheet>
            </div>
            

        </nav>
    </header>
  )
}
