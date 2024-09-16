import { useRef } from "react";
import { Inter } from "next/font/google";
import RetroGrid from "@/components/magicui/retro-grid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ref = useRef(null);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  `}
      ref={ref}
     
    > <div className="flex min-h-screen flex-col items-center justify-between pb-12 " >
      <div className="flex flex-col gap-5 justify-center text-center">
        <span class="pointer-events-none mt-16 z-10 whitespace-pre-wrap text-black text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          Pranav Arya
        </span>
        {/* <span className="text-3xl w-[36rem]">
          I am a passionate individual who is always eager to work on products
          that build sustainable and scalable social and technical positive
          impact.
        </span> */}
      </div>
      <div>scroll to know more</div>

      <RetroGrid />
      </div>
      <div className="min-h-screen h-[500vh]" ></div>
      
    </main>
  );
}
