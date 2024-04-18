"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Social = () => {
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
            src="/pillar/social-enterprise-mobile.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>
      <div className="lg:block hidden w-full">
        <div className="w-full h-[909px] relative">
          <Image
            src="/pillar/social-enterprise-bg.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>

      <div className="w-full flex flex-col-reverse lg:flex-row  justify-center items-center gap-8 px-6 lg:px-[100px] absolute inset-0">
        <motion.div variants={leftVariants} className="w-full lg:w-2/5">
          <div className="w-full lg:w-[479px] flex flex-col gap-4 ">
            <h1 className="font-bold text-[32px] lg:text-5xl mt-8 lg:mb-6 text-black">
              Social Enterprise
            </h1>
            <p className="text-xl font-medium text-custom-primary-text my-4">
              Social Impact
            </p>
            <p className="font-light text-[16px] text-custom-pillar-gray mb-6">
              By visiting various markets and providing traders with immediate
              access to healthcare with our team of doctors on the ground to
              examine and solve basic health-related issues.
            </p>
          </div>
        </motion.div>

        <motion.div variants={rightVariants} className="w-full lg:w-3/5">
          {/* <PillarReverseImageComp
                img1={"/frame104.png"}
                img3={"/about/dream.svg"}
              /> */}
          <div className="w-full h-[360px] lg:h-[640px] relative">
            <Image
              src={"/pillar/AAFPillars-SocialEnterprise.png"}
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
export default Social;

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
