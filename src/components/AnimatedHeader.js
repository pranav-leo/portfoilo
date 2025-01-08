import { useEffect } from "react";

const AnimatedHeader = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");

    // Add TweenLite
    script1.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Add EasePack
    script2.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Add demo.js
    script3.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js";
    script3.async = true;
    document.body.appendChild(script3);

    return () => {
      // Clean up scripts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  return (
    <div className=" w-full b z-10">
        <div className=" w-full h-full ">
            <div className=" mx-auto px-6 md:px-12 py-16">
            <div className="w-full flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl md:text-4xl text-white font-bold leading-tight mb-4">
                Welcome to <span className="text-blue-500">My Website</span>
                </h1>
                <p className="text-white text-lg md:text-2xl mb-8">
                I'm a web developer and I'm here to help you create your website.
                </p>
                <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                Get Started
                </a>
            </div>
            </div>
        </div>
    </div>
  );
};

export default AnimatedHeader;
