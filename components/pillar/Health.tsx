"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Health = () => {
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

          <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center gap-8 px-6 lg:px-[100px] absolute inset-0">
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
          </div>
        </motion.div>
    )
}

export default Health

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
  