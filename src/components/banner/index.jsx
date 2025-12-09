"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Banner = () => {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
     <section className="relative overflow-hidden h-[400px] md:h-[600px] bg-amber-50">
        <div className="relative w-full h-full">
            <Image
                src="/Ocean.png"
                alt="banner"
                fill
                className="object-cover "
                style={{transform: `translateY(${offset * 0.3}px)`}}/>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-4xl font-bold" style={{ transform: `translateY(${offset * 0.1}px)`}}>Ocean</h1>
            <p className="text-lg mt-2" style={{ transform: `translateY(${offset * 0.1}px)`}}>Where all our great things begin</p>
         </div>
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 100 10"
            preserveAspectRatio="none">
            <polygon fill="white" points="0,10 100,0 100,10" />
         </svg>
    </section>
  );
}

export default Banner
