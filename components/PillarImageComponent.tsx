"use client";

import Image from "next/image";
import React from "react";
import PillarReverseImageComp from "./PillarReverseImageComponent";
import PillarImageComp from "./PillarImageComp";

import Health from "./pillar/Health";
import Education from "./pillar/Education";
import Social from "./pillar/Social";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const PillarImageComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={mainControls}
      className="w-full mx-auto max-w-screen-xxl overflow-x-hidden"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <Health />

        <Education />

        <Social />

      </div>
    </motion.div>
  );
};

export default PillarImageComponent;

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
const leftVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const rightVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
