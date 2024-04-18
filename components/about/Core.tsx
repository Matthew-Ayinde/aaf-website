"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Core = () => {
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
        <div className="w-full h-[2541px] relative">
          <Image
            src="/about/core-mobile.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>
      <div className="lg:block hidden w-full">
        <div className="w-full h-[1505px] relative">
          <Image
            src="/about/corebg.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-20 px-6 lg:px-[100px] absolute inset-0">
        <h1 className="font-bold text-[32px] lg:text-[64px] text-white">
          Our Core Values
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-20 lg:gap-40">
          {Cores.map((core, index) => (
            <motion.div
              key={index}
              variants={coreVariants}
              className="w-full lg:w-[440px] flex flex-col items-center gap-8"
            >
              <Image
                src={core.icon}
                alt={core.title}
                width={200}
                height={200}
              />
              <div className="flex flex-col items-center gap-4">
                <h1 className="font-bold text-2xl text-custom-white">
                  {core.title}
                </h1>
                <p className="text-sm text-custom-gray leading-[21px] text-center">
                  {core.p}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Core;

const Cores = [
    {
      icon: "/about/rigour.svg",
      title: "Rigour",
      p: "We are committed to thorough research, analysis, and evidence-based decisions which upholds high standards of professionalism, integrity, and accountability in all endeavors.",
    },
    {
      icon: "/about/innovation.svg",
      title: "Innovation",
      p: "We embrace innovation as a driving force for agility and adaptability by empowering the foundation to respond nimbly to evolving needs, and dynamic environments by championing collaborative partnerships and cross-sectoral collaboration to catalyze innovation, leveraging diverse expertise, perspectives, and resources to generate transformative solutions.",
    },
    {
      icon: "/about/dignity.svg",
      title: "Dignity",
      p: "Respecting the rights, and dignity of all individuals, communities, and stakeholders by promoting equity, diversity, and inclusion in all aspects of the foundation's work and ensuring that programs and initiatives prioritize the empowerment, autonomy, and well-being of those served.",
    },
    {
      icon: "/about/excellence.svg",
      title: "Excellence",
      p: "Pursuing excellence in all aspects of the foundation's operations, programs, and initiatives by demonstrating a relentless commitment to achieving sustainable impact that is aligned with the foundation's mission and vision.",
    },
  ];

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
      staggerChildren: 0.2,
    },
  },
};

const coreVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      type: "spring",
      damping: 17,
      mass: 2,
    },
  },
};
