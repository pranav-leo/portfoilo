import { cn } from "@/lib/utils";
import { useState, useRef, useCallback, useEffect } from "react";
import { interpolateColor } from "@/lib/math_utils";
export default function RetroGrid({ className, angle = 65 }) {
  const [Angle, setAngle] = useState(angle);
  const scrollHeight = 1; // 1 means the whole window height is the scrollable range
  const boxRef = useRef(null);
  const backgRef = useRef(null);
  const gridRef = useRef(null); // For toggling grid color

  // Function to interpolate color for background from white to black
  

  const handleScroll = useCallback(() => {
    if (boxRef.current && backgRef.current && gridRef.current) {
      const scrollTop = window.scrollY;
      const maxScroll = scrollHeight * window.innerHeight;
      const scrollFraction = Math.min(scrollTop / maxScroll, 1);
      const newAngle = angle * (1 - scrollFraction);
      const newOpacity = 0.5 * (1 + scrollFraction);
      setAngle(newAngle);

      // Update the position and opacity of the grid
      boxRef.current.style.transform = `translateY(${scrollFraction * 100}%)`;
      boxRef.current.style.opacity = `${newOpacity}`;

      // When the scrollFraction is between 0.8 and 1, change the background color and grid lines
      if (scrollFraction >= 0.6) {
        const colorFraction = (scrollFraction - 0.6) / 0.2; // Normalize fraction between 0.8 and 1
        const newColor = interpolateColor(colorFraction);

        // Change the background color to black progressively
        backgRef.current.style.backgroundColor = newColor;

        // Toggle grid line colors
        // gridRef.current.style.backgroundImage = 
        //   "linear-gradient(to right, rgba(255, 255, 255, 1) 1px, transparent 0), linear-gradient(to bottom, rgba(255, 255, 255, 1) 1px, transparent 0)";

        // Remove gradient to make background solid
        backgRef.current.classList.remove("bg-gradient-to-t");
        gridRef.current.classList.add("dark");
      } else {
        // Restore gradient and reset background color
        backgRef.current.style.backgroundColor = "";
        backgRef.current.classList.add("bg-gradient-to-t");
        gridRef.current.classList.remove("dark");

        // Restore grid line color
        // gridRef.current.style.backgroundImage = 
        //   "linear-gradient(to right, rgba(0, 0, 0, 0.3) 1px, transparent 0), linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 1px, transparent 0)";
      }
    }
  }, [scrollHeight, angle]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]",
        className
      )}
      ref={boxRef}
      style={{
        "--grid-angle": `${Angle}deg`,
      }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 z-[14] [transform:rotateX(var(--grid-angle))]"
        ref={gridRef}
      >
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
            // Initial Light Styles (before scroll 80%)
            "[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]",
            // Dark styles for after 80% scroll
            "dark:[background-image:linear-gradient(to_right,rgba(25,255,25,0.8)_2px,transparent_0),linear-gradient(to_bottom,rgba(25,255,25,0.8)_2px,transparent_0)]"
          )}
        />
      </div>

      {/* Background Gradient */}
      <div
        ref={backgRef}
        className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black"
      />
    </div>
  );
}
