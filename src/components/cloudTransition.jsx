import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

// White Cloud Component
const WhiteCloud = ({ className }) => (
  <div className={`relative w-full h-full ${className}`}>
    <div className="absolute inset-0 bg-white rounded-full opacity-95 blur-2xl shadow-2xl"></div>
    <div className="absolute inset-0 bg-white rounded-full opacity-100 blur-xl"></div>
    <div className="absolute left-[10%] top-[-20%] w-[40%] h-[70%] bg-white rounded-full opacity-90 blur-xl"></div>
    <div className="absolute right-[15%] top-[-15%] w-[35%] h-[65%] bg-white rounded-full opacity-85 blur-lg"></div>
    <div className="absolute left-[25%] bottom-[-10%] w-[30%] h-[50%] bg-white rounded-full opacity-80 blur-lg"></div>
    <div className="absolute right-[20%] bottom-[-15%] w-[35%] h-[55%] bg-white rounded-full opacity-75 blur-md"></div>
  </div>
);

export default function CloudTransition({ containerRef: externalContainerRef }) {
  const internalContainerRef = useRef(null);
  // Use external container ref if provided, otherwise use internal one
  const scrollTargetRef = externalContainerRef || internalContainerRef;

  // Mouse position for the reveal effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Scroll progress - track the container's visibility
  // Account for padding space above and below section
  // Start animation when section starts entering (with space for clouds to come in)
  // End animation when section is about to exit (with space for clouds to go out)
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start end", "end start"]
  });

  // Physics-based smooth scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animation Phases - synchronized with section visibility
  // 0 - 0.15: Fast entry (Clouds come together quickly as section enters)
  // 0.15 - 0.85: Stay (Clouds hover/jitter while section is visible)
  // 0.85 - 1.0: Fast exit (Clouds drift apart quickly as section exits)

  // Left Cloud Transforms
  const leftX = useTransform(smoothProgress,
    [0, 0.15, 0.85, 1],
    ["-100%", "-10%", "-10%", "-100%"]
  );

  // Right Cloud Transforms
  const rightX = useTransform(smoothProgress,
    [0, 0.15, 0.85, 1],
    ["100%", "10%", "10%", "100%"]
  );

  // Scale: Start small, grow to cover, then shrink slightly on exit
  const scale = useTransform(smoothProgress,
    [0, 0.15, 0.85, 1],
    [0.5, 1.5, 1.5, 0.8]
  );

  // Opacity: Fade in quickly as section enters, stay, then fade out quickly as section exits
  const opacity = useTransform(smoothProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  // Random floating movement (Jitter)
  const floatTransition = {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  };

  // Mask for cursor reveal effect
  // We use a radial gradient that is transparent at the mouse position and black elsewhere
  // The mask-image property uses this to hide the cloud where the mouse is
  const maskImage = useMotionTemplate`radial-gradient(circle 150px at ${mouseX}px ${mouseY}px, transparent 0%, black 100%)`;

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={externalContainerRef ? undefined : internalContainerRef}
      className="w-full h-full relative"
    >
      <div className="sticky top-0 w-screen h-screen overflow-visible pointer-events-none">
        {/* Container for clouds with mask effect */}
        {/* pointer-events-auto is needed on this layer if we want to block clicks, 
            but for just visual reveal we keep it transparent to clicks or handle as needed.
            Here we want the reveal to happen, so we apply the mask to this container. */}
        <motion.div
          className="w-full h-full relative flex items-center justify-center"
          style={{
            maskImage: maskImage,
            WebkitMaskImage: maskImage, // Webkit prefix for compatibility
            opacity
          }}
        >
          {/* Left Cloud */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-[60vw] h-[60vw]"
            style={{ x: leftX, scale, y: "-50%", translateX: "-50%" }}
          >
            <motion.div
              className="w-full h-full"
              animate={{
                x: ["0%", "2%", "0%"],
                y: ["0%", "-2%", "0%"],
                rotate: [0, -2, 0]
              }}
              transition={floatTransition}
            >
              <WhiteCloud />
            </motion.div>
          </motion.div>

          {/* Right Cloud */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-[60vw] h-[60vw]"
            style={{ x: rightX, scale, y: "-50%", translateX: "-50%" }}
          >
            <motion.div
              className="w-full h-full"
              animate={{
                x: ["0%", "-2%", "0%"],
                y: ["0%", "2%", "0%"],
                rotate: [0, 2, 0]
              }}
              transition={{ ...floatTransition, delay: 1.5 }}
            >
              <WhiteCloud />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

