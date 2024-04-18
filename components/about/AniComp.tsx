"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import MottoComp from "./MottoComp";
import VisionComp from "./VisionComp";
import MissionComp from "./MottoComp";
import WhoWeAre from "./WhoWeAre";

const AniComp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div className="w-full flex flex-col">
      <WhoWeAre />

      <MottoComp />

      <VisionComp />

      <MissionComp />
    </div>
  );
};

export default AniComp;
