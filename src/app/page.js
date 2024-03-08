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
import { useTawkTo } from "./hooks/useTawkTo";
import CalendlyWidget from "@/components/CalendlyWidget";
import Navbar from "@/components/Navbar";
import Candy from "@/components/Candy";


export default function Home() {
  useTawkTo('65c1da818d261e1b5f5cc8a1'); // Replace 'YOUR_TAWKTO_KEY_HERE' with your actual Tawk.to key
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <EndRoll/>
    <Started/>
    <Cost/>
    <Jensen/>
    <CalendlyWidget/>
    <Tailored/>
    <GridFlow/>
     <Slider/>
    <Engineers/>
    <Questions/>
   
   
    {/* <Kali/> */}
    {/* <LForm/> */}
    <Candy/>
     
    
   
    </>
    
  );
}
