"use client";

import Image from "next/image";
import React from "react";
import PillarReverseImageComp from "./PillarReverseImageComponent";
import PillarImageComp from "./PillarImageComp";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const PillarImageComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div className="w-full mx-auto max-w-screen-xxl">
      <div className="w-full flex flex-col justify-center items-center">
        <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[890px] relative">
              <Image
                src="/pillar/health-mobile.png"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[909px] relative">
              <Image
                src="/pillar/health-bg.png"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            ref={ref}
            initial="hidden"
            animate={mainControls}
            className="w-full flex flex-col-reverse lg:flex-row justify-center items-center gap-8 px-6 lg:px-[100px] absolute inset-0"
          >
            <motion.div variants={leftVariants} className="w-full lg:w-2/5">
              <div className="w-full ">
                <div className="w-full lg:w-[435px] flex flex-col gap-4">
                  <p className="lg:text-5xl text-2xl text-black mb-6 font-bold">
                    Health
                  </p>
                  <div className="mb-6">
                    <p className="font-normal lg:text-xl text-[18px] mb-4 text-custom-primary-text">
                      Maternal and Neonatal Health Support Programme (MNHSP)
                    </p>
                    <p className="font-light lg:text-[16px] text-sm text-custom-pillar-gray">
                      By providing easy access to healthcare, we aim to
                      implement initiatives that significantly decrease maternal
                      mortality rates, improve access to prenatal healthcare,
                      and enhance Neonatal Care through our support programmes.
                    </p>
                  </div>
                  <div className="mb-6">
                    <p className="font-normal lg:text-xl text-[18px] mb-4 text-custom-primary-text">
                      Water, Sanitation and Hygiene (WASH)
                    </p>
                    <p className="font-light lg:text-[16px] text-sm text-custom-pillar-gray">
                      We aim to provide and ensure access to clean water,
                      sanitation, and hygiene facilities, by promoting and
                      educating communities on hygiene practices through WASH
                      interventions, which would foster behavioral change and
                      sustainable hygiene habits
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={rightVariants}
              className="w-full lg:w-3/5 flex justify-end"
            >
              {/* <PillarReverseImageComp
                img1={"/Frame 101.png"}
                img3={"/about/dream.svg"}
              /> */}
              <div className="w-full h-[360px] lg:h-[640px] relative">
                <Image
                  src={"/pillar/AAFPillars-Health.png"}
                  alt=""
                  fill
                  className="w-auto object-contain absolute"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="w-full flex justify-center items-center relative">
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

          <motion.div
            variants={containerVariants}
            ref={ref}
            initial="hidden"
            animate={mainControls}
            className="w-full flex flex-col lg:flex-row  justify-center items-center gap-8 px-6 lg:px-[100px] absolute inset-0 pt-14"
          >
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
                  leadership qualities and entrepreneurial mindset among them,
                  by empowering them to drive innovation and make a positive
                  impact in their respective fields through tailored training
                  and workshops to enhance employability.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="w-full flex justify-center items-center relative">
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
            <div className="w-full lg:w-2/5">
              <div className="w-full lg:w-[479px] flex flex-col gap-4 ">
                <h1 className="font-bold text-[32px] lg:text-5xl mt-8 lg:mb-6 text-black">
                  Social Enterprise
                </h1>
                <p className="text-xl font-medium text-custom-primary-text my-4">
                  Social Impact
                </p>
                <p className="font-light text-[16px] text-custom-pillar-gray mb-6">
                  By visiting various markets and providing traders with
                  immediate access to healthcare with our team of doctors on the
                  ground to examine and solve basic health-related issues.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-3/5">
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PillarImageComponent;

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
