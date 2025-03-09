import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GlareCard } from "../ui/glare-card";
import Image from "next/image";
const BentoGrid = ({
  children,
  className
}) => {
  return (
    (<div
      className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}>
      {children}
    </div>)
  );
};

const BentoCard = ({
  name,
  className,
  background="/cell.png",
  Icon=<></>,
  description,
  href,
  cta
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      // "bg-[#FFFFFFB8] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] p2 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}>
   
    {/* <div>{background}</div> */}
    <div
      className=" bg-black/60 z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 h-full min-h-[9vw] group-hover:-translate-y-10">
      
      <Image src={`${background}`} layout="fill"  objectFit="scale-down" />
    </div>

 
    {/* <div
      className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" /> */}
  </div>
);

export { BentoCard, BentoGrid };
