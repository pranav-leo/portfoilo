import { useRef, useEffect, useCallback } from "react";
import CloudTransition from "@/components/cloudTransition";
import GithubProfileCard from "@/components/githubCard";
import TypingAnimation from "@/components/typing";
import RetroGrid from "@/components/magicui/retro-grid";
import { interpolateColor, interpolateGreyColor } from "@/lib/math_utils";
// Import House Components
import House1_Identity from "@/components/houses/House1_Identity";
import House2_Earnings from "@/components/houses/House2_Earnings";
import House3_Experience from "@/components/houses/House3_Experience";
import House4_Foundation from "@/components/houses/House4_Foundation";
import House5_Creativity from "@/components/houses/House5_Creativity";
import House6_Routine from "@/components/houses/House6_Routine";
import House7_Partnerships from "@/components/houses/House7_Partnerships";
import House8_Transformation from "@/components/houses/House8_Transformation";
import House9_Education from "@/components/houses/House9_Education";
import House6_7_Transition from "@/components/House6_7_Transition";
import House10_Career from "@/components/houses/House10_Career";
import House11_Gains from "@/components/houses/House11_Gains";
import House12_Service from "@/components/houses/House12_Service";

export default function AstroPortfolio() {
  const house8Ref = useRef(null);
  const mainRef = useRef(null);
  const navRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollHeight = 1;
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const maxScroll = scrollHeight * window.innerHeight;
    const scrollFraction = Math.min(scrollTop / maxScroll, 1);
    const scrollFractionUnClamped = scrollTop / maxScroll;
    if (mainRef.current) {
      if (scrollFractionUnClamped >= 0.6 && scrollFractionUnClamped <= 8.5) {
        const colorFraction = (scrollFraction - 0.6) / 0.2;
        const newColor = interpolateColor(colorFraction);

        // Change the background color to black progressively
        mainRef.current.style.backgroundColor = newColor;
        // navRef.current.style.backgroundColor = newColor;
        // navRef.current.style.color = "#ffffff";
      } else if (scrollFractionUnClamped > 9.5) {
        const newColor = interpolateGreyColor(scrollFractionUnClamped - 9.5);
        mainRef.current.style.backgroundColor = newColor;
        // navRef.current.style.backgroundColor = newColor;
        // navRef.current.style.color = "#ffffff";
      } else if (scrollFractionUnClamped < 0.6) {
        // Restore gradient and reset background color
        mainRef.current.style.backgroundColor = "#ffffff";
        // navRef.current.style.backgroundColor = "";
        // navRef.current.style.color = "#000000";
      }
    }
    if (aboutRef.current) {
      if (scrollFractionUnClamped >= 1.2 && scrollFractionUnClamped <= 1.6) {
        aboutRef.current.style.backgroundColor = "transparent";

        aboutRef.current.style.marginTop = `${(scrollFractionUnClamped - 1) * 100
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
    // Set initial white background
    if (mainRef.current) {
      mainRef.current.style.backgroundColor = "#ffffff";
      //   navRef.current.style.backgroundColor = "#ffffff";
      //   navRef.current.style.color = "#000000";
    }

    // Initial scroll call
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <main
      ref={mainRef}
      className="flex min-h-screen flex-col items-center justify-between overflow-y-clip "
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
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
      {/* Navbar Placeholder - Can be imported if needed */}
      <div className="fixed top-0 w-screen h-16 z-[50] flex justify-around items-center bg-background/80 backdrop-blur-md border-b border-border">
        <div className="font-bold text-xl">Pranav Arya</div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#house1">Identity</a>
          <a href="#house5">Skills</a>
          <a href="#house10">Work</a>
          <a href="#house12">Contact</a>
        </div>
      </div>

      {/* Cloud Transition Overlay for House 8 */}
      <div className="fixed inset-0 z-[45] pointer-events-none">
        <CloudTransition containerRef={house8Ref} />
      </div>

      {/* 12 Houses */}
      {/* <div id="house1" className="w-full relative z-10"><House1_Identity /></div> */}
      <div id="house2" className="w-full relative z-10">
        <House2_Earnings />
      </div>
      <div id="house3" className="w-full relative z-10">
        <House3_Experience />
      </div>
      <div id="house4" className="w-full relative z-10">
        <House4_Foundation />
      </div>
      <div id="house5" className="w-full relative z-10">
        <House5_Creativity />
      </div>
      <div id="house6-7" className="w-full relative z-10">
        <House6_7_Transition />
      </div>

      {/* Section 8 */}
      <div id="house8" ref={house8Ref} className="w-full relative z-10">
        <House8_Transformation />
      </div>

      <div id="house9" className="w-full relative z-10">
        <House9_Education />
      </div>
      <div id="house10" className="w-full relative z-10">
        <House10_Career />
      </div>
      <div id="house11" className="w-full relative z-10">
        <House11_Gains />
      </div>
      <div id="house12" className="w-full relative z-10">
        <House12_Service />
      </div>

      {/* Footer */}
      <div className="w-full flex px-12 justify-start relative z-10 bg-background">
        <GithubProfileCard />
      </div>
    </main>
  );
}
