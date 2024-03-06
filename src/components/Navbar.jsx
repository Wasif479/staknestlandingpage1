"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"



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
                   <li className='font-regular text-sm font-normal mr-3'>How it Works</li>
                   <li className='font-regular text-sm font-normal mr-3'>Case Studies</li>
                   <li className='font-regular text-sm font-normal mr-3'>FAQs</li>
                   <li className='font-regular text-sm font-normal mr-3'>Apply as Talent</li>
                   <li className='font-regular text-sm font-normal mr-3 flex justify-center items-center '><span className='text-blue-700 mr-1'><FaPhoneAlt /></span>+1-512-897-7189</li>
                </ul>
                <div className='ml-2'>
              {/* burron for hire now */}
              <button className='text-sm mb-2 font-normal mr-2 py-2 px-6 bg-[#0755eb] rounded-sm text-white'>Hire Now</button>
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
                 <SheetTitle>Navigation Pannel</SheetTitle>
                
               </SheetHeader>
               <ul className=' mt flex flex-col py-3'>
                <li className=' ml-3 mt-3'>
                    Services
                </li>
                <li className=' ml-3 mt-3'>
                    How it Works
                </li>
                <li className=' ml-3 mt-3'>
                    Case Studies
                </li>
                <li className=' ml-3 mt-3'>
                    Apply as Talent
                </li>
                <li className=' ml-3 mt-3  flex items-center'>
                 <span className='text-blue-700 mr-1'><FaPhoneAlt /></span>+1-512-897-7189
                </li>
               </ul>
             </SheetContent>
           </Sheet>
            </div>
            

        </nav>
    </header>
  )
}
