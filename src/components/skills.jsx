// import IconCloud from "@/components/magicui/icon-cloud";
import {
  LogosDjangoIcon,
  LogosReact,
  LogosNodejs,
  LogosTypescript,
  LogosVitejs,
  LogosBun,
  LogosStrapi,
  LogosMongodb,
  LogosPostgresql,
  LogosSupabase,
  LogosGoogleCloud,
  LogosAwsEc2,
  LogosAwsRds,
  LogosRedis,
  LogosDocker,
  LogosMicrosoftAzure,
} from "./icons";

import DisplayLottie from "./displayLottie";
import { forwardRef } from "react";
import { useEffect } from "react";

function FSContainer({ title, icons }) {

  

  return (
    <div className="flex flex-wrap justify-center h-full min-w-[100vw] items-start  gap-2">
      <div className="flex w-[40vw] items-center flex-col h-full gap-8 pt-24  ">
        <h4 className="text-white text-4xl mb-4">{title}</h4>
        <div className="w-[80%] flex flex-wrap justify-center flex-wrap gap-5 ">
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-green-400/60">
            <LogosDjangoIcon className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-[#00d8ff]/60">
            <LogosReact className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-[#bd34fe]/60">
            <LogosVitejs className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-[#ccbea7]/60">
            <LogosBun className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-blue-400/60">
            <LogosTypescript className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-[#539e43]/60">
            <LogosNodejs className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-[#9593ff]/60">
            <LogosStrapi className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-green-300/60">
            <LogosSupabase className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-blue-600/60">
            <LogosPostgresql className="w-8 h-8" />
          </div>

          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-green-400/50">
            <LogosMongodb className="w-8 h-8" />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start text-[#f2f2f2] gap-5 text-medium text-xl ">
          <p>Building resposive website front end using React and Next</p>

          <p>Developing mobile applications using React Native</p>

          <p>Creating application backend in Node, Bun, Django & Strapi</p>

          <p>Managing Devops using Docker & Github Actions.</p>
        </div>
      </div>
      <DisplayLottie
        animationPath="/lottie/fullstack.json"
        icons={["react", "nodejs", "mongodb", "postgresql"]}
      />
    </div>
  );
}

function CloudeContainer({ title, icons }) {
  return (
    <div className="flex flex-wrap justify-center h-full min-w-[100vw] items-start  gap-2">
      <div className="flex w-[40vw] items-center flex-col h-full  pt-24  ">
        <h4 className="text-white text-4xl mb-4">{title}</h4>
        <div className="w-[80%] flex flex-wrap justify-center flex-wrap gap-5 ">
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-[#fbbc05]/60">
            <LogosGoogleCloud className="w-8 h-8" />
          </div>

          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-[#bd34fe]/60">
            <LogosAwsRds className="w-8 h-8" />
          </div>

          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-blue-400/60">
            <LogosMicrosoftAzure className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-blue-600/90">
            <LogosDocker className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-red-400/60">
            <LogosRedis className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-[#fbbc05]/60">
            <LogosAwsEc2 className="w-8 h-8" />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center text-[#F2F2F2] gap-5 text-medium text-xl ">
          <p>Building resposive website front end using React and Next</p>

          <p>Developing mobile applications using React Native</p>

          <p>Creating application backend in Node, Bun, Django & Strapi</p>

          <p>Managing Devops using Docker & Github Actions.</p>
        </div>
      </div>
      <DisplayLottie
        animationPath="/lottie/coding.json"
        icons={["react", "nodejs", "mongodb", "postgresql"]}
      />
    </div>
  );
}

export default function Skills() {
  useEffect(() => {
    const stickySections = [...document.querySelectorAll(".sticky_wrap")];

    const handleScroll = () => {
      stickySections.forEach((section) => {
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector(".horizontal_scroll");
        let percentage =
          ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage;
        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full" >
      {/* First Section */}
      <section className=" flex items-center justify-center">
      <h3 className=" text-white text-semibold text-5xl ">
       
          what do I do ?
        </h3>
      </section>

      {/* Horizontal Scroll Section */}
      <div className="scroll_container h-[400vh] relative">

        <div className="sticky_wrap sticky top-0 h-screen overflow-hidden">
          {/* Hello Text as Sticky */}
          {/* <div className="absolute top-20 left-20 z-10">
            <h2 className="text-4xl text-white">Hello</h2>
          </div> */}

          {/* Horizontal Scroll Content */}
          <div className="horizontal_scroll flex justify-between absolute top-0 w-[200vw] h-full">
            <div className="scroll_contents h-[100vh] py-10  w-screen">
              <FSContainer title="Full Stack Development" />
            </div>
            <div className="scroll_contents h-[50vh]  w-screen">
              <CloudeContainer title="Cloud Engineering" />
              
            </div>
            <div className="scroll_contents h-[50vh]  w-screen">
              <CloudeContainer title="Cloud Engineering" />
              
            </div>
            
          </div>
        </div>
      </div>

      {/* Final Section */}
      <section className="h-screen flex items-center justify-center">
       
      </section>
    </main>
  );
}

