import Image from 'next/image'
import React from 'react'

export default function Jensen() {
  return (
    <div className='bg-[#cfebf3]  flex flex-col justify-center items-center  -skew-y-6'>
       <div className='skew-y-6 '>
          <div className='md:flex hidden '>
           {/* pc view */}
           <div className='w-1/2 h-full mt-0 ml-10'>
           <Image src={'/Jen.png'} alt='' width={800} height={800} className='mt-5' />
           {/* image */}
           </div>
           <div className='flex flex-col mt-16 font-regular font-semibold ml-16'>
            {/* text */}
            <span>I believe remote work allows employees</span>
            <span>to balance their personal and work</span>
            <span>obligations while preparing for the future</span>
            <span className='mt-16 ml-40 text-[#76B900]'>Jensen Huang</span>
            <span className='ml-40'>CEO & Founder , Nvidia</span>
           </div>

          </div>
          <div className='flex md:hidden flex-col justify-center items-center'>
          {/* Mobile view */}
          <div className='flex flex-col justify-center items-center'>
          <Image src={'/Jen.png'} alt='' width={500} height={500} className='mt-5 ' />
          </div>
          <div className=' flex flex-col justify-center items-center mb-5 font-regular font-semibold'>
          <span>I believe remote work allows employees</span>
            <span>to balance their personal and work</span>
            <span>obligations while preparing for the future</span>
            <span className='mt-16 ml-40 text-[#76B900]'>Jensen Huang</span>
            <span className='ml-40 mb-40'>CEO & Founder , Nvidia</span>
          </div>
          </div>
        </div>


    </div>
       
  )
}
