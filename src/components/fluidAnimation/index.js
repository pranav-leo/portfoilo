"use client";
import React from "react";

import FluidAnimation from "./components/react-fluid-animation";
const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.9,
  velocityDissipation: 0.94,
  pressureDissipation: 0.38,
  pressureIterations: 28,
  curl: 30,
  splatRadius: 0.015,
};

const FAnimation = ({children}) => {
  return (
    <div className="w-full h-[100vh]  text-[#FFF] ">
      <FluidAnimation config={defaultConfig} />
      
    </div>
  );
};

export default FAnimation;