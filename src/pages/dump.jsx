// load 

import { useRef, useEffect, useCallback } from "react";

import TypingAnimation from "@/components/typing";
import RetroGrid from "@/components/magicui/retro-grid";
import { interpolateColor, interpolateGreyColor } from "@/lib/math_utils";
// import { Orbit } from "@/components/orbit";

export default function Home() {
  const mainRef = useRef(null);
  const navRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollHeight = 1;
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const maxScroll = scrollHeight * window.innerHeight;
    const scrollFraction = Math.min(scrollTop / maxScroll, 1);
    const scrollFractionUnClamped = scrollTop / maxScroll;
    if (mainRef.current && navRef.current) {
      if (scrollFractionUnClamped >= 0.6 && scrollFractionUnClamped <= 8.5) {
        const colorFraction = (scrollFraction - 0.6) / 0.2;
        const newColor = interpolateColor(colorFraction);

        // Change the background color to black progressively
        mainRef.current.style.backgroundColor = newColor;
        navRef.current.style.backgroundColor = newColor;
        navRef.current.style.color = "#ffffff";
      } else if (scrollFractionUnClamped > 9.5) {
        const newColor = interpolateGreyColor(scrollFractionUnClamped - 9.5);
        mainRef.current.style.backgroundColor = newColor;
        navRef.current.style.backgroundColor = newColor;
        // navRef.current.style.color = "#ffffff";
      } else if (scrollFractionUnClamped < 0.6) {
        // Restore gradient and reset background color
        mainRef.current.style.backgroundColor = "";
        navRef.current.style.backgroundColor = "";
        navRef.current.style.color = "#000000";
      }
    }
    if (aboutRef.current) {
      if (scrollFractionUnClamped >= 1.2 && scrollFractionUnClamped <= 1.6) {
        aboutRef.current.style.backgroundColor = "transparent";
        aboutRef.current.style.marginTop = `${
          (scrollFractionUnClamped - 1) * 100
        }vh`;
        let opacity = 0;
        if (scrollFractionUnClamped > 1.25) {
          opacity = 1;
        }
        aboutRef.current.style.opacity = `${opacity}`;

        // aboutRef.current.style.opacity=`${0}`;
      }
    }
  }, [scrollHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between   overflow-y-clip  `}
      style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE and Edge
        "&::-webkit-scrollbar": {
          display: "none", // Chrome and Safari
        },
        WebkitOverflowScrolling: "touch",
      }}
      ref={mainRef}
    >


      <div className="flex min-h-screen flex-col items-center justify-between pb-12 ">
        <div className="flex flex-col gap-5 justify-center text-center">
          <span class="pointer-events-none mt-[40vh] z-10 whitespace-pre-wrap text-black text-center text-7xl font-bold leading-none tracking-tighter ">
            Pranav Arya
          </span>
          <TypingAnimation />
        </div>

        <RetroGrid />
      </div>
      <div className="h-[85vh]"></div>
     
      <div id="about" ref={aboutRef} className="flex w-full px-[5vw] ">
        <div className="flex w-full text-white flex-col gap-4 ">
          <h2 className="text-4xl font-medium">About</h2>
          <div className="flex w-full items-center justify-between">
           
            
            <p className="text-xl max-w-[50vw]  font-normal">
              Hi, I am Pranav Arya, a software developer based in India. I am a
              self-taught developer with a passion for creating beautiful and
              functional websites. I have experience working with a variety of
              technologies, including HTML, CSS, JavaScript, React, and Node.js.
              I am always looking to learn new things and improve my skills, and
              I am excited to see where my coding journey takes me next.
            </p>
            <div className=" min-w-64 flex items-center justify-end whitespace-pre-wrap ">
              <img src="/pranav.png" alt="logo" className="w-80 h-80 -mt-12" />
            </div>
          </div>
        </div>
      </div>
   
    </main>
  );
}
