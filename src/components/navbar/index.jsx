"use client"

import { useEffect, useState } from "react";
import Link from "next/link"
import Logo from "../logo"

const Navbar = () => {

  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.pageYOffset;

      if (current > lastScroll) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(current <= 0 ? 0 : current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);
  return (
    <div className={`
        fixed flex justify-between w-full z-50 p-4 md:flex-row flex-col
        transition-all duration-300
        ${show ? "translate-y-0 bg-orange-500 backdrop-blur-md" : "-translate-y-full"}
      `}>
    <div className="  mx-auto space-x-10"><Logo/></div>
    <nav className="  mx-auto space-x-10  flex justify-center items-center end-0">
        <Link href="/Work" className="hover:underline ">Work</Link>
        <Link href="/About" className="hover:underline ">About</Link>
        <Link href="/Service" className="hover:underline ">Service</Link>
        <Link href="/Ideas" className="hover:underline ">Ideas</Link>
        <Link href="/Career" className="hover:underline ">Career</Link>
        <Link href="/Contact" className="hover:underline ">Contact</Link>
    </nav>
    </div>
  )
}

export default Navbar
