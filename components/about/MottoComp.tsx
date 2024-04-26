"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const MottoComp = () => {
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
      className="w-full mx-auto bg-custom-motto-gray lg:py-[144px] py-[100px] lg:px-[100px] px-6"
    >
      <div className="w-full lg:flex lg:flex-col-reverse">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <motion.div variants={leftVariants} className="w-full lg:w-3/5">
            {/* <ImageComp
                img1={"/about/motto1.png"}
                img2={"/about/motto2.png"}
                img3={"/about/motto3.png"}
              /> */}
            <div className="w-full h-[360px] lg:h-[640px] relative">
              <Image
                src={"/about/Motto.png"}
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
            <div className="w-full lg:w-[479px] flex flex-col gap-4">
              <h1 className="font-bold text-[32px] lg:text-5xl text-custom-secondary-text">
                Our Motto
              </h1>
              <p className="text-lg leading-[26px] lg:leading-[29px] font-medium text-custom-secondary-text">
                Dignity and Service
              </p>
              <p className="text-base lg:text-lg text-custom-primary-text leading-[26px] lg:leading-[29px]">
                We uphold dignity by treating every individual with respect,
                regardless of background, or status by striving for excellence
                in all endeavors, and ensuring that every act of service holds
                the highest standards of quality and integrity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default MottoComp;

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
