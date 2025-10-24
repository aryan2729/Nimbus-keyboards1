"use client";

import {  FC, useEffect, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Loader } from "@/components/Loader";
import { useProgress } from "@react-three/drei";
import clsx from "clsx";


gsap.registerPlugin(useGSAP , SplitText , ScrollTrigger);

function LoaderWrapper(){
  const {active} = useProgress();
  const [isLoading , setIsLoading] = useState(true);

  useEffect(()=>{
    if(active){
      setIsLoading(true);
    }else {
      const timer = setTimeout(()=> setIsLoading(false), 100);
      return ()=> clearTimeout(timer);
    }
  }, [active]);

  return (
    <div className={clsx("motion-safe:transition-opacity motion-safe:duration-700",
      isLoading ? "opacity-100" : "pointer-events-none opacity-0",
    )}>
      <Loader/>
    </div>)

}

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {

  useGSAP(()=>{
    const split = SplitText.create(".hero-heading",{
      type: "chars,lines",
      mask : "lines",
      linesClass : "line++"
    })

    const tl = gsap.timeline({delay : 4.2});

    tl.from(split.chars, {
      opacity:0 , 
      y:-120,
      ease : "back",
      duration:0.4 , 
      stagger:0.07
    }).to(".hero-body",{
      opacity:1 , 
      duration:0.6 , 
      ease : "power2.out"
    })

    gsap.fromTo(".hero-scene",{
      background : "linear-gradient(to bottom, #000000, #0f172a, #062f4a, #7fa0b9)",
      
    },{
      background : "linear-gradient(to bottom, #ffffff, #ffffff, #ffffff, #ffffff)",
      scrollTrigger : {
        trigger : ".hero",
        start : "top top",
        end : "50% bottom",
        scrub: 1
      }
    })

  })



  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=" hero  text-white relative h-dvh   [text-shadow:3px_3px_6px_rgb(0_0_0_/_0.3)] motion-safe:h-[300vh] "   // use h-dvh it's mobile friendly and always prefer dvh * dvw instead of vh & vw  |  /30 used after colour for tellign opacity 
    >


      <div className="hero-scene sticky pointer-events-none top-0 h-dvh w-full ">

        <Canvas shadows="soft" >

            <Scene />

        </Canvas>
      </div>
        <LoaderWrapper />

      <div className="hero-content absolute inset-x-0 top-0 h-dvh ">

        <Bounded fullWidth 
        className="absolute inset-x-0 top-18 md:top-24 md:left-[8vw]"> 
          <PrismicRichText
          field={slice.primary.heading} 
          components={{
              heading1 : ({children}) => (
                <h1 className="hero-heading font-black-slanted text-6xl leading-[0.8] uppercase sm:text-7xl lg:text-8xl ">
                  {children}
                </h1>
              )
          }} /> 
        </Bounded>
          
        <Bounded fullWidth
         className="hero-body absolute inset-x-0 bottom-0 md:right-[8vw] md:left-auto  opacity-0 "        //*inset-x-0 ? left & right -> 0/0px 
         innerClassName="flex flex-col gap-3"         // innerclassName use for innerClasses for gapping etc flex-col means flex-column wise 
         >
          
          <div className="max-w-md ">
            <PrismicRichText field={slice.primary.body}
            components={{
              heading2 : ({children}) => (
                <h2 className="font-bold-slanted text-4xl mb-1 uppercase lg:mb-2 lg:text-6xl ">
                  {children}
                </h2>
              )
            }} />
          </div>
          <button className="font-bold-slanted  group  flex w-fit cursor-pointer items-center gap-1 rounded bg-[#01A7E1] px-3 py-1 text-2xl uppercase transition disabled:grayscale ">
            {slice.primary.buy_button_text}
            <span className="group-hover:translate-x-1  transition ">{">"}</span>    {/* // group-hover:translate-x-1 need parent class in which have group so it basically shift this > to right side little bit in x-1  & transition to make the animaton smooth */}
          </button>
        </Bounded>




      </div>
      
    </section>
  );
};

export default Hero;
