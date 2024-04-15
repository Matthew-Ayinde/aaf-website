"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const HomePagePillars = () => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 520,
    height: 164,
  });

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 640;
    setImageDimensions({
      width: isMobile ? 328 : 520,
      height: isMobile ? 104 : 164,
    });
  }, []);

  return (
    // <div className="w-full mx-auto lg:px-[100px] px-6 bg-custom-primary-bg">
    //   <div className="flex-col lg:flex gap-[120px] items-center justify-center ">
    //     <div className="relative w-1/2 h-[640px]">
    //       <Image
    //         src={"/advancingImage.svg"}
    //         fill
    //         className="object-contain absolute"
    //         alt=""
    //       />
    //     </div>

    //     <div className="flex flex-col gap-6 w-full lg:w-1/2">
    //       <h6 className="font-medium text-lg text-white">Our Pillars</h6>
    //       <h1 className="lg:font-bold lg:text-5xl font-bold text-2xl text-[#000000]">
    //         AAF Pillars
    //       </h1>
    //       <p className="lg:font-normal lg:text-base font-light text-sm">
    //         With a focus on quality delivery, we are driving meaningful change
    //         by harnessing the power of dignity and service to transform lives
    //         and create a more inclusive and equitable society.
    //       </p>
    //       <ul className="flex flex-col gap-2 ">
    //         <li className="flex gap-4 text-center">
    //           <Image src={"/checkBox.svg"} width={40} height={40} alt="" />
    //           Health
    //         </li>
    //         <li className="flex gap-4  ">
    //           <Image src={"/checkBox.svg"} width={40} height={40} alt="" />
    //           Education
    //         </li>
    //         <li className="flex gap-4  ">
    //           <Image src={"/checkBox.svg"} width={40} height={40} alt="" />
    //           Social Enterprise
    //         </li>
    //       </ul>
    //       <div className={`relative w-${imageDimensions.width} h-${imageDimensions.height}`}>
    //         <Image
    //         src={"/pillarsImage.svg"}
    //         alt=""
    //         fill
    //         className="absolute object-contain"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full mx-auto bg-custom-primary-bg lg:py-[144px] py-[100px] lg:px-[100px] px-6">
      <div className="lg:flex lg:flex-col-reverse ">
        <div className="flex flex-col lg:flex-row lg:gap-[120px] gap-8">
          <div className="relative lg:w-[600px] w-[328px] lg:h-[640px] h-[360px]">
            <Image
              src={"/pillars.svg"}
              fill
              className="object-contain absolute"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col justify-center gap-4">
            <h6 className="font-medium text-lg ">Our Pillars</h6>
            <h1 className="font-bold lg:text-5xl text-2xl text-[#000000]">AAF Pilllars</h1>
            <p className="font-normal text-base text-custom-primary-text text-wrap">
              With a focus on quality delivery, we are driving meaningful change
              by harnessing the power of dignity and service to transform lives
              and create a more inclusive and equitable society.
            </p>
            <ul className="flex flex-col gap-2 ">
              <li className="flex gap-4 text-center">
                <Image src={"/checkBox.svg"} width={40} height={40} alt="" />
                Health
              </li>
              <li className="flex gap-4  ">
                <Image src={"/checkBox.svg"} width={40} height={40} alt="" />
                Education
              </li>
              <li className="flex gap-4  ">
                <Image src={"/checkBox.svg"} width={40} height={40} alt="" />
                Social Enterprise
              </li>
            </ul>
            <div
              className="lg:w-[520px] lg:h-[164px] relative w-[328px] h-[104px] mt-12"
            >
              <Image
                src={"/pillarsImage.svg"}
                alt=""
                fill
                className="absolute object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePagePillars;
