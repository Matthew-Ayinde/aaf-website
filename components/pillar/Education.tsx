"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Education = () => {
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
            src="/pillar/education-mobile.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>
      <div className="lg:block hidden w-full">
        <div className="w-full h-[909px] relative">
          <Image
            src="/pillar/education-bg.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row  justify-center items-center gap-8 px-6 lg:px-[100px] absolute inset-0 pt-14">
        <motion.div variants={leftVariants} className="w-full lg:w-3/5">
          {/* <PillarImageComp
                img1={"/Frame 100.png"}
                img3={"/Frame 1111.png"}
              /> */}
          <div className="w-full h-[360px] lg:h-[640px] relative">
            <Image
              src={"/pillar/AAFPillars-Education.png"}
              alt=""
              fill
              className="w-auto object-contain absolute"
            />
          </div>
        </motion.div>
        <motion.div
          variants={rightVariants}
          className="w-full lg:w-2/5 flex justify-end"
        >
          <div className="w-full lg:w-[480px] flex flex-col gap-4 ">
            <h1 className="font-bold text-[32px] lg:text-5xl mt-8 mb-4 lg:mt-7 lg:mb-6 text-black">
              Education
            </h1>
            <p className="text-lg lg:text-xl font-medium text-custom-primary-text">
              Graduate Enhancement Programme (GEP)
            </p>
            <p className="font-light text-[16px] text-custom-pillar-gray lg:mb-6 mb-36">
              We want to equip graduates with essential skills and cultivate
              leadership qualities and entrepreneurial mindset among them, by
              empowering them to drive innovation and make a positive impact in
              their respective fields through tailored training and workshops to
              enhance employability.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;

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
