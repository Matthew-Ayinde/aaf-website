"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const MissionComp = () => {
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
      className="w-full mx-auto relative"
    >
      <div className="block lg:hidden w-full">
        <div className="w-full h-[890px] relative">
          <Image
            src="/about/vision-mobile.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>
      <div className="lg:block hidden w-full">
        <div className="w-full h-[909px] relative">
          <Image
            src="/about/visionbg.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>

      <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center gap-8 px-6 lg:px-20 absolute inset-0">
        <motion.div variants={leftVariants} className="w-full lg:w-2/5 flex">
          <div className="w-full lg:w-[479px] flex flex-col gap-4">
            <h1 className="font-bold text-[32px] lg:text-5xl text-custom-secondary-text">
              Our Vision
            </h1>
            <p className="text-lg leading-[26px] lg:leading-[29px] font-medium text-custom-secondary-text">
              A continent whose people can take advantage of its abundant
              potential and possibilities
            </p>
            <p className="text-base lg:text-lg text-custom-primary-text leading-[26px] lg:leading-[29px]">
              To create an environment where every individual across the
              continent has the opportunity to realize their full potential by
              tapping into Africa&apos;s vast resources, and cultural richness
              to drive innovation, entrepreneurship, and sustainable
              development.
            </p>
          </div>
        </motion.div>
        <motion.div variants={rightVariants} className="w-full lg:w-3/5 flex justify-end">
          {/* <ReverseImageComp
                img1={"/about/vision1.png"}
                img2={"/about/vision2.png"}
                img3={"/about/vision3.png"}
              /> */}
          <div className="w-full h-[360px] lg:h-[640px] relative">
            <Image
              src={"/about/Vision.png"}
              alt=""
              fill
              className="w-auto object-contain absolute"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MissionComp;

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
