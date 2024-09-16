import { cn } from "@/lib/utils";

import { useState, useRef,useCallback,useEffect } from "react";
export default function RetroGrid({ className, angle = 65 }) {
  const [Angle, setAngle] = useState(angle);
  const scrollHeight = 1;
  const boxRef = useRef(null);
  const backgRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (boxRef.current) {
      const scrollTop = window.scrollY;
      const maxScroll = scrollHeight * window.innerHeight;
      const scrollFraction = Math.min(scrollTop / maxScroll, 1);
      const newAngle = angle * (1 - scrollFraction);
      const newOpacity = 0.5*(1+scrollFraction);
      setAngle(newAngle);
      console.log(newAngle);
      if(scrollFraction<1){
        boxRef.current.style.transform = `translateY(${scrollFraction*100 }%)`;
        boxRef.current.style.opacity = `${newOpacity}`;
       
      }
      if(scrollFraction>=0.8){
        
      }
        // miniBoxRef.current.style.transform = `rotateX(${newAngle}deg)`;
      
    }
  }, [scrollHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHeight, handleScroll]);

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
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
            // Light Styles
            "[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]",
            // Dark styles
            "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]"
          )}
        />
      </div>
      {/* Background Gradient */}
      <div ref={backgRef} className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  );
}
