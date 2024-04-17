"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Advancing = () => {
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
        <div className="w-full h-[974px] relative">
          <Image
            src="/home/advancing-mobile.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>
      <div className="lg:block hidden w-full">
        <div className="w-full h-[920px] relative">
          <Image
            src="/home/advancing1.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>

      <div className="lg:flex lg:flex-col-reverse justify-center items-center lg:px-[100px] px-6 absolute inset-0 py-[100px] lg:py-0">
        <motion.div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
          <motion.div variants={leftVariants} className="lg:w-1/2 w-full">
            <div className="w-full lg:w-[520px] flex flex-col justify-center gap-12">
              <div className="w-full flex flex-col justify-center gap-8">
                <h6 className="font-medium lg:text-lg text-base text-custom-main-color">
                  About us
                </h6>
                <h1 className="font-bold lg:text-5xl text-2xl">
                  Advancing Lives
                </h1>
                <p className="lg:font-normal font-light lg:text-base text-sm text-custom-primary-text">
                  The AAF was borne out of a unique personal life experience,
                  hence its cause to philanthropy, and supporting certain
                  initiatives to assist vulnerable people in various
                  underdeveloped communities to live a better life.
                  <br />
                  <br />
                  We are a foundation dedicated to providing and promoting
                  improved welfare for the vulnerable. By Improving care,
                  excellence, and enterprise in communities
                </p>
              </div>
              <Button
                asChild
                className="w-full lg:w-[192px] h-12 lg:h-[52px] shadow-none bg-custom-main-color hover:bg-custom-main-color"
              >
                <Link href={"/about-us"}>About us</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={rightVariants} className="w-full lg:w-1/2">
            <div className="relative w-full lg:h-[640px] h-[360px]">
              <Image
                src={"/home/advancing2.png"}
                fill
                className="object-contain absolute"
                alt=""
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Advancing;

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
      staggerChildren: 0.3,
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
