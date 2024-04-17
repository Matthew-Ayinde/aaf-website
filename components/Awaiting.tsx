"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ImageComp from "./shared/ImageComp";
import Image from "next/image";

const Awaiting = () => {
  const img1 = "/home/awaiting1.png";
  const img2 = "/home/awaiting2.png";
  const img3 = "/home/awaiting3.png";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div ref={ref} variants={containerVariants}
    initial="hidden"
    animate={mainControls} className="w-full mx-auto bg-custom-dark-bg lg:px-20 px-6 lg:py-[120px] py-[100px]">
      <div className="lg:flex lg:flex-col-reverse">
        <motion.div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          <motion.div variants={leftVariants} className="w-full lg:w-3/5">
            {/* <ImageComp img1={img1} img2={img2} img3={img3} /> */}
            <div className="w-full h-[360px] lg:h-[640px] relative">
              <Image src={"/home/AwaitingContent.png"} alt="" fill className="w-auto object-contain absolute" />
            </div>
          </motion.div>
          <motion.div variants={rightVariants} className="flex flex-col gap-4 w-full lg:w-2/5">
            <h1 className="font-bold lg:text-5xl text-2xl text-custom-white">
              Awaiting Content
            </h1>
            <p className="font-normal lg:text-lg text-base text-custom-tertiary-text">
              Advancing Lives  - Providing and promoting improved welfare for
              the vulnerable; Improving care, excellence and enterprise in
              communities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Awaiting;

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