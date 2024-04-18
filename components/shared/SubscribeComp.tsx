"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

const SubscribeComp = () => {
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
      className="w-full flex justify-center"
    >
      <motion.div  className="w-full lg:w-[1150px] h-[580px] lg:h-[417px] bg-[url('/Subscribe-bg.png')] bg-[#004E7A] rounded-2xl bg-no-repeat mt-10 bg-center bg-cover text-white flex justify-center items-center ">
        <motion.div variants={bottomVariants} className="w-full flex flex-col justify-center items-center gap-14 px-4 mx-6">

        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <h1 className="font-bold text-[32px] lg:text-[40px]">
            Subscribe to our Newsletter
          </h1>
          <p className="text-[15px] lg:text-base leading-[23px] lg:leading-[19px]">
            Help us change the world one life at a time. Join us in our mission
            to help the needy
          </p>
        </div>
        <div className="w-full lg:w-[683px] flex lg:flex-row flex-col gap-4">
          <div className="w-full lg:[480px] h-12 bg-white flex text-[#828282] text-base rounded-[8px] px-6">
            <Image src="/mail.svg" alt="mail" width={28} height={20} />
            <Input
              placeholder="Enter your email"
              className="bg-transparent outline-none border-none focus-visible:ring-0 rounded-none h-full"
            />
          </div>
          <Button className="w-full lg:w-[187px] h-12 bg-custom-main-color hover:bg-custom-main-color">
            Subscribe
          </Button>
        </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SubscribeComp;

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
