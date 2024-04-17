"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const HomePagePillars = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const [imageDimensions, setImageDimensions] = useState({
    width: 520,
    height: 164,
  });

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 640;
    setImageDimensions({
      width: isMobile ? 328 : 520,
      height: isMobile ? 104 : 164,
    });
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={mainControls}
      className="w-full mx-auto bg-custom-primary-bg lg:py-[144px] py-[100px] lg:px-[100px] px-6"
    >
      <div className="w-full lg:flex lg:flex-col-reverse ">
        <motion.div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <motion.div variants={leftVariants} className="w-full lg:w-1/2">
            <div className="w-full lg:h-[640px] h-[360px]">
              <div className="relative w-full h-full">
                <Image
                  src={"/home/pillar.png"}
                  fill
                  className="object-contain absolute w-auto"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={rightVariants}
            className="lg:w-1/2 lg:h-[569px] w-full flex justify-end"
          >
            <div className="w-full lg:w-[520px] flex flex-col gap-12">
              <div className="w-full flex flex-col gap-6">
                <h6 className="font-medium text-lg text-white">Our Pillars</h6>
                <h1 className="font-bold lg:text-5xl text-2xl text-black">
                  AAF Pilllars
                </h1>
                <p className="font-normal text-base text-custom-primary-text text-wrap">
                  With a focus on quality delivery, we are driving meaningful
                  change by harnessing the power of dignity and service to
                  transform lives and create a more inclusive and equitable
                  society.
                </p>
                <ul className="flex flex-col gap-2 text-custom-primary-text ">
                  <li className="flex gap-4 items-center">
                    <Image
                      src={"/checkBox.svg"}
                      width={40}
                      height={40}
                      alt=""
                    />
                    Health
                  </li>
                  <li className="flex gap-4 items-center">
                    <Image
                      src={"/checkBox.svg"}
                      width={40}
                      height={40}
                      alt=""
                    />
                    Education
                  </li>
                  <li className="flex gap-4 items-center">
                    <Image
                      src={"/checkBox.svg"}
                      width={40}
                      height={40}
                      alt=""
                    />
                    Social Enterprise
                  </li>
                </ul>
              </div>
              <div className="lg:w-[520px] lg:h-[164px] relative w-full h-[104px]">
                <Image
                  src={"/home/AAF-Pillar-Stat.png"}
                  alt=""
                  fill
                  className="absolute object-contain rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePagePillars;

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 0,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const leftVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const rightVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
