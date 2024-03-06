import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { IoMdAddCircleOutline } from "react-icons/io";
  

export default function Questions() {
  return (
    <div className='mt-6 mb-11 '>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='lg:text-3xl md::text-3xl text-2xl font-bold flex justify-center items-center font-regular'>Have Questions <span className='text-[#0755eb] ml-2'>?</span></h1>
            <p className='flex justify-center items-center mt-10 mb-5'>We've got answers! </p>
        </div>
        <div className='mt-10 flex justify-center items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-28 '>
              <div className=''>
              <Accordion type="single" collapsible className='w-[380px] border-b border-blue-500'>
  <AccordionItem value="item-1" className="">
    <AccordionTrigger><IoMdAddCircleOutline  className=' text-[#0577eb] text-xl font-bold mr-5'  /><span className='text-xs font-semibold'>What hours will my developers be available ?</span></AccordionTrigger>
    <AccordionContent>
    StakNest ensures that your assigned developer or team is available for a standard 8-hour workday, with overlapping hours tailored to your local time zone for optimal collaboration. Our offices are open 18 hours daily to address any urgent needs
    </AccordionContent>
  </AccordionItem>
</Accordion>

              </div>
              <div className=''>
              <Accordion type="single" collapsible className='w-[380px] border-b border-blue-500'>
  <AccordionItem value="item-1" className="">
    <AccordionTrigger><IoMdAddCircleOutline  className='text-[#0577eb] text-xl font-bold mr-5'  /><span className='text-xs font-semibold'>How does StakNest protects my project's confidentiality</span> ?</AccordionTrigger>
    <AccordionContent>
    StakNest adheres to stringent security protocols to safeguard your data, with an option to reinforce this with a Non-Disclosure Agreement (NDA) for your peace of mind.

    </AccordionContent>
  </AccordionItem>
</Accordion>

              </div>
              <div className=''>
              <Accordion type="single" collapsible className='w-[380px] border-b border-blue-500'>
  <AccordionItem value="item-1" className="w-full">
    <AccordionTrigger><IoMdAddCircleOutline  className='text-[#0577eb] text-xl font-bold mr-5'  /><span className='text-xs font-semibold'>How can I communicate with my Team ?</span></AccordionTrigger>
    <AccordionContent>
      
We usually use Slack , Skype and Google Meet for  communication including voice/video conferencing instant messages and of course emails ,whereas for project management we use Jira and Asana . Which way you communicate with your development team is up to you.
    </AccordionContent>
  </AccordionItem>
</Accordion>

              </div>
              <div className=''>
              <Accordion type="single" collapsible className='w-[380px] border-b border-blue-500'>
  <AccordionItem value="item-1" className="w-full">
    <AccordionTrigger><IoMdAddCircleOutline  className='text-[#0577eb] text-xl font-bold mr-5'  /><span className='text-xs font-semibold'>How can I ensure my project's progress ?</span></AccordionTrigger>
    <AccordionContent>
    StakNest has got you covered. Enjoy peace of mind as we proactively manage your project's progress, a benefit of partnering with a full-service development company.
    </AccordionContent>
  </AccordionItem>
</Accordion>

              </div>
              <div className=''>
              <Accordion type="single" collapsible className='w-[380px] border-b border-blue-500'>
  <AccordionItem value="item-1" className="w-full">
    <AccordionTrigger><IoMdAddCircleOutline  className='text-[#0577eb] text-xl font-bold mr-5'  /><span className='text-xs font-semibold'>What engagement models does StakNest provide?</span></AccordionTrigger>
    <AccordionContent>
    Choose from our flexible engagement models including part-time or full-time dedicated developers, or explore custom solutions tailored to your project's needs.
    </AccordionContent>
  </AccordionItem>
</Accordion>

              </div>
              <div className=''>
              <Accordion type="single" collapsible className='w-[380px] border-b border-blue-500'>
  <AccordionItem value="item-1" className="w-full">
    <AccordionTrigger><IoMdAddCircleOutline  className='text-[#0577eb] text-xl font-bold mr-5'  /><span className='text-xs font-semibold'>What happens to unutilized hours at month-end?</span></AccordionTrigger>
    <AccordionContent>
    To ensure dedicated support, hours bought under a full-time engagement do not carry over. This approach guarantees your project has the undivided attention of your assigned developer.
    </AccordionContent>
  </AccordionItem>
</Accordion>

              </div>
              <div>
              <Accordion type="single" collapsible className='w-[380px] border-b border-blue-500'>
  <AccordionItem value="item-1" className="w-full">
    <AccordionTrigger><IoMdAddCircleOutline  className='text-[#0577eb] text-xl font-bold mr-3'  /><span className='text-xs font-semibold'>Our approach towards holidays, sick leaves and absences?</span></AccordionTrigger>
    <AccordionContent>
      Our team enjoys standard leaves and holidays, with advance notice provided to our clients. During these times, emergency support remains available, and alternate developers can be assigned to ensure continuity.
    </AccordionContent>
  </AccordionItem>
</Accordion>

              </div>
              <div  className=''>
              <Accordion type="single" collapsible className='w-[380px] border-b border-blue-500  '>
  <AccordionItem value="item-1" className="w-full  ">
    <AccordionTrigger><IoMdAddCircleOutline  className='text-[#0577eb] text-xl font-bold mr-5'  /> <span className='text-xs font-semibold'>Why choose StakNest over freelance platforms?</span></AccordionTrigger>
    <AccordionContent>
    With StakNest, you gain access to a comprehensive team including project managers and QA specialists, ensuring a cohesive approach to your project with quality at its core.
    </AccordionContent>
  </AccordionItem>
</Accordion>

              </div>
             

            </div>
        </div>
    </div>
  )
}
