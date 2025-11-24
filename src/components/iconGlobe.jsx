import IconCloud from "./magicui/icon-cloud";
import { useRef, useEffect, useCallback, useState } from "react";

const iconSlugs = [
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
  "bun",
  "django",
  "strapi",
  "mongodb",
  "supabase",
  "googlecloud",
  "awsec2",
  "awsrds",
  "redis",
  "azure",
  "vite",
];

export default function SkillsGlobe() {
  // Three balls for spiral animation
  const ballARef = useRef(null);
  const ballBRef = useRef(null);
  const ballCRef = useRef(null);
  // Merged big ball
  const mergedBallRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const stickyContainerRef = useRef(null);

  const ballSize = 20; // Viewport width percentage for each ball
  const [sideLength, setSideLength] = useState(0);

  // Create image URLs from slugs
  const images = iconSlugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  // Calculate side length on mount and resize
  useEffect(() => {
    const calculateSideLength = () => {
      const multiplier = window.innerWidth * (1 - (3 * ballSize / 100));
      setSideLength(multiplier);
    };

    calculateSideLength();
    window.addEventListener("resize", calculateSideLength);
    return () => window.removeEventListener("resize", calculateSideLength);
  }, [ballSize]);

  // Throttle function for smooth scroll handling
  const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  // Easing function for smoother transitions
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !stickyContainerRef.current) return;

    const { top, height } = containerRef.current.getBoundingClientRect();
    const scrollTop = -top;
    const maxScroll = height - window.innerHeight;
    const scrollFraction = Math.min(Math.max(scrollTop / maxScroll, 0), 1);

    // Phase 1: Three balls spiral in (0 to 0.5 scroll fraction)
    // Phase 2: All three balls scale together (0.5 to 1 scroll fraction)
    const mergePoint = 0.5;

    if (scrollFraction < mergePoint) {
      // Phase 1: Spiral animation - three balls coming together
      const spiralProgress = scrollFraction / mergePoint; // 0 to 1
      const easedProgress = easeInOutCubic(spiralProgress);

      // Calculate initial positions for equilateral triangle
      // Center the triangle in the viewport and make sure it's visible
      const centerX = 0; // Center of sticky container
      const centerY = 0; // Center of sticky container
      
      // Use a reasonable distance from center (30% of viewport width)
      const triangleRadius = window.innerWidth * 0.3;
      
      // Calculate triangle vertices around the center
      const initialPositions = {
        A: { 
          x: centerX - triangleRadius * 0.866, // cos(150°) = -√3/2
          y: centerY - triangleRadius * 0.5    // sin(150°) = 1/2
        },
        B: { 
          x: centerX + triangleRadius * 0.866, // cos(30°) = √3/2
          y: centerY - triangleRadius * 0.5    // sin(30°) = 1/2
        },
        C: {
          x: centerX,                          // cos(270°) = 0
          y: centerY + triangleRadius          // sin(270°) = -1
        },
      };

      // Center position (where balls will merge)
      const centerPosition = {
        x: centerX,
        y: centerY,
      };

      // Spiral position calculation
      const getSpiralPosition = (initial, center, progress, angleOffset) => {
        const distanceFromCenter = (1 - progress) * (sideLength / 2);
        const angle = progress * Math.PI * 2 + angleOffset;

        return {
          x: center.x + distanceFromCenter * Math.cos(angle),
          y: center.y + distanceFromCenter * Math.sin(angle),
        };
      };

      const positionA = getSpiralPosition(initialPositions.A, centerPosition, easedProgress, 0);
      const positionB = getSpiralPosition(initialPositions.B, centerPosition, easedProgress, (2 * Math.PI) / 3);
      const positionC = getSpiralPosition(initialPositions.C, centerPosition, easedProgress, (4 * Math.PI) / 3);

      // Apply positions to three balls
      if (ballARef.current && ballBRef.current && ballCRef.current) {
        const ballScale = 0.5 + easedProgress * 0.5; // Scale from 0.5 to 1 as they merge
        
        ballARef.current.style.transform = `translate(${positionA.x}px, ${positionA.y}px) scale(${ballScale})`;
        ballARef.current.style.opacity = "1";
        
        ballBRef.current.style.transform = `translate(${positionB.x}px, ${positionB.y}px) scale(${ballScale})`;
        ballBRef.current.style.opacity = "1";
        
        ballCRef.current.style.transform = `translate(${positionC.x}px, ${positionC.y}px) scale(${ballScale})`;
        ballCRef.current.style.opacity = "1";
      }

      // Hide merged ball
      if (mergedBallRef.current) {
        mergedBallRef.current.style.opacity = "0";
        mergedBallRef.current.style.transform = "scale(0)";
      }
    } else {
      // Phase 2: All three balls scale together after merge
      // Calculate scale progress relative to the second phase (0.5 to 1.0)
      const phase2Progress = (scrollFraction - mergePoint) / (1 - mergePoint); // 0 to 1
      
      // Center position for all three balls
      const centerX = 0;
      const centerY = 0;
      
      // Apply scaling transformation similar to the provided code
      if (ballARef.current && ballBRef.current && ballCRef.current) {
        // Calculate scale based on scroll fraction (using the pattern from provided code)
        // First part: pulsing effect with sin wave
        const scale = Math.sin(scrollFraction * Math.PI * 8) * 0.5;
        
        let finalScale;
        if (scrollFraction > 0.8) {
          // After 0.8 scrollFraction, scale dramatically
          finalScale = 1 + Math.sin((Math.PI / 2) * ((scrollFraction - 0.8) / 0.2)) * 50;
        } else {
          // Before 0.8, use the pulsing scale
          finalScale = 1 + scale;
        }
        
        // Keep all three balls at center and apply the same scale
        ballARef.current.style.transform = `translate(${centerX}px, ${centerY}px) scale(${finalScale})`;
        ballBRef.current.style.transform = `translate(${centerX}px, ${centerY}px) scale(${finalScale})`;
        ballCRef.current.style.transform = `translate(${centerX}px, ${centerY}px) scale(${finalScale})`;
        
        // Handle opacity after 0.8 scrollFraction
        if (scrollFraction > 0.8) {
          const opacity = Math.sin(((1 - scrollFraction) / 0.2) * Math.PI / 2);
          ballARef.current.style.opacity = opacity;
          ballBRef.current.style.opacity = opacity;
          ballCRef.current.style.opacity = opacity;
        } else {
          ballARef.current.style.opacity = "1";
          ballBRef.current.style.opacity = "1";
          ballCRef.current.style.opacity = "1";
        }
      }

      // Hide merged ball (we're using the three balls instead)
      if (mergedBallRef.current) {
        mergedBallRef.current.style.opacity = "0";
        mergedBallRef.current.style.transform = "scale(0)";
      }

      // Handle container overflow
      if (containerRef.current) {
        if (scrollFraction > 0.8) {
          containerRef.current.style.overflowX = "clip";
        } else {
          containerRef.current.style.overflowX = "";
        }
      }

      // Title animation
      if (titleRef.current) {
        if (scrollFraction > 0.8) {
          titleRef.current.style.top = `${20 - (scrollFraction - 0.8) * 100}vh`;
          const titleOpacity = Math.sin(((1 - scrollFraction) / 0.2) * Math.PI / 2);
          titleRef.current.style.opacity = titleOpacity;
        } else {
          titleRef.current.style.opacity = "1";
        }
      }
    }
  }, [sideLength, ballSize]);

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 16);
    
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[600vh] flex flex-col gap-12 items-center relative overflow-visible"
    >
      <div 
        ref={titleRef} 
        className="text-5xl sticky top-[20vh] h-96 transition-all duration-300 font-medium text-white z-10"
      >
        My Tech Stack
      </div>

      <div
        ref={stickyContainerRef}
        className="sticky top-[30vh] w-screen h-[70vh] flex items-center justify-center overflow-visible"
      >
        {/* Three balls for spiral animation */}
        <div
          ref={ballARef}
          className="absolute transition-opacity duration-300"
          style={{ 
            width: `${ballSize}vw`, 
            height: `${ballSize}vw`, 
            zIndex: 50 
          }}
        >
          <IconCloud images={images} />
        </div>
        <div
          ref={ballBRef}
          className="absolute transition-opacity duration-300"
          style={{ 
            width: `${ballSize}vw`, 
            height: `${ballSize}vw`, 
            zIndex: 50 
          }}
        >
          <IconCloud images={images} />
        </div>
        <div
          ref={ballCRef}
          className="absolute transition-opacity duration-300"
          style={{ 
            width: `${ballSize}vw`, 
            height: `${ballSize}vw`, 
            zIndex: 50 
          }}
        >
          <IconCloud images={images} />
        </div>

        {/* Merged big ball */}
        <div
          ref={mergedBallRef}
          className="absolute transition-all duration-300"
          style={{ 
            width: `${ballSize * 1.5}vw`, 
            height: `${ballSize * 1.5}vw`, 
            zIndex: 50,
            opacity: 0,
            transform: "scale(0)",
            transformOrigin: "center center",
            willChange: "transform, opacity, filter"
          }}
        >
          <IconCloud images={images} />
        </div>
      </div>
    </div>
  );
}
