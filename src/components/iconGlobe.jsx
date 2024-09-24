import IconCloud from "./magicui/icon-cloud";
import { useRef,useEffect,useCallback } from "react";
const iconSlugs = [
    "react",
    "nodejs",
    "typescript",
    "vite",
    "bun",
    "django",
    "strapi",
    "mongodb",
    "postgresql",
    "supabase",
    "googlecloud",
    "awsec2",
    "awsrds",
    "redis",
    "docker",
    "azure",
    "nodejs",
    "typescript",
    "vite",
   
  "javascript",
  "react",

  "html5",
  "css3",
  "nodedotjs",
  "express",

  "amazonaws",

  "firebase",
  "nginx",
  "vercel",

  "jest",
  "cypress",
  "docker",
  "visualstudiocode",
  "androidstudio",
  "figma",
    ];

export default function SkillsGlobe() {
    const globeRef = useRef(null);

    const scrollHeight = 1;
    const handleScroll = useCallback(() => {
      const scrollTop = window.scrollY;
      const maxScroll = scrollHeight * window.innerHeight;
      const scrollFraction = Math.min(scrollTop / maxScroll, 1);
      const scrollFractionUnClamped = scrollTop / maxScroll;
      
      if(globeRef.current){
        // globeRef.current.style.transform = `scale(${1 + scrollFraction * 0.5})`;
        globeRef
      }
      
    }, [scrollHeight]);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [handleScroll]);

    return (
        <div className="w-full h-[200vw] flex justify-center bg-red-400 ">
            <div ref={globeRef} className="w-96 sticky top-[10vh] h-96" >
            <IconCloud iconSlugs={iconSlugs} />
            </div>
        </div>
    );
}