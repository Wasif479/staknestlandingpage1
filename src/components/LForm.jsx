"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Select from 'react-select'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import CSS for default styling


  
  
export default function LForm() {
    // phone number
    const [value, setValue] = useState()
    const [checkbox,setcheckbox] = useState(true)
    const [Lform,setLform] = useState({Firstname:"",Phonenumber:null,email:"",Companywebsite:"",Lookingfor:"",Noofresources:"",Lengthofengagement:"",message:""})

    const time = [
        { value: 'hourly', label: 'hourly' },
        { value: 'weekly', label: 'weekly' },
        { value: 'monthly', label: 'monthly' }
      ]
    const number =[
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: "4 or more", label: '4 or more' }
    ]
    const occasion =[
        { value: 1, label: "Month on Month" },
        { value: 2, label: "3 Month" },
        { value: 3, label: "6 Month or longer" },
       
    ]
    const handlecheckbox = () =>{
      setcheckbox(!checkbox)
    }
  return (
    <div>

        <div className="relative h-screen flex lg:hidden  mt-20 ">
      {/* Light blue background section */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white -skew-y-6"></div>
      {/* White background section */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white -skew-y-6"></div>
      {/* Form container */}
      <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl border border-[#71d1d5] shadow-lg  w-3/4">
        {/* Your form content goes here */}
        <form className=''>
        <div className=' flex  justify-center items-center flex-col'>
                  {/* Form fields go here */}
                  <span className='absolute top-0 right-1'>
                    <Image src={'/shine.png'} alt='' width={50} height={50}  className=' flex justify-center items-end'/>
                  </span>
           <h1 className='font-bold sm:text-xl md:text-2xl font-regular '> <span className='text-[#0755e9]'>Ready</span> to elevate your project with top-tier talent?</h1>
           <p className='font-regular text-xs  mt-5'>Book your discovery workshop call today and start
your risk-free trial.</p>
             <p className='font0regular text-xs mt-5'>Let's build something extraordinary together</p>
            </div>
        <div className='flex items-center justify-center font-regular mt-5'>
          <div className='flex flex-col text-xs'>
                First name*
              <input type="text" id='name' placeholder='' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>
          <div className='flex flex-col text-xs'>
                Phone Number*
              <PhoneInput international  value={value}
      onChange={setValue}  placeholder='' defaultCountry='US' className='w-40 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>

        </div>
        <div className='flex items-center justify-center font-regular mt-5'>
          <div className='flex flex-col text-xs'>
                Looking For*
              <Select className='w-40 border border-black mr-3 outline-none rounded-md ' options={time}/>  


          </div>
          <div className=' flex flex-col text-xs relative'>
             No of Resources*
             <Select className='w-40 border border-black mr-3 outline-none rounded-md ' options={number}/>  

        

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
             <Select className='w-[330px] border border-black mr-3 outline-none rounded-md ' options={occasion}/>
             </div>
          

        </div>
        <div className='flex items-center justify-center font-regular mt-5'>
        <div className='flex flex-col text-xs '>
                Message
              <textarea type="text" id='message' rows={5} cols={30} placeholder='' className=' w-80 outline-none  border-black rounded-md mr-3 p-2 border ' />   
         </div>
         </div>
         <div className=' flex ml-1 mt-2 text-xs w-full  '>
         <input type="checkbox" defaultChecked onClick={handlecheckbox} className=' mr-1'/><p>I have read and agree to the <span className='text-[#0755e9] p-1'> Terms of Service </span></p>
         </div>
         <div className='ml-4 mt-2'>
         <button className={checkbox?'text-xs mb-2 font-normal mr-2 py-2 px-6 bg-blue-700 rounded-sm text-white cursor-pointer':"text-xs mb-2 font-normal mr-2 py-2 px-6 bg-blue-700 rounded-sm text-white cursor-not-allowed "}>Hire Now</button>
         </div>
        </form >
        
      </div>
    </div>


    {/* For pc */}
      
    <div className="relative h-screen lg:flex w-full hidden   mt-20 ">
      {/* Light blue background section */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white -skew-y-6"></div>
      {/* White background section */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white -skew-y-6"></div>
      {/* Form container */}
      <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl shadow-lg  w-full">
        {/* Your form content goes here */}
        <div className='flex justify-center items-center '>
            <form className='w-1/2'>
       
        <div className='flex items-center justify-center font-regular mt-5'>
          <div className='flex flex-col text-xs'>
                First name*
              <input type="text" id='name' placeholder='' className='w-50 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>
          <div className='flex flex-col text-xs'>
                Phone Number*
              <input type="number" id='name' placeholder='' className='w-50 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>

        </div>
        <div className='flex items-center justify-center font-regular mt-5'>
          <div className='flex flex-col text-xs'>
                Looking For*
              <Select className='w-[180px] border border-black mr-3 outline-none rounded-md ' options={time}/>  


          </div>
          <div className=' flex flex-col text-xs relative'>
             No of Resources*
             <Select className='w-[180px] border border-black mr-3 outline-none rounded-md ' options={number}/>  

        

             </div>

        </div>
        <div className='flex items-center justify-center font-regular mt-5'>
          <div className='flex flex-col text-xs'>
                Email
              <input type="text" id='name' placeholder='' className='w-50 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>
          <div className='flex flex-col text-xs'>
                 Company Website
              <input type="text" id='name' placeholder='' className='w-50 outline-none border-black rounded-md mr-3 p-3 border ' />   
          </div>

        </div>
        <div className='flex items-center justify-center font-regular mt-5 '>
        <div className=' flex flex-col text-xs relative '>
             Length of Engagement* 
             <Select className='w-[380px] border border-black mr-3 outline-none rounded-md ' options={occasion}/>
             </div>
          

        </div>
        <div className='flex items-center justify-center font-regular mt-5'>
        <div className='flex flex-col text-xs '>
                Message
              <textarea type="text" id='message' rows={5} cols={30} placeholder='' className=' w-[380px] outline-none  border-black rounded-md mr-3 p-2 border ' />   
         </div>
         </div>
         <div className=' flex ml-1 mt-2 text-xs w-full  '>
         <input type="checkbox" defaultChecked onClick={handlecheckbox} className=' mr-1'/><p>I have read and agree to the <span className='text-[#0755e9] p-1'> Terms of Service </span></p>
         </div>
         <div className='ml-4 mt-2'>
         <button className={checkbox?'text-xs mb-2 font-normal mr-2 py-2 px-6 bg-blue-700 rounded-sm text-white cursor-pointer':"text-xs mb-2 font-normal mr-2 py-2 px-6 bg-blue-700 rounded-sm text-white cursor-not-allowed "}>Hire Now</button>
         </div>
        </form >

        <div className='mt-8 mb-20'>
            <div className=' flex  justify-center items-center flex-col'>
                  {/* Form fields go here */}
                  <span className='absolute top-0 right-1'>
                    <Image src={'/shine.png'} alt='' width={50} height={50}  className=' flex justify-center items-end'/>
                  </span>
           <h1 className='font-bold sm:text-xl md:text-3xl ml-4 font-regular '> <span className='text-[#0755e9]'>Ready</span> to elevate your project with top-tier talent?</h1>
           <p className='font-regular font-medium ml-4  mt-5'>Book your discovery workshop call today and start
your risk-free trial <span className=''>Let's build something extraordinary together</span></p>
             
            </div>
          <div className='w-full flex items-start  h-16 ml-4 mt-20'>
            <Image src={'/30.png'} alt='' width={50} height={50}/>
            <p className='mt-3 ml-2 font-regular font-medium'>+1-512-897-7189</p>
          </div>
          <div className='w-full flex items-start h-16 ml-4'>
            <Image src={'/31.png'} alt='' width={50} height={50}/>
            <p className='mt-3 ml-2 font-regular font-medium'>sales@staknest.com</p>
          </div>
          <div className='w-full flex items-start h-16 ml-4 font-regular font-medi50'>
            <Image src={'/32.png'} alt='' width={50} height={50}/>
            <p className='mt-3 ml-2 font-regular'>32 N Gould St Sheridan, WY 82801</p>
          </div>
        </div>
        
          
        
        </div>
        
      </div>
    </div>

    </div>
  )
}
