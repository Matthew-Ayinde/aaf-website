"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Content = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
    }, [isInView, mainControls]);

    return(
        <motion.div ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
        className="w-full mx-auto relative">
            <div className="block lg:hidden w-full">
            <div className="w-full h-[927px] relative">
              <Image
                src="/volunteer/awaiting-content-mobile.png"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[1000px] relative">
              <Image
                src="/volunteer/awaiting-content-bg.png"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>

          <div
            className="w-full flex flex-col-reverse justify-center items-center lg:px-[100px] px-6 lg:flex-row lg:gap-10 gap-8 absolute inset-0"
          >
            <div className="w-full lg:w-2/5">
              <motion.div
                variants={leftVariants}
                className="w-full lg:w-[500px] flex flex-col gap-10 justify-center "
              >
                <h1 className="font-bold lg:text-[40px] text-2xl text-custom-dark-blue leading-[30px] lg:leading-[55px]">
                  Awaiting Content for Partner with us Page
                </h1>
                <p className="font-normal lg:text-base text-sm text-custom-input-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse sem felis, molestie in pulvinar a, interdum sed
                  arcu.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse sem felis, molestie in pulvinar a, interdum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse sem felis, molestie in pulvinar a, interdum sed
                  arcu.
                </p>
              </motion.div>
            </div>

            <div className="w-full lg:w-3/5 flex justify-end">
              {/* <ImageComp img1={img1} img2={img2} img3={img3} /> */}
              <motion.div
                variants={rightVariants}
                className="w-full h-[360px] lg:h-[640px] relative"
              >
                <Image
                  src={"/volunteer/GetInvolved-Volunteer.png"}
                  alt=""
                  fill
                  className="w-auto object-contain absolute"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
    )
}

export default Content;

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