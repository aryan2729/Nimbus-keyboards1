"use client"

import { useGSAP } from "@gsap/react";
import { clsx } from "clsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from 'gsap'



gsap.registerPlugin(useGSAP, ScrollTrigger)

type fadeInProps ={
    children: React.ReactNode;
    vars?: gsap.TweenVars;
    start?:string;
    className? :string;
    targetChildren? : boolean
}


export function FadeIn({
    children,
    className,
    start ="top 50%",
    targetChildren = false,
    vars = {},

}: fadeInProps ){


    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(()=>{
        const target = targetChildren ? containerRef.current?.children : containerRef.current;

        if(!target) return 

        gsap.set(target, {
            opacity:0 , 
            y:60
        })

        gsap.to(target, {
            duration:0.8 , 
            opacity:1 , 
            ease : "power3.out",
            y:0 , 
            stagger:0.2 , 
            ...vars,
            scrollTrigger : {
                trigger: containerRef.current,
                start
            }
        })
        
    })




    return <div ref={containerRef} className={clsx(className)}>{children}</div>
}