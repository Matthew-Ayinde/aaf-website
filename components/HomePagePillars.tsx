import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const HomePagePillars = () => {
  return (
    <div className="w-full mx-auto lg:px-[100px] px-6 bg-custom-primary-bg">
      <div className="flex  gap-[120px]  items-center justify-center ">
        <div className="relative w-1/2 h-[640px]">
          <Image
            src={"/advancingImage.svg"}
            fill
            className="object-contain absolute"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h6 className="font-medium text-lg text-white">Our Pillars</h6>
          <h1 className="lg:font-bold lg:text-5xl font-bold text-2xl text-[#000000]">
            AAF Pillars
          </h1>
          <p className="lg:font-normal lg:text-base font-light text-sm">
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
        </div>
      </div>
    </div>
  );
};

export default HomePagePillars;
