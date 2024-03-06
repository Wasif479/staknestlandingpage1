"use client"
import React, { useState } from 'react';
import Image from 'next/image';



import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  
  

const FormLayout = () => {
  const [checkbox,setcheckbox] = useState(true)
  const handlecheckbox = () =>{
    setcheckbox(!checkbox)
  }
  return (
    <>
     <div className="relative h-screen hidden lg:flex  ">
      {/* Light blue background section */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#cfebf3] -skew-y-6"></div>
      {/* White background section */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white -skew-y-6"></div>
      {/* Form container */}
      <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl border border-[#71d1d5] shadow-lg h-3/4 w-3/4">
        {/* Your form content goes here */}
        <form className=''>
            <div className=' flex  justify-center items-center flex-col'>
                  {/* Form fields go here */}
                  <span className='absolute top-0 right-1'>
                    <Image src={'/shine.png'} alt='' width={50} height={50}  className=' flex justify-center items-end'/>
                  </span>
           <h1 className='font-bold text-2xl font-regular '>Build Your <span className='text-[#0755e9]'>Free</span>  Discovery Workshop Call</h1>
           <p className='font-regular mt-5'>Curious about what your project will cost?</p>
            </div>
         <div className='flex items-center justify-center font-regular mt-5'>
            <div className='flex flex-col text-xs'>
                First name
              <input type="text" id='name' placeholder='' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />   
            </div>
             <div className='flex flex-col text-xs'>
                 Phone Number* 
                <input type="text" id='Phone' placeholder='' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />
             </div>
             <div className=' flex flex-col text-xs relative '>
             Looking for* 
             <Select className="">
  <SelectTrigger className="w-[180px] border border-black mr-3 outline-none">
    <SelectValue placeholder="" className='' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Hourly </SelectItem>
    <SelectItem value="dark">Part Time </SelectItem>
    <SelectItem value="system">Full Time</SelectItem>
  </SelectContent>
</Select>
             </div>
             <div className=' flex flex-col text-xs relative'>
             No of Resources*
             <Select>
  <SelectTrigger className="w-[180px] border border-black outline-none ">
    <SelectValue placeholder="" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">1</SelectItem>
    <SelectItem value="dark">2</SelectItem>
    <SelectItem value="system">3</SelectItem>
    <SelectItem value="system">4 or More</SelectItem>
  </SelectContent>
</Select>

        

             </div>
         </div>
         <div className='flex items-center justify-center font-regular mt-2'>
         <div className='flex flex-col text-xs'>
                Email*
              <input type="type" id='name' placeholder='' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />   
         </div>
         <div className='flex flex-col text-xs'>
                Company Website*
              <input type="text" id='name' placeholder='' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />   
            </div>
            <div className=' flex flex-col text-xs relative '>
             Length of Engagement* 
             <Select className="">
  <SelectTrigger className="w-[370px] border border-black outline-none">
    <SelectValue placeholder="" className='' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Month on Month </SelectItem>
    <SelectItem value="dark">3 Months </SelectItem>
    <SelectItem value="system">6 Months or longer</SelectItem>
  </SelectContent>
</Select>
             </div>
           
         </div>
         <div className='flex items-center justify-center font-regular mt-2 '>
         <div className='flex flex-col text-xs '>
                Message
              <textarea type="text" id='message' rows={5} cols={30} placeholder='' className='w-[710px] outline-none  border-black rounded-md p-3 border ' />   
         </div>
         
         
           
         </div>
         <div className='flex justify-between items-center mt-5'>
         <button className={checkbox?'text-xs mb-2 font-normal mr-2 py-2 px-6 bg-blue-700 rounded-sm text-white cursor-pointer':"text-xs mb-2 font-normal mr-2 py-2 px-6 bg-blue-700 rounded-sm text-white cursor-not-allowed "}>Hire Now</button>
          <div className='text-xs  font-regular flex items-center mb-3'>
          <input type="checkbox" defaultChecked onClick={handlecheckbox} className='mr-1'/>I have read and agree to the <span className='text-[#0755e9] p-1'> Privacy Policy </span> and <span className='text-[#0755e9] p-1'> Terms of Service </span>
          </div>
         </div>
        
        </form >
        
      </div>
    </div>
    


{/* Medium screen view  */}


<div className="relative h-screen lg:hidden md:flex hidden ">
      {/* Light blue background section */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#cfebf3] -skew-y-6"></div>
      {/* White background section */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white -skew-y-6"></div>
      {/* Form container */}
      <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl border border-[#71d1d5] shadow-lg  w-3/4">
        {/* Your form content goes here */}
        <form className=''>
        <div className=' flex  justify-center items-center flex-col'>
                  {/* Form fields go here */}
           <h1 className='font-bold sm:text-xl md:text-2xl font-regular '>Build Your <span className='text-[#0755e9]'>Free</span>  Discovery Workshop Call</h1>
           <p className='font-regular text-xs  mt-5'>Curious about what your project will cost?</p>
            </div>
        <div className='flex items-center justify-center font-regular mt-5'>
          <div className='flex flex-col text-xs'>
                First name*
              <input type="text" id='name' placeholder='' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>
          <div className='flex flex-col text-xs'>
                Phone Number*
              <input type="number" id='name' placeholder='' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>

        </div>
        <div className='flex items-center justify-center font-regular mt-5'>
          <div className='flex flex-col text-xs'>
                Looking For*
              <Select className="">
  <SelectTrigger className="w-40 border border-black mr-3 outline-none">
    <SelectValue placeholder="" className='' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Hourly </SelectItem>
    <SelectItem value="dark">Part Time </SelectItem>
    <SelectItem value="system">Full Time</SelectItem>
  </SelectContent>
</Select>   
          </div>
          <div className=' flex flex-col text-xs relative'>
             No of Resources*
             <Select>
  <SelectTrigger className="w-40 border border-black mr-3 outline-none ">
    <SelectValue placeholder="" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">1</SelectItem>
    <SelectItem value="dark">2</SelectItem>
    <SelectItem value="system">3</SelectItem>
    <SelectItem value="system">4 or More</SelectItem>
  </SelectContent>
</Select>

        

             </div>

        </div>
        <div className='flex items-center justify-center font-regular mt-5'>
          <div className='flex flex-col text-xs'>
                Email
              <input type="text" id='name' placeholder='' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>
          <div className='flex flex-col text-xs'>
                 Company Website
              <input type="text" id='name' placeholder='' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>

        </div>
        <div className='flex items-center justify-center font-regular mt-5 '>
        <div className=' flex flex-col text-xs relative '>
             Length of Engagement* 
             <Select className="">
  <SelectTrigger className="w-80 border border-black outline-none mr-3">
    <SelectValue placeholder="" className='' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Month on Month </SelectItem>
    <SelectItem value="dark">3 Months </SelectItem>
    <SelectItem value="system">6 Months or longer</SelectItem>
  </SelectContent>
</Select>
             </div>
          

        </div>
        <div className='flex items-center justify-center font-regular mt-5'>
        <div className='flex flex-col text-xs '>
                Message
              <textarea type="text" id='message' rows={5} cols={30} placeholder='' className=' w-80 outline-none  border-black rounded-md mr-3 p-2 border ' />   
         </div>
         </div>
         <div className=' flex ml-1 mt-2 text-xs w-full  '>
         <input type="checkbox" defaultChecked onClick={handlecheckbox} className=' mr-1'/><p>I have read and agree to the <span className='text-[#0755e9] p-1'> Privacy Policy </span> and <span className='text-[#0755e9] p-1'> Terms of Service </span></p>
         </div>
         <div className='ml-4 mt-2'>
         <button className={checkbox?'text-xs mb-2 font-normal mr-2 py-2 px-6 bg-blue-700 rounded-sm text-white cursor-pointer':"text-xs mb-2 font-normal mr-2 py-2 px-6 bg-blue-700 rounded-sm text-white cursor-not-allowed "}>Hire Now</button>
         </div>
        </form >
        
      </div>
    </div>

  
  
    
{/* smaller screen */}
<div className="relative h-screen lg:hidden md:hidden flex ">
      {/* Light blue background section */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#cfebf3] -skew-y-6"></div>
      {/* White background section */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white -skew-y-6"></div>
      {/* Form container */}
      <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl border border-[#71d1d5] shadow-lg  w-3/4">
        {/* Your form content goes here */}
        <form className=''>
        <div className=' flex  justify-center items-center flex-col'>
                  {/* Form fields go here */}
           <h1 className='font-bold sm:text-xl md:text-2xl font-regular '>Build Your <span className='text-[#0755e9]'>Free</span>  Discovery Workshop Call</h1>
           <p className='font-regular text-xs  mt-5'>Curious about what your project will cost?</p>
            </div>
        <div className='flex items-center justify-center flex-col font-regular mt-5'>
          <div className='flex flex-col text-xs'>
                First name*
              <input type="text" id='name' placeholder='' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>
          <div className='flex flex-col text-xs'>
                Phone Number*
              <input type="number" id='name' placeholder='' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>

        </div>
        <div className='flex items-center justify-center flex-col font-regular mt-5'>
          <div className='flex flex-col text-xs'>
                Looking For*
              <Select className="">
  <SelectTrigger className="w-40 border border-black mr-3 outline-none">
    <SelectValue placeholder="" className='' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Hourly </SelectItem>
    <SelectItem value="dark">Part Time </SelectItem>
    <SelectItem value="system">Full Time</SelectItem>
  </SelectContent>
</Select>   
          </div>
          <div className=' flex flex-col text-xs relative'>
             No of Resources*
             <Select>
  <SelectTrigger className="w-40 border border-black mr-3 outline-none ">
    <SelectValue placeholder="" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">1</SelectItem>
    <SelectItem value="dark">2</SelectItem>
    <SelectItem value="system">3</SelectItem>
    <SelectItem value="system">4 or More</SelectItem>
  </SelectContent>
</Select>

        

             </div>

        </div>
        <div className='flex items-center justify-center flex-col font-regular mt-5'>
          <div className='flex flex-col text-xs'>
                Email
              <input type="text" id='name' placeholder='' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>
          <div className='flex flex-col text-xs'>
                 Company Website
              <input type="text" id='name' placeholder='' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>

        </div>
        <div className='flex items-center justify-center flex-col font-regular mt-5 '>
        <div className=' flex flex-col text-xs relative '>
             Length of Engagement* 
             <Select className="">
  <SelectTrigger className="w-60 border border-black outline-none mr-3">
    <SelectValue placeholder="" className='' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Month on Month </SelectItem>
    <SelectItem value="dark">3 Months </SelectItem>
    <SelectItem value="system">6 Months or longer</SelectItem>
  </SelectContent>
</Select>
             </div>
          

        </div>
        <div className='flex items-center justify-center flex-col font-regular mt-5'>
        <div className='flex flex-col text-xs '>
                Message
              <textarea type="text" id='message' rows={5} cols={30} placeholder='' className=' w-60 outline-none  border-black rounded-md mr-3 p-2 border ' />   
         </div>
         </div>
         <div className=' flex ml-1 mt-2 text-xs w-full  '>
         <input type="checkbox" defaultChecked onClick={handlecheckbox} className=' mr-1'/><p>I have read and agree to the <span className='text-[#0755e9] p-1'> Privacy Policy </span> and <span className='text-[#0755e9] p-1'> Terms of Service </span></p>
         </div>
         <div className='ml-4 mt-2'>
         <button className={checkbox?'text-xs mb-2 font-normal mr-2 py-2 px-6 bg-blue-700 rounded-sm text-white cursor-pointer':"text-xs mb-2 font-normal mr-2 py-2 px-6 bg-blue-700 rounded-sm text-white cursor-not-allowed "}>Hire Now</button>
         </div>
        </form >
        
      </div>
    </div>
   
    </>
    
  );
}

export default FormLayout;

