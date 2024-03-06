import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Tailored() {
  return (
    <section className="md:mt-16 mt-48 ">
      <div className="flex justify-center flex-col items-center font-regular ">
        <h1 className="text-3xl font-bold">Tailored Tech Teams</h1>
        <p className="mt-8 font-regular">
          We've been in the game for years, and we're here to bring you the best
          in tech solutions
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-3 mr-14 ">
        <div className="relative p-4 mb-40  mr-32">
            <div className="bg-[#cfebf3] p-2 rounded-full w-24 h-[90px] flex items-center justify-center">
              <div className=" rounded-full bg-white p-3 ">
                <Image
                  src={"/land1.png"}
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="absolute top-[86px] left-9 w-64 h-36 rounded-sm bg-[#cfebf3] flex justify-center flex-col ">
              <h1 className=" text-[#0755eb] font-regular flex justify-center items-center text-center">
              Build a Dedicated Team 
              </h1>

              <p className="text-xs flex justify-center mt-3 font-regular items-center text-center ml-2 mr-2">
              Whether you need one expert or a whole team, we’ve got the tech talent that gets the job done.

              </p>
            </div>
          </div>

          {/* Second items */}

          <div className="relative p-4 mb-40  mr-32">
            <div className="bg-[#cfebf3] p-2 rounded-full w-24 h-[90px] flex items-center justify-center">
              <div className=" rounded-full bg-white p-3 ">
                <Image
                  src={"/land2.png"}
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="absolute top-[86px] left-9 w-64 h-36 rounded-sm bg-[#cfebf3] flex justify-center flex-col ">
              <h1 className=" text-[#0755eb] font-regular flex justify-center items-center text-center">
                Expand Your Team
              </h1>

              <p className="text-xs flex justify-center mt-3 font-regular items-center text-center ">
                Short on tech talent? Our seasoned professionals can integrate
                with your team at a moment's notice.
              </p>
            </div>
          </div>
          {/* Third item */}

          <div className="relative p-4 mb-40  mr-32">
            <div className="bg-[#cfebf3] p-2 rounded-full w-24 h-[90px] flex items-center justify-center">
              <div className=" rounded-full bg-white p-3 ">
                <Image
                  src={"/land3.png"}
                  alt=""
                  width={200}
                  height={200}
                  className=""
                />
              </div>
            </div>
            <div className="absolute top-[86px] left-9 w-64 h-36 rounded-sm bg-[#cfebf3] flex justify-center flex-col ">
              <h1 className=" text-[#0755eb] font-regular flex justify-center items-center text-center">
              Timezone Matching*
              </h1>

              <p className="text-xs flex justify-center mt-3 font-regular items-center mb-3 text-center ml-2 mr-2 ">
              We work in your timezone with a
minimum of 4 hours overlap
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  ">
        <div className="flex flex-col justify-center items-center    lg:mr-20 md:mr-16 mr-10 ">
          <h1 className="text-[#0755eb] text-4xl font-extrabold">12+</h1>
          <p className="text-sm">Years of Experience</p>
        </div>
        <div className="flex flex-col justify-center items-center  lg:mr-20 md:mr-16 sm: mr-10">
          <h1 className="text-[#0755eb] text-4xl font-extrabold">150+</h1>
          <p>Tech Experts</p>
        </div>
        <div className="flex flex-col justify-center items-center lg:mr-20 md:mr-16 sm: mr-10">
          <h1 className="text-[#0755eb] text-4xl font-extrabold">400+</h1>
          <p>Successful Projects</p>
        </div>
        <div className="flex flex-col justify-center items-center mb-2 ">
          <h1 className="text-[#0755eb] text-4xl font-bold"><Image src={'/smile.png'} alt="" width={50} height={50}/></h1>
          <p>Happy Clients</p>
        </div>
      </div>
      {/* From concept to code */}
      <div className="mt-16 flex">
        <div className=" w-3/4 mt-20">
          <div className="flex flex-col">
            <span className="text-3xl font-regular font-bold ml-7 ">
              From Concept to Code: The Fast Track
            </span>
            <span className="text-3xl font-regular font-bold ml-7">
              for Tech Visionaries
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10  ">
              <div className="ml-8 flex items-center"><FaStar className="text-[#0755eb]" /><span className="font-regular text-sm ml-2">Custom Software Development</span></div>
              <div className="ml-8 flex items-center"><FaStar className="text-[#0755eb]"/><span className="font-regular text-sm ml-2">Landing/Offer Page Development</span></div>
              <div className="ml-8 flex items-center"><FaStar className="text-[#0755eb]"/><span className="font-regular text-sm ml-2">Mobile App Development</span></div>
              <div className="ml-8 flex items-center"><FaStar className="text-[#0755eb]"/><span className="font-regular text-sm ml-2">Testing & Quality Assurance</span></div>
              <div className="ml-8 flex items-center"><FaStar className="text-[#0755eb]"/><span className="font-regular text-sm ml-2">Web App Development</span></div>
              <div className="ml-8 flex items-center"><FaStar className="text-[#0755eb]"/><span className="font-regular text-sm ml-2">Application Re-engineering</span></div>
              <div className="ml-8 flex items-center"><FaStar className="text-[#0755eb]"/><span className="font-regular text-sm ml-2">Ecommerce Store Development</span></div>
              <div className="ml-8 flex items-center"><FaStar className="text-[#0755eb]"/><span className="font-regular text-sm ml-2">DevOps</span></div>
            </div>
            <div className="ml-8 mt-8 text-[#0755eb]">
            <div className='  mt-9 mb-8'>
        <button className='px-3 flex justify-center items-center py-2 border border-[#0577eb] text-[#0577eb] font-regular text-xs rounded-md'>Hire Talent<FaArrowRightLong className='ml-2' /></button>
       </div>
            </div>
          </div>
        </div>
        <div>
          {/* Image */}
          <Image
            src={"/laptop.png"}
            alt=""
            width={300}
            height={300}
            className=" mr-9"
          />
        </div>
      </div>
      <div className="mt-20 ml-12  mr-12">
        <div className=" w-full h-40  rounded mb-5 bg-[#cfebf3] flex items-center justify-center gap-24 md:gap-14">
          <div className="flex justify-center items-center flex-col">
            <div className=" rounded-full bg-white w-14 h-14 flex justify-center flex-col items-center">
             <Image src={'/p1.png'} alt="" width={ 35} height={35} className=""/>
            </div>
           <h1 className="text-[#0775eb] text-xs mt-2 flex justify-center items-center md:text-sm font-bold">48-hr Miraculous Match</h1>
          </div>
          
          <div className="flex justify-center items-center flex-col ">
            <div className=" rounded-full bg-white w-14 h-14 flex justify-center flex-col items-center">
             <Image src={'/star.png'} alt="" width={ 35} height={35} className=""/>
            </div>
           <h1 className="text-[#0775eb] text-xs mt-2 flex justify-center items-center md:text-sm font-bold">Only Hand Picked Devs </h1>
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className=" rounded-full bg-white w-14 h-14 flex justify-center flex-col items-center">
             <Image src={'/m1.png'} alt="" width={35} height={35} className=""/>
            </div>
           <h1 className="text-[#0775eb] text-xs mt-2 flex justify-center items-center md:text-sm font-bold">Dev Replacement Guarantee</h1>
          </div>
        
        </div>
           
      </div>
    </section>
  );
}
