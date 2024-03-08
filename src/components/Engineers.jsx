"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


  

export default function Engineers() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [activeNav, setActiveNav] = useState("first");

    const handleClick = (navItem) =>{
        setActiveNav(navItem);
        
    }

    const handleElementClick = (index) => {
        setCurrentSlide(index);
    
    
    };
    console.log(activeNav)
  return (
    <div>
        <div className='flex flex-col justify-center mt-28 lg:items-start items-center md:ml-14 '>
           <h1 className='text-3xl font-bold font-regular'>Engineers You Can <span className="text-[#0577eb] ">Hire</span> </h1>
           <div className='flex flex-col lg:flex-row justify-between text-center lg:text-start items-center mt-8'>
            <div className='w-2/3  font-regular '>
            <p className=' w-full'>Stay ahead of the curve with our cutting-edge tech solutions! We leverage latest tech stack to ensure your project is future-proof.</p>
            </div>
            <div className=' mr-3 mt-7'>
               <a href="#Candy">
                  <button className='px-3 lg:mr-10 flex justify-center items-center py-2 border border-[#0577eb] text-[#0577eb] font-regular text-xs rounded-md'>Talk to our Experts<FaArrowRightLong className='ml-2' /></button>  
               </a>
          
            </div>
           </div>
           <div className='lg:flex  justify-between items-center mt-10 w-2/3 border-b-2 hidden '>
           <button className={activeNav==="first"?"font-regular  text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={()=>{handleClick("first"),handleElementClick(0)}}>Front-End</button>
                    <button  className={activeNav==="second"?"font-regular text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={()=>{handleClick("second"),handleElementClick(1)}} >Back-End</button>
                    <button className={activeNav==="third"?"font-regular text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={() => {handleElementClick(2),handleClick("third")}}>Mobile Developers</button>
                    <button className={activeNav==="fourth"?"font-regular text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={() => {handleElementClick(3),handleClick("fourth")}}>Emerging Tech</button>
                    <button className={activeNav==="fifth"?"font-regular text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={() => {handleElementClick(4),handleClick("fifth")}}>Operations</button>
                    <button className={activeNav==="sixth"?"font-regular text-xs  text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={() => {handleElementClick(5),handleClick("sixth")}}>Design</button>
           </div>
           {/* <div className='flex justify-center items-center bg-red-600 w-full'>
            <Carousel showIndicators={false} showStatus={false}>
               <div>
                  <div className='flex justify-center items-center'>
                     <div className='flex justify-center items-center'>
                       <div className='mr-1'>
                          <button className='border-b-2 border-black px-10'>hello</button>
                       </div>
                        <div>
                          <button className='border-b-2 border-black px-10'>world</button>
                        </div>
                     </div>
                  </div>
               </div>
            </Carousel>
           </div>
            */}
           
           <div className='lg:flex justify-center items-center w-4/5 hidden   '>
              <div className='w-full h-72  mt-5'>
              <Carousel selectedItem={currentSlide} onChange={setCurrentSlide} showIndicators={false} showStatus={false} showThumbs={false} showArrows={false}>
                           <div className=''>
                           <div className=''>
                        <div className='grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs'>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2'>
                                <div>
                                   <Image src={'/React.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>React Js</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2'>
                                <div>
                                   <Image src={'/React.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>React Native</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2'>
                                <div>
                                   <Image src={'/Angular.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Angular</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2'>
                                <div>
                                   <Image src={'/Rails.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Ruby on Rails</p>
                             </div>
                             < div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2'>
                                <div>
                                   <Image src={'/JavaScript.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>JavaScript </p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2'>
                                <div>
                                   <Image src={'/Typescript.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Typescript</p>
                              </div>
                              </div>
                        
                             </div>
                            </div>
                            {/* silde 2 */}
                            <div>
                            <div className=''>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs'>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Php.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>PHP</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Java.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Java</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Python.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Python</p>
                             </div>
                             <div className='flex justifyflex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Net.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>.NET</p>
                             </div>
                             
                              </div>
                        
                             </div>
                            </div>
                            {/* slide 3 */}
                            <div>
                            <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs '>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/iOS.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>IOS</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Android.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Android</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Flutter.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Flutter</p>
                             </div>
                             
                              </div>
                        
                             </div>
                            </div>
                            {/* slide 4 */}
                            <div>
                            <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs'>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Ai.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>AI</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Blockchain.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Block Chain</p>
                             </div>
                             <div className='flex justify-center items-center w-40 h-14 border border-[#cfebf3] '>
                                <div>
                                   <Image src={'/Machine.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex text-xs font-regular'>Machine Learning</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Cybersecurity.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Cyber Security</p>
                             </div>
                             
                              </div>
                        
                             </div>
                            </div>
                            {/* silde 5 */}
                            <div>
                            <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs'>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Product.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Product Manager</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/QA.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>QA Engineer</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/DevOps.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>DevOps </p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/DevSecOps.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>DevSecOps</p>
                             </div>
                            
                              </div>
                        
                             </div>
                            </div>
                            {/* content 6 */}
                            <div>
                            <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs '>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/UI_UX.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>UI/UX Designer</p>
                             </div>
                            
                              </div>
                        
                             </div>
                            </div>
                </Carousel>

              </div>
           </div>
           {/* mobile view */}
           <div className=''>
           <div className='flex lg:hidden justify-center items-center mt-10 w-full '>
            <Carousel showIndicators={false} showArrows={false} swipeable={true} showStatus={false} className='h-10'>
            <div className=' flex justify-center items-center'>
                           <div className='flex justify-center items-center'>
                        <div className='grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs'>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3]  rounded-md mb-2'>
                                <div>
                                <button className={activeNav==="first"?"font-regular  text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={()=>{handleClick("first"),handleElementClick(0)}}>Front-End</button>
                                </div>
                                <p className='ml-1 hidden lg:flex'>React Js</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3]  rounded-md mb-2'>
                                <div>
                                <button  className={activeNav==="second"?"font-regular text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={()=>{handleClick("second"),handleElementClick(1)}} >Back-End</button>
                                </div>
                                <p className='ml-1 hidden lg:flex'>React Native</p>
                             </div>
                            </div>
                        
                             </div>
                            </div>
                            {/* slide 2 */}
                            <div className=' flex justify-center items-center'>
                           <div className='flex justify-center items-center'>
                        <div className='grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs'>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3]  rounded-md mb-2'>
                                <div>
                                <button className={activeNav==="third"?"font-regular text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={() => {handleElementClick(2),handleClick("third")}}>Mobile Developers</button>
                                </div>
                                <p className='ml-1 hidden lg:flex'>React Js</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3]  rounded-md mb-2'>
                                <div>
                                <button className={activeNav==="fourth"?"font-regular text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={() => {handleElementClick(3),handleClick("fourth")}}>Emerging Tech</button>
                                </div>
                                <p className='ml-1 hidden lg:flex'>React Native</p>
                             </div>
                            </div>
                        
                             </div>
                            </div>
                            {/* slide 3 */}
                            <div className=' flex justify-center items-center'>
                           <div className='flex justify-center items-center'>
                        <div className='grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs'>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3]  rounded-md mb-2'>
                                <div>
                                <button className={activeNav==="fifth"?"font-regular text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={() => {handleElementClick(4),handleClick("fifth")}}>Operations</button>
                                </div>
                                <p className='ml-1 hidden lg:flex'>React Js</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3]  rounded-md mb-2'>
                                <div>
                                <button className={activeNav==="sixth"?"font-regular text-xs  text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={() => {handleElementClick(5),handleClick("sixth")}}>Design</button>
                                </div>
                                <p className='ml-1 hidden lg:flex'>React Native</p>
                             </div>
                            </div>
                        
                             </div>
                            </div>
            </Carousel>
           {/* <button className={activeNav==="first"?"font-regular  text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={()=>{handleClick("first"),handleElementClick(0)}}>Front-End</button>
                    <button  className={activeNav==="second"?"font-regular text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={()=>{handleClick("second"),handleElementClick(1)}} >Back-End</button>
                    <button className={activeNav==="third"?"font-regular text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={() => {handleElementClick(2),handleClick("third")}}>Mobile Developers</button>
                    <button className={activeNav==="fourth"?"font-regular text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={() => {handleElementClick(3),handleClick("fourth")}}>Emerging Tech</button>
                    <button className={activeNav==="fifth"?"font-regular text-xs text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={() => {handleElementClick(4),handleClick("fifth")}}>Operations</button>
                    <button className={activeNav==="sixth"?"font-regular text-xs  text-[#0755eb] border-b-2 border-[#0755eb]":"text-black text-xs font-regular"} onClick={() => {handleElementClick(5),handleClick("sixth")}}>Design</button> */}
           </div>
           <Carousel selectedItem={currentSlide} swipeable={false} onChange={setCurrentSlide} showIndicators={false} showStatus={false} showThumbs={false} showArrows={false}>
                           <div className=' mt-10'>
                           <div className='flex lg:hidden justify-center items-center'>
                        <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs'>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2'>
                                <div>
                                   <Image src={'/React.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>React Js</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2'>
                                <div>
                                   <Image src={'/React.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>React Native</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2'>
                                <div>
                                   <Image src={'/Angular.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Angular</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2'>
                                <div>
                                   <Image src={'/Rails.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Ruby on Rails</p>
                             </div>
                             < div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2'>
                                <div>
                                   <Image src={'/JavaScript.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>JavaScript </p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2'>
                                <div>
                                   <Image src={'/Typescript.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Typescript</p>
                              </div>
                              </div>
                        
                             </div>
                            </div>
                            {/* silde 2 */}
                            <div>
                            <div className='flex justify-center items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs'>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Php.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>PHP</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Java.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Java</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Python.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Python</p>
                             </div>
                             <div className='flex justifyflex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Net.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>.NET</p>
                             </div>
                             
                              </div>
                        
                             </div>
                            </div>
                            {/* slide 3 */}
                            <div>
                            <div className='flex justify-center items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs '>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/iOS.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>IOS</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Android.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Android</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Flutter.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Flutter</p>
                             </div>
                             
                              </div>
                        
                             </div>
                            </div>
                            {/* slide 4 */}
                            <div>
                            <div className='flex justify-center items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs'>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Ai.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>AI</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Blockchain.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Block Chain</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border border-[#cfebf3] '>
                                <div>
                                   <Image src={'/Machine.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex text-xs font-regular'>Machine Learning</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Cybersecurity.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Cyber Security</p>
                             </div>
                             
                              </div>
                        
                             </div>
                            </div>
                            {/* silde 5 */}
                            <div>
                            <div className='flex justify-center items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs'>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/Product.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>Product Manager</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/QA.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>QA Engineer</p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/DevOps.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>DevOps </p>
                             </div>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/DevSecOps.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>DevSecOps</p>
                             </div>
                            
                              </div>
                        
                             </div>
                            </div>
                            {/* content 6 */}
                            <div>
                            <div className='flex justify-center items-center'> 
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 font-regular text-xs '>
                             <div className='flex justify-center items-center w-20 lg:w-40 h-14 border-[#cfebf3] border rounded-md mb-2 '>
                                <div>
                                   <Image src={'/UI_UX.png'} alt='' width={40} height={40}></Image>
                                </div>
                                <p className='ml-1 hidden lg:flex'>UI/UX Designer</p>
                             </div>
                            
                              </div>
                        
                             </div>
                            </div>
                </Carousel>
           </div>
        </div>
    </div>
  )
}
