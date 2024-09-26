import IconCloud from "./magicui/icon-cloud";
import { useRef, useEffect, useCallback } from "react";

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
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollTop = -top; // Negative value to calculate scroll down within the container
      const maxScroll = height; // Maximum scroll based on the container's height
      const scrollFraction = Math.min(scrollTop / maxScroll, 1); // Clamp the value between 0 and 1

      if (globeRef.current) {
        const scale = Math.sin(scrollFraction * Math.PI * 8) * 0.5; // Shrink and expand 3 times

        if (scrollFraction < 1) {
          // Adjust scaling smoothly after 0.9 scrollFraction
          globeRef.current.style.transform =
            scrollFraction > 0.8
              ? `scale(${1 + Math.sin((Math.PI / 2) * ((scrollFraction - 0.8) / 0.2)) * 50})`
              : `scale(${1 + scale})`;
        
          // Ensure horizontal scrolling is disabled when needed
          // 
        } else {
          // Once scrollFraction is greater than or equal to 1, reset scaling
          globeRef.current.style.transform = `scale(${1 + scale})`;
        
          // Allow horizontal overflow when the globe is fully scaled
          containerRef.current.style.overflowX = "";
        }
        if (scrollFraction > 0.8) {
          containerRef.current.style.overflowX = "clip";
          globeRef.current.style.opacity = `${Math.sin(
            (((1 - scrollFraction) / 0.2) * Math.PI) / 2
          )}`;
          titleRef.current.style.top = `${20 - (scrollFraction - 0.8) * 100}vh`;
          
        }

        // else
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[600vh] flex flex-col gap-12 items-center "
    >
        <div ref={titleRef} className="text-5xl sticky top-[20vh] h-96 transition-transform font-medium text-white"  > My Tech Stack </div>

      <div
        ref={globeRef}
        className="w-96 sticky top-[30vh] h-96 transition-transform transition-opacity"
      >

        <IconCloud iconSlugs={iconSlugs} />
      </div>
    </div>
  );
}
