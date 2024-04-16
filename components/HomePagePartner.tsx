import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const HomePagePartner = () => {
  return (
    <div className="w-full mx-auto flex justify-center items-center relative">
      <div className="block lg:hidden w-full">
        <div className="w-full h-[1022px] relative">
          <Image
            src="/home/partner-mobile.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>
      <div className="lg:block hidden w-full">
        <div className="w-full h-[920px] relative">
          <Image
            src="/home/partner1.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>

      <div className="lg:flex lg:flex-col-reverse lg:px-[100px] justify-center items-center px-6 absolute inset-0 py-[100px] lg:py-0">
        <div className="w-full flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full lg:h-[640px] h-[360px]">
              <Image
                src={"/home/partner2.png"}
                fill
                className="object-contain absolute"
                alt=""
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex justify-end">
            <div className="w-full lg:w-[520px] flex flex-col justify-center gap-8">
              <div className="w-full flex flex-col justify-center gap-[26px]">
                <h6 className="font-medium text-lg text-custom-main-color ">
                  Partner with us
                </h6>
                <h1 className="font-bold lg:text-5xl text-2xl text-[#000000]">
                  Partner with US
                </h1>
                <p className="font-normal text-base text-custom-primary-text text-wrap">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <ul className="flex flex-col gap-2 text-custom-primary-text">
                <li className="flex gap-4 text-center items-center">
                  <Image src={"/checkBox.svg"} width={40} height={40} alt="" />
                  Donate to AAF
                </li>
                <li className="flex gap-4 items-center">
                  <Image src={"/checkBox.svg"} width={40} height={40} alt="" />
                  KIT-A-MOM
                </li>
                <li className="flex gap-4 items-center">
                  <Image src={"/checkBox.svg"} width={40} height={40} alt="" />
                  EMPOWER A PUPIL
                </li>
                <li className="flex gap-4 items-center">
                  <Image src={"/checkBox.svg"} width={40} height={40} alt="" />
                  DEVELOP A GRADUATE
                </li>
              </ul>
              <Button
                asChild
                className="w-full lg:w-[236px] h-12 lg:h-[52px] shadow-none bg-custom-main-color hover:bg-custom-main-color"
              >
                <Link href={"/get-involved"}>Partner with us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePagePartner;
