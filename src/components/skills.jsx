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
  LogosAws,
  LogosS3Icon,
  LogosPyTorch,
  LogosTensorflow,
  LogosCVIcon,
  LogosNumPyIcon,
  LogosHuggingFaceIcon,

} from "./icons";

import DisplayLottie from "./displayLottie";
import { forwardRef } from "react";
import { useEffect } from "react";

function FSContainer({ title, icons }) {



  return (
    <div className="flex flex-wrap justify-center h-full min-w-[100vw] items-center gap-2">
      <div className="flex w-[40vw] justify-center flex-col h-full gap-8 pt-24   ">
        <h4 className="text-white text-4xl -mt-32 mb-4">{title}</h4>
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

        </div>
      </div>
      <div className="flex w-[40vw]  h-full items-start  " >
        <DisplayLottie
          animationPath="/lottie/fullstack.json"
          icons={["react", "nodejs", "mongodb", "postgresql"]}
        />
      </div>
    </div>
  );
}
{/* */ }

function CloudeContainer({ title, icons }) {



  return (
    <div className="flex flex-wrap justify-center h-full min-w-[100vw] items-center gap-2">
      <div className="flex w-[40vw] justify-center flex-col h-full gap-8 pt-24   ">
        <h4 className="text-white text-4xl -mt-32 mb-4">{title}</h4>
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
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-[#ffffff]/60">
            <LogosAws className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-green-500/50">
            <LogosS3Icon className="w-8 h-8" />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start text-[#f2f2f2] gap-5 text-medium text-xl ">


          <p>Automating Devops pipline using Docker & Github Actions.</p>
          <p>Improved storage usage and reduce costing using S3 and CDN .</p>
          <p>Processing Multile task parllely using RDS and redis .</p>

        </div>
      </div>
      <div className="flex w-[40vw]  h-full items-start  " >
        <DisplayLottie
          animationPath="/lottie/cloude.json"
          icons={["react", "nodejs", "mongodb", "postgresql"]}
        />
      </div>
    </div>
  );
}


function MLContainer({ title, icons }) {
  return (
    <div className="flex flex-wrap justify-center h-full min-w-[100vw] items-center gap-2">
      <div className="flex w-[40vw] justify-center flex-col h-full gap-8 pt-24   ">
        <h4 className="text-white text-4xl -mt-32 mb-4">{title}</h4>
        <div className="w-[80%] flex flex-wrap justify-center flex-wrap gap-5 ">
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-[#fbbc05]/60 ">
            <LogosPyTorch className="w-8 h-8" />
          </div>

          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-[#ffffff]/60">
            <LogosTensorflow className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-green-400/60">
            <LogosCVIcon className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-blue-400/60">
            <LogosNumPyIcon className="w-8 h-8" />
          </div>
          <div className="flex justify-center items-center bg-transparent border-0.5 border-gray-00 rounded-full w-[4rem] h-[4rem] shadow-lg shadow-yellow-400/60">
            <LogosHuggingFaceIcon className="w-8 h-8" />
          </div>

        </div>
        <div className="mt-12 flex flex-col items-start text-[#f2f2f2] gap-5 text-medium text-xl ">
          <p>Imporoving lifes using Computer vision</p>

          <p>Integrated low level ml models on eadge devices</p>

          <p>Using computer vision along with NLP to catch Dark Patterns </p>

          <p>Protecting Ml models against Malicious use .</p>
        </div>
      </div>
      <div className="flex w-[40vw]  h-full items-start  " >
        <DisplayLottie
          animationPath="/lottie/coding.json"
          icons={["react", "nodejs", "mongodb", "postgresql"]}
        />
      </div>
    </div>
  );
}


export default function Skills() {
  useEffect(() => {
    const stickySections = [...document.querySelectorAll(".sticky_wrap")];

    const handleScroll = () => {
      stickySections.forEach((section) => {
        const rect = section.parentElement.getBoundingClientRect();
        const scrollSection = section.querySelector(".horizontal_scroll");

        // Calculate percentage based on how far the parent element has scrolled into view
        // We start animating when the top of the parent hits the top of the viewport (rect.top <= 0)
        // and end when the bottom of the parent hits the bottom of the viewport (or similar logic)

        if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
          let percentage = Math.abs(rect.top) / (rect.height - window.innerHeight) * 200;
          percentage = Math.max(0, Math.min(percentage, 200));
          scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
        } else if (rect.top > 0) {
          scrollSection.style.transform = `translate3d(0, 0, 0)`;
        } else if (rect.bottom < window.innerHeight) {
          scrollSection.style.transform = `translate3d(-200vw, 0, 0)`;
        }
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
      <div className="scroll_container h-[320vh] relative">

        <div className="sticky_wrap sticky top-0 h-screen overflow-hidden">
          {/* Hello Text as Sticky */}
          {/* <div className="absolute top-20 left-20 z-10">
            <h2 className="text-4xl text-white">Hello</h2>
          </div> */}

          {/* Horizontal Scroll Content */}
          <div className="horizontal_scroll flex justify-between absolute top-0 w-[300vw] h-full">
            <div className="scroll_contents h-[100vh] py-10  w-screen">
              <FSContainer title="Full Stack Development" />
            </div>
            <div className="scroll_contents h-[100vh]  w-screen">
              <CloudeContainer title="Cloud Engineering" />

            </div>
            <div className="scroll_contents h-[100vh]  w-screen">
              <MLContainer title="AI/ML Engineering" />

            </div>


          </div>
        </div>
      </div>

      {/* Final Section */}
      <section className=" flex items-center justify-center">

      </section>
    </main>
  );
}


