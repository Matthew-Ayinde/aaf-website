"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import React from "react";
import Image from "next/image";
import SubscribeComp from "./shared/SubscribeComp";
import PillarImageComponent from "./PillarImageComponent";

const PillarComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div ref={ref}
    variants={containerVariants}
    initial="hidden"
    animate={mainControls} className="w-full mx-auto max-w-screen-xxl">
      <section className="w-full h-screen bg-custom-gradient-bg">
        <div className="w-full h-full bg-[url('/pillar/aaf-pillars-bg.png')] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center px-6">
          <motion.div variants={bottomVariants} className="w-full lg:w-[807px] flex flex-col items-center gap-14">
            <h1 className="text-white text-2xl lg:text-[64px] font-bold">
              AAF Pillars
            </h1>
            <p className="text-xs lg:text-lg leading-[22.4px] lg:leading-[28.8px] text-custom-tertiary-text text-center">
              With a focus on quality delivery, we are driving meaningful change
              by harnessing the power of dignity and service to transform lives
              and create a more inclusive and equitable society.
            </p>
          </motion.div>
        </div>
      </section>

      <PillarImageComponent />

      <div className="w-full py-[100px]">
        <SubscribeComp />
      </div>
    </motion.div>
  );
};

export default PillarComponent;

const containerVariants = {
  hidden: {
    // opacity: 0,
    y: 0,
  },

  visible: {
    // opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const bottomVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};