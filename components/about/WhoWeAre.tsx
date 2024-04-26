"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const WhoWeAre = () => {
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
        <div className="w-full h-[880px] relative">
          <Image
            src="/about/who-mobile.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>
      <div className="lg:block hidden w-full">
        <div className="w-full h-[800px] relative">
          <Image
            src="/about/who-we-are.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>

      <div className="absolute inset-0 flex lg:justify-center px-6 lg:px-20 py-20 ">
        <motion.div variants={bottomVariants} className="w-[280px] lg:w-[880px] flex gap-6 lg:gap-16 flex-col">
          <h1 className="text-[32px] lg:text-[56px] font-bold text-center">
            Who we are
          </h1>
          <p className="text-center text-sm lg:text-lg text-custom-primary-text">
            The Adeyinka Adesope Foundation (AAF) serves as a symbol of hope and
            empowerment for disadvantaged communities, driven by a steadfast
            commitment to enhancing lives and advocating for welfare. Inspired
            by the visionary spirit of Adeyinka Adesope, the foundation&apos;s
            creed reflects a profound dedication to assisting the marginalized
            and underprivileged, striving relentlessly to elevate them towards a
            higher standard of living. <br />
            <br /> At the heart of AAF&apos;s principles lies the motto
            &quot;Advancing Lives,&quot; embodying its unwavering pursuit of
            enhanced welfare for the vulnerable, while also promoting excellence
            and entrepreneurship within communities. <br />
            <br /> In essence, the Adeyinka Adesope Foundation stands as a
            testament to the transformative potential of empathy, cooperation,
            and steadfast determination, working tirelessly to forge a brighter,
            more equitable future for all.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhoWeAre;

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
const bottomVariants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
