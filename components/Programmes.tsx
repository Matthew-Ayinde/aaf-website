"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { title } from "process";
import Image from "next/image";

const Programmes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      className="w-full mx-auto items-center justify-center relative pt-[180px]"
    >
      <div className="block lg:hidden w-full">
        <div className="w-full h-[3275px] relative">
          <Image
            src="/home/helped-mobile.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>
      <div className="lg:block hidden w-full">
        <div className="w-full h-[1700px] relative">
          <Image
            src="/home/helped.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
        className="w-full flex flex-col justify-center items-center absolute inset-0 lg:px-24 px-6"
      >
        <motion.div
          variants={topVariants}
          className="flex flex-col items-center justify-center gap-4 w-full lg:w-[808px]"
        >
          {/* <h6 className="text-custom-main-color">Our Programmes</h6> */}
          <h1 className="lg:font-semibold font-bold lg:text-[40px] text-2xl text-custom-secondary-text lg:mx-16 mx-0 text-center lg:leading-[56px] leading-[33.6px]">
            The signature initiatives of the AAF aligns with its foundation
            pillars of Health, Education and Social Enterprise.
          </h1>
        </motion.div>
        <div className="grid lg:grid-cols-2 grid-col-1 gap-x-20 lg:gap-y-[70px] gap-y-10 mt-[68px]">
          {cardDetails.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-[600px] lg:h-[660px] lg:w-[560px] w-[328px] flex rounded-xl border "
            >
              <div className="flex flex-col gap-4 lg:gap-5 w-full  ">
                <div className="relative w-full h-[360px] ">
                  <Image
                    src={card.imageSrc}
                    alt=""
                    fill
                    className="absolute object-cover rounded-t-xl"
                  />
                </div>
                <div className="lg:w-[520px] w-[304px] h-[255px] lg:mx-5 mx-3 my-6 flex flex-col gap-5 lg:px-[10px] px-0 ">
                  <h1 className="text-xl lg:text-2xl font-bold text-custom-secondary-text lg:w-[421px] w-[304px] lg:leading-[33.6px] leading-[28px]">
                    {card.title}
                  </h1>
                  <p className="text-custom-primary-text lg:text-base text-sm leading-[22.4px] font-normal lg:leading-[25.6px]">
                    {card.paragraph}
                  </p>

                  <Link
                    className="text-custom-main-color w-full underline underline-offset-8 lg:text-base text-sm"
                    href={""}
                  >
                    Partner with us - Request a proposal
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const cardDetails = [
  {
    imageSrc: "/newImg1.png",
    title: "Maternal and Neonatal Health Support Programme (MNHSP)",
    paragraph:
      "By providing easy access to healthcare, we aim to implement initiatives that significantly decrease maternal mortality rates, improve access to prenatal healthcare, and enhance Neonatal Care through our support programmes.",
  },
  {
    imageSrc: "/newImg2.png",
    title: "Sustainable WASH Improvement (SWASHIM)",
    paragraph:
      "We aim to provide and ensure access to clean water, sanitation, and hygiene facilities, by promoting and educating communities on hygiene practices through WASH interventions, which would foster behavioral change and sustainable hygiene habits.",
  },
  {
    imageSrc: "/newImg3.png",
    title: "Graduate Training and Enhancement Programme (GTEP)",
    paragraph:
      "We want to equip graduates with essential skills and cultivate leadership qualities and entrepreneurial mindset among them, by empowering them to drive innovation and make a positive impact in their respective fields through tailored training and workshops to enhance employability.",
  },
  {
    imageSrc: "/newImg4.png",
    title: "The AAF Grant",
    paragraph:
      "We provide cash grants to entrepreneurs with the aim of enabling them to advance their business",
  },
];

export default Programmes;

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

const topVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      //   delay: 0.2,
      duration: 0.5,
      type: "spring",
      damping: 17,
      mass: 2,
    },
  },
};

const cardVariants = {
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
