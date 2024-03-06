"use client"

import Cost from "@/components/Cost";
import EndRoll from "@/components/EndRoll";
import Engineers from "@/components/Engineers";
import Form from "@/components/Form";
import GridFlow from "@/components/GridFlow";
import HeroSection from "@/components/HeroSection";
import Jensen from "@/components/Jensen";
import Kali from "@/components/Kali";
import LForm from "@/components/LForm";

import Questions from "@/components/Questions";
import Slider from "@/components/Slider";


import Started from "@/components/Started";
import Tailored from "@/components/Tailored";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <EndRoll/>
    <Started/>
    <Cost/>
    <Jensen/>
    <Form/>
    <Tailored/>
    <GridFlow/>
     <Slider/>
    <Engineers/>
    <Questions/>
   
   
    {/* <Kali/> */}
    <LForm/>
     
    
   
    </>
    
  );
}
