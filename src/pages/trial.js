import React, { useRef, useEffect, useCallback,useState } from "react";
import IconCloud from "@/components/magicui/icon-cloud";

const icons = [
  "react",
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
];

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];


export default function TriangleParticles() {
  const ballARef = useRef(null);
  const ballBRef = useRef(null);
  const ballCRef = useRef(null);
  const containerRef = useRef(null);
  const x = 20; // Variable representing the percentage of viewport width (15% in this example)
  const [sideLength, setSideLength] = useState(0) ; // Side length of the equilateral triangle


  useEffect(() => {

    const multiplier = window.innerWidth*(1-(3*x/100));
    console.log("mult",multiplier)
    setSideLength(multiplier);
    console.log("sideLength",sideLength)
    return () => {
      // cleanup
      setSideLength(multiplier);
    };
  }, [x])
  

  // Function to calculate spiral movement for each ball
  


  // Scroll handler to track scroll progress and update positions
  const handleScroll = useCallback(() => {
    const getSpiralPosition = (initial, center, progress, angleOffset) => {
      console.log("sideLength",sideLength)
      const distanceFromCenter = (1 - progress) * (sideLength / 2); // Distance decreases as progress increases
      const angle = progress * Math.PI * 2 + angleOffset; // Rotate based on progress
  
      return {
        x: center.x + distanceFromCenter * Math.cos(angle),
        y: center.y + distanceFromCenter * Math.sin(angle),
      };
    };
    // setSideLength(window.innerWidth * (1-(x / 500)));
 
    if (containerRef.current) {
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollTop = -top; // Negative value as we scroll down
      const maxScroll = height - window.innerHeight; // Scrollable height
      const scrollFraction = Math.min(scrollTop / maxScroll, 1); // Clamp scrollFraction between 0 and 1
 
      // Use x% of the viewport width for the initial X position of the balls
      const vwX = -4* (window.innerWidth * (((x) / 100)))/(3) 
      const vwY = 1.05*window.innerWidth * (1-(4.5*x / 100));

      // Initial positions for A, B, and C (vertices of the equilateral triangle), using x%vw
      const initialPositions = {
        A: { x: vwX, y: vwY }, // A starts at (x%vw, 100)
        B: { x: vwX + sideLength, y: vwY *1.5 }, // B starts to the right of A
        C: {
          x: vwX + sideLength / 2,
          y: 100 + (Math.sqrt(3) * sideLength) / 2, // C at the bottom of the triangle
        },
      };

      // The center of the triangle where the balls will collide
      const centerPosition = {
        x: initialPositions.A.x + sideLength / 2,
        y: initialPositions.A.y + (Math.sqrt(3) * sideLength) / 6, // Equilateral triangle center
      };

      // Calculate the current positions of A, B, and C based on scroll progress and rotation angle
      const positionA = getSpiralPosition(initialPositions.A, centerPosition, scrollFraction, 0);
      const positionB = getSpiralPosition(initialPositions.B, centerPosition, scrollFraction, (2 * Math.PI) / 3);
      const positionC = getSpiralPosition(initialPositions.C, centerPosition, scrollFraction, (4 * Math.PI) / 3);

      // Apply the new positions to the DOM elements
      if (ballARef.current && ballBRef.current && ballCRef.current) {
        ballARef.current.style.transform = `translate(${positionA.x}px, ${positionA.y}px)`;
        ballBRef.current.style.transform = `translate(${positionB.x}px, ${positionB.y}px)`;
        ballCRef.current.style.transform = `translate(${positionC.x}px, ${positionC.y}px)`;
      }
    }
  }, [x,sideLength]);

  useEffect(() => {
    // setSideLength(window.innerWidth * (x / 500));
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll,sideLength]);
  

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div ref={containerRef} className="relative w-screen h-[300vh] bg-gray-900 overflow-x-clip ">
      <div className="sticky top-[1px] bg-blue-400 h-[0vh] w-screen flex items-center justify-center overflow-x-clip">
        <div
          ref={ballARef}
          className="absolute"
          style={{ width: `${x}vw`, height: `${x}vw`, zIndex: 50 }}
        >
          <IconCloud images={images}  />
        </div>
        <div
          ref={ballBRef}
          className="absolute"
          style={{ width: `${x}vw`, height: `${x}vw`, zIndex: 50 }}
        >
          <IconCloud images={images}  />
        </div>
        <div
          ref={ballCRef}
          className="absolute"
          style={{ width: `${x}vw`, height: `${x}vw`, zIndex: 50 }}
        >
          <IconCloud images={images}  />
        </div>
      </div>
    </div>
  );
}
