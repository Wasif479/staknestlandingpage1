import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <>
    {/* Pc view */}
    <div className=' bg-[#cfebf3] hidden mt-10 lg:flex flex-col'>
       <footer className='flex h-60 w-full '>
        {/* Logo */}
        <div className=' mt-10 ml-6'>
        <Image src={'/foot.png'} alt='' width={220} height={45}/>
        <p className=' font-regular mt-3 text-sm'>Empower Your Projects with On-Demand</p>
        <p className='font-regular text-sm mb-10'>Remote Talent and Teams</p>
        </div>
        <div className='mt-10 ml-28 flex flex-col'>
            <h1>Location</h1>
            <div className='flex'>
              <div className='mt-3 flex flex-col'>
                   {/* First country */}
                   <div className='flex text-center items-center'>
                    <Image src={'/us.png'} alt='' width={40} height={40} />
                    <h1 className=' ml-2 font-regualr text-sm'>Sheridan</h1>
                   </div>
                   
                    <p className='text-xs font-regular'>32 N Gould St Shoridon, WY</p>
                    <p className='text-xs font-regular'>82801, United States</p>    
              </div>
              <div className='mt-3 flex flex-col ml-7'>
                      {/* second country */}
                      <div className='flex text-center items-center'>
                        <Image src={'/pakistan1.png'} alt='' width={40} height={40}/> 
                        <h1 className='ml-2 font-regular text-sm'>Karachi (HQ)</h1>
                      </div>
                   
                    <p className='text-xs font-regular'>United Castle, AR-01, Gulshan-e-Iqbal Block 10-A</p>
                    <p className='text-xs font-regular'>Karachi, Sindh 75300, Pakistan</p>
              </div>
            </div>
        </div>
        
       
    </footer>
    <div className='flex justify-center items-center text-xs font-regular'>
      Copuright @ 2024 StakNest. All rights reserved
    </div>
    </div>
    
    {/* Mobile view */}

    <div className='flex lg:hidden flex-col bg-[#cfebf3] mt-12'>
       <footer className='flex  w-full flex-col '>
        {/* Logo */}
        <div className=' mt-10 ml-6'>
        <Image src={'/foot.png'} alt='' width={140} height={45}/>
        <p className=' font-regular mt-3 text-sm'>Empower Your Projects with On-Demand</p>
        <p className='font-regular text-sm mb-10'>Remote Talent and Teams</p>
        </div>
        <div className='mt-0 ml-6 flex flex-col'>
            <h1>Location</h1>
            <div className='flex flex-col'>
              <div className='mt-3 flex flex-col'>
                   {/* First country */}
                   <div className='flex text-center items-center'>
                    <Image src={'/us.png'} alt='' width={40} height={40} />
                    <h1 className=' ml-2 font-regualr text-sm'>Sheridan</h1>
                   </div>
                   
                    <p className='text-xs font-regular'>32 N Gould St Shoridon, WY</p>
                    <p className='text-xs font-regular'>82801, United States</p>    
              </div>
              <div className='mt-3 flex flex-col'>
                      {/* second country */}
                      <div className='flex text-center items-center'>
                        <Image src={'/pakistan1.png'} alt='' width={40} height={40}/> 
                        <h1 className='ml-2 font-regular text-sm'>Karachi (HQ)</h1>
                      </div>
                   
                    <p className='text-xs font-regular'>United Castle, AR-01, Gulshan-e-Iqbal Block 10-A</p>
                    <p className='text-xs font-regular'>Karachi, Sindh 75300, Pakistan</p>
              </div>
            </div>
        </div>
        
       
    </footer>
    <div className='flex ml-6  items-start mt-5 text-xs font-regular'>
      Copuright @ 2024 StakNest. All rights reserved
    </div>
    </div>
    </>
    
   
  )
}
