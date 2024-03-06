import { FaArrowRightLong } from "react-icons/fa6";
import GlidingCard from "./Glider";
import SlidingCard from "./Slide";

const Slider = () => {
    const frontContent = (
      <div className="p-10 ">
        <h2 className="text-xl font-bold w-full h-full bg-red-500"></h2>
        {/* Add more content as needed */}
      </div>
    );
  
    const backContent = (
      <div className="p-4">
        <h2 className="text-xl font-bold">Online Reputation Management Platform</h2>
        {/* Add more content as needed */}
        
      </div>
    );
    return (
        <>
       
        <div className="flex flex-col justify-center items-start h-full md:h-screen  bg-[#cfebf3] -skew-y-6 mt-7">
             <div className="mb-5 skew-y-6 ml-16  md:mt-10 ">
            <h1 className="font-regular text-3xl mt-16 font-bold leading-tight " >Together, We Forge the Path to <span className="text-[#0755eb]">Success</span></h1>
            <p className="text-base mt-6 mb-10 font-regular ">12+ Years of Transforming Ideas into Reality: Let's Tackle Your Development Hurdles Now!</p>
             </div>
        
                 <div className="flex flex-col justify-center items-center text-center skew-y-6 ml-8 mb-6 md:mb-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center">
                        <SlidingCard frontContent={frontContent} backContent={backContent} /> 
                            <GlidingCard frontContent={frontContent} backContent={backContent}/>
                       
                    </div>
                   
            </div>
            
           
         
        </div>
        <div className="flex flex-col justify-center items-start h-full md:h-60   bg-[#cfebf3] -skew-y-6">
        <div className=" skew-y-6 flex text-[#0577eb] font-regular  justify-center items-center flex-col w-full">
                      <p>Want to know more about our work ?</p>
                      <div className='flex justify-center items-center mt-9 mb-8'>
        <button className='px-3 flex justify-center items-center py-2 border border-[#0577eb] text-[#0577eb] font-regular text-xs rounded-md'>Let's Talk<FaArrowRightLong className='ml-2' /></button>
       </div>
                    </div>     
        </div>
        
        </>
        );
    };

export default Slider;