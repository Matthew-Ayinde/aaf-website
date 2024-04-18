"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import Image from "next/image";
import ImageComp from "./shared/ImageComp";
import { Button } from "./ui/button";
import Link from "next/link";
import SubscribeComp from "./shared/SubscribeComp";
import ReverseImageComp from "./shared/ReverseImageComp";
import MottoComp from "./about/MottoComp";
import VisionComp from "./about/VisionComp";
import MissionComp from "./about/MottoComp";
import WhoWeAre from "./about/WhoWeAre";
import Core from "./about/Core";

const AboutUsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div ref={ref} variants={containerVariants}
    initial="hidden"
    animate={mainControls} className="w-full mx-auto max-w-screen-xxl overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <section className="w-full h-screen bg-custom-gradient-bg">
          <div className="w-full h-full bg-[url('/about/westand.png')] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center px-6">
            <motion.div variants={bottomVariants} className="w-full lg:w-[1056px] flex flex-col items-center gap-14">
              <h1 className="font-bold text-custom-white flex flex-col justify-center items-center text-[32px] lg:text-[56px] text-center">
                We stand as a testament to the transformative potential of
                empathy, cooperation, and steadfast determination.
              </h1>
              <Button
                asChild
                className="w-[209px] h-[56px] bg-white hover:bg-white text-custom-main-color"
              >
                <Link href="/">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <WhoWeAre />

        <MottoComp />

        <VisionComp />

        <MissionComp />

        <Core />

        <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[2799px] relative">
              <Image
                src="/about/meet-mobile.png"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[1634px] relative">
              <Image
                src="/about/meetbg.png"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center gap-20  px-6 lg:px-10 absolute inset-0">
            <h1 className="font-bold text-[32px] lg:text-[64px]">
              Meet Our People
            </h1>
            <div className="w-full flex flex-wrap justify-center gap-10 ">
              {AAFPeople.map((people, index) => (
                <div
                  key={index}
                  className="w-full lg:w-[360px] flex flex-col gap-8"
                >
                  <div className="w-full lg:w-full h-[360px] lg:h-[420px] relative bg-custom-dark-gray rounded-2xl">
                    <Image
                      src={people.people}
                      alt="people"
                      fill
                      className="w-auto absolute object-cover rounded-2xl"
                    />
                  </div>

                  <div>
                    <h3 className="text-[20px] text-custom-black">
                      {people.name}
                    </h3>
                    <p className="text-base text-custom-main-color">
                      {people.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <SubscribeComp />
        </section>
      </div>
    </motion.div>
  );
};

export default AboutUsPage;

const AAFPeople = [
  {
    people: "/about/Adeyinka.png",
    name: "Adeyinka Adesope",
    title: "Chairman/Founder",
  },
  // {
  //   people: "",
  //   name: "Adenike Adesope",
  //   title: "Co-founder",
  // },
  {
    people: "/about/sam.png",
    name: "Samuel Akinnuga",
    title: "Executive Director",
  },
  {
    people: "/about/ranti.png",
    name: "Oluwaranti Olaniyan",
    title: "Technical Advisor",
  },
  {
    people: "/about/pm.png",
    name: "First Name",
    title: "Program Manager",
  },
];

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
