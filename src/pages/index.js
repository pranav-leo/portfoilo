import { useRef, useEffect, useCallback } from "react";
import TypingAnimation from "@/components/typing";
import RetroGrid from "@/components/magicui/retro-grid";
import { interpolateColor } from "@/lib/math_utils";
import { Orbit } from "@/components/orbit";
export default function Home() {
  const mainRef = useRef(null);
  const navRef = useRef(null);
  const scrollHeight = 1;
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const maxScroll = scrollHeight * window.innerHeight;
    const scrollFraction = Math.min(scrollTop / maxScroll, 1);
    if (mainRef.current && navRef.current) {
      if (scrollFraction >= 0.6) {
        const colorFraction = (scrollFraction - 0.6) / 0.2; // Normalize fraction between 0.8 and 1
        const newColor = interpolateColor(colorFraction);

        // Change the background color to black progressively
        mainRef.current.style.backgroundColor = newColor;
        navRef.current.style.backgroundColor = newColor;
        navRef.current.style.color = "#ffffff";
      } else {
        // Restore gradient and reset background color
        mainRef.current.style.backgroundColor = "";
        navRef.current.style.backgroundColor = "";
        navRef.current.style.color = "#000000";
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
      className={`flex min-h-screen flex-col items-center justify-between  `}
      ref={mainRef}
    >
      {/* Navbar */}
      <div
        ref={navRef}
        className="fixed bg-white w-screen h-12 z-[12] px- flex justify-around items-end  "
      >
        <div> Contact Me </div>
        <div className="flex gap-[5vw] text-lg font-medium">
          {" "}
          <p>About</p> <p>Previous Experince</p> <p>Skills</p>
          <p>Projects</p>
          <p>Social</p>{" "}
        </div>
        <div className="flex gap-5">
          <div className="bg-[#FDFDFD] border-0.5 border-black text-[#020202] py-1.5 px-4 rounded-lg focus:ring-4 focus:ring-gray-700">
            Contact Me
          </div>
          <div className="bg-[#020202] text-[#FDFCFD] py-1.5 px-4 rounded-lg">
            Contact Me
          </div>
        </div>
      </div>
      <div className="fixed bottom-[5vh]">scroll to know more</div>
      <div className="flex min-h-screen flex-col items-center justify-between pb-12 ">
        <div className="flex flex-col gap-5 justify-center text-center">
          <span class="pointer-events-none mt-[40vh] z-10 whitespace-pre-wrap text-black text-center text-7xl font-bold leading-none tracking-tighter ">
            Pranav Arya
          </span>
          <TypingAnimation />
        </div>

        <RetroGrid />
      </div>
      <div className="min-h-screen h-[120vh]">
        
      </div>
      <div className="flex ">
          <div className="flex text-white flex-col flex-[0.5] px-8 gap-4 ">
            <h2 className="text-7xl font-semibold" >About</h2>
            <p className="text-xl font-medium" >
              Hi, I am Pranav Arya, a software developer based in India. I am a
              self-taught developer with a passion for creating beautiful and
              functional websites. I have experience working with a variety of
              technologies, including HTML, CSS, JavaScript, React, and Node.js.
              I am always looking to learn new things and improve my skills, and
              I am excited to see where my coding journey takes me next.
            </p>
          </div>
          <div className="flex flex-[0.5]">
            <Orbit />
          </div>
        </div>
        <div className="h-screen"></div>
    </main>
  );
}
