import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    const stickySections = [...document.querySelectorAll(".sticky_wrap")];

    const handleScroll = () => {
      stickySections.forEach((section) => {
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector(".horizontal_scroll");
        let percentage =
          ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;
        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full" >
      {/* First Section */}
      <section className="h-screen flex items-center justify-center">
        
      </section>

      {/* Horizontal Scroll Section */}
      <div className="scroll_container h-[400vh] relative">
        <div className="sticky_wrap sticky top-0 h-screen overflow-hidden">
          {/* Hello Text as Sticky */}
          {/* <div className="absolute top-20 left-20 z-10">
            <h2 className="text-4xl text-white">Hello</h2>
          </div> */}

          {/* Horizontal Scroll Content */}
          <div className="horizontal_scroll flex justify-between absolute top-0 w-[400vw] h-full">
            <div className="scroll_contents h-[50vh] red bg-red-600 w-screen">
              <div className=" z-10">
                <h2 className="text-4xl text-white">Hello</h2>
              </div>
            </div>
            <div className="scroll_contents h-[50vh] yellow bg-yellow-500 w-screen">
              <div className=" z-10">
                <h2 className="text-4xl text-white">Hello</h2>
              </div>
            </div>
            <div className="scroll_contents h-[50vh] green bg-green-500 w-screen"></div>
            <div className="scroll_contents blue flex items-end justify-end bg-blue-500 w-screen">
              <h2 className="right text-4xl text-white mr-20 mb-20">Goodbye</h2>
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
