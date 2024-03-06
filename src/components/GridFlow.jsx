import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";

import React from 'react'

export default function GridFlow() {
  return (
    <section className='mt-28'>
        <div className=' w-2/3'>
            <div className=' flex items-start ml-16 justify-center flex-col'>
            <h1 className='lg:text-3xl md:text-3xl text-3xl sm:text-3xl text-black font-bold font-regular'>Why Choose <span className='text-[#0755e9]'>StakNest</span> for Developers?</h1>     
            <p className='text-base font-regular  mt-6 mb-8'>Boost Growth with Our Expert Developers</p>
            </div>
           
            
        </div>
       
        <div className='flex justify-center items-center'>
        <div className='ml-6 mr-5 grid grid-cols-1 lg:grid-cols-3'>
            <div className='relative p-4 '>

               <div className='absolute top-0 left-12 px-2 bg-white '>
               <Image src={'/pap.png'} alt=' ' width={40} height={40} className='bg-white '/>
               </div>
               <div className='border border-[#0577eb] h-44 w-72 rounded-md flex items-center flex-col '>
                  <h1 className='mt-10 text-[#0577eb] text-xs font-bold w-2/3'>Secure NDA Contracts</h1>
                  <p className='w-2/3 text-black mt-5 text-xs font-regular '>Your ideas stay safe with our strict NDA policies.</p>
               </div>
            </div>
            <div className='relative p-4 '>

               <div className='absolute top-0 left-12 px-2 bg-white '>
               <Image src={'/cross.png'} alt=' ' width={40} height={40} className='bg-white '/>
               </div>
               <div className='border border-[#0577eb] h-44 w-72 rounded-md flex items-center flex-col '>
                  <h1 className='mt-10 text-[#0577eb] text-xs font-bold w-2/3'>Flexible Hiring Models </h1>
                  <p className='w-2/3 text-black mt-5 text-xs font-regular '>Choose the engagement model that suits your project's needs.</p>
               </div>
            </div>
             <div className='relative p-4 '>

               <div className='absolute top-0 left-12 px-2 bg-white '>
               <Image src={'/calender.png'} alt=' ' width={40} height={40} className='bg-white '/>
               </div>
               <div className='border border-[#0577eb] h-44 w-72 rounded-md flex items-center flex-col '>
                  <h1 className='mt-10 text-[#0577eb] text-xs font-bold w-2/3'>Own Your Code 100%</h1>
                  <p className='w-4/5 text-black mt-5 text-xs font-regular '>We ensure you're the sole owner of
your project's intellectual property
with complete ownership of your
project's source code.
</p>
               </div>
            </div>
             <div className='relative p-4 '>

               <div className='absolute top-0 left-12 px-2 bg-white '>
               <Image src={'/secure.png'} alt=' ' width={40} height={40} className='bg-white '/>
               </div>
               <div className='border border-[#0577eb] h-44 w-72 rounded-md flex items-center flex-col '>
                  <h1 className='mt-10 text-[#0577eb] text-xs font-bold w-2/3'>Data Privacy & Confidentiality</h1>
                  <p className='w-2/3 text-black mt-5 text-xs font-regular '>Your data is protected with us as
we prioritize the security of your
sensitive information.
</p>
               </div>
            </div>
             <div className='relative p-4 '>

               <div className='absolute top-0 left-12 px-2 bg-white '>
               <Image src={'/Hours.png'} alt=' ' width={40} height={40} className='bg-white '/>
               </div>
               <div className='border border-[#0577eb] h-44 w-72 rounded-md flex items-center flex-col '>
                  <h1 className='mt-10 text-[#0577eb] text-xs font-bold w-2/3'>Assured 160 Man-Hours </h1>
                  <p className='w-2/3 text-black mt-5 text-xs font-regular '>
                  We guarantee 160 productive,
dedicated man-hours per month
for your project.

</p>
               </div>
            </div>
             <div className='relative p-4 '>

               <div className='absolute top-0 left-12 px-2 bg-white '>
               <Image src={'/coms.png'} alt=' ' width={40} height={40} className='bg-white '/>
               </div>
               <div className='border border-[#0577eb] h-44 w-72 rounded-md flex items-center flex-col '>
                  <h1 className='mt-10 text-[#0577eb] text-xs font-bold w-2/3'>Seamless Communication</h1>
                  <p className='w-2/3 text-black mt-5 text-xs font-regular '>Experience hassle-free
communication throughout your
project.
</p>
               </div>
            </div>
             <div className='relative p-4 '>

               <div className='absolute top-0 left-12 px-2 bg-white '>
               <Image src={'/calc.png'} alt=' ' width={40} height={40} className='bg-white '/>
               </div>
               <div className='border border-[#0577eb] h-44 w-72 rounded-md flex items-center flex-col '>
                  <h1 className='mt-10 text-[#0577eb] text-xs font-bold w-2/3'>Zero Overhead Peace of Mind</h1>
                  <p className='w-2/3 text-black mt-5 text-xs font-regualr '>
                  We handle the complexities, giving
you a worry-free experience to
focus more on your core business.
</p>
               </div>
            </div>
             <div className='relative p-4 '>

               <div className='absolute top-0 left-12 px-2 bg-white '>
               <Image src={'/bdg.png'} alt=' ' width={40} height={40} className='bg-white '/>
               </div>
               <div className='border border-[#0577eb] h-44 w-72 rounded-md flex items-center flex-col '>
                  <h1 className='mt-10 text-[#0577eb] text-xs font-bold w-2/3'>Experienced Developers</h1>
                  <p className='w-2/3 text-black mt-5 text-xs font-regular '>
                  Benefit from the knowledge of
our seasoned software engineers

</p>
               </div>
            </div>
             <div className='relative p-4 '>

               <div className='absolute top-0 left-12 px-2 bg-white '>
               <Image src={'/bo.png'} alt=' ' width={40} height={40} className='bg-white '/>
               </div>
               <div className='border border-[#0577eb] h-44 w-72 rounded-md flex items-center flex-col '>
                  <h1 className='mt-10 text-[#0577eb] text-xs font-bold w-2/3'>Cost-Effective Pricing</h1>
                  <p className='w-2/3 text-black mt-5 text-xs font-regular '>Get high-quality development
services at competitive rates</p>
               </div>
            </div>

            
        </div>

        </div>

        {/* Button */}
       <div className='flex justify-center items-center mt-9 mb-8'>
        <button className='px-3 flex justify-center items-center py-2 border border-[#0577eb] text-[#0577eb] font-regular text-xs rounded-md'>Let's Talk<FaArrowRightLong className='ml-2' /></button>
       </div>

        
    </section>
        
    
  )
}
