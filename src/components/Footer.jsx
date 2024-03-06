import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col'>
        <div className='w-full mt-20 flex'>
         {/* Logo */}
         <div className='flex justify-center items-center w-48 flex-col'>
         <Image src={'/White.png'} alt='' width={220} height={45}/>
           <p></p>
         </div>
         <div className='ml-16 mt-1'>
            {/* Services */}
            service
         </div>
         <div>
            {/*  */}
         </div>
        </div>
           <div className='mt-16 flex flex-col'>
            <div className='flex'>
                {/* Pakistan flg */}
                <div>
                 {/* Address */}
                 address
                </div>
                <div>
                    {/* American flag */}
                    <div className='flex flex-col ml-24'>
                        {/* Address */}
                        address
                    </div>
                </div>
            </div>
            <div>

            </div>
           </div>
        
    </footer>
  )
}
