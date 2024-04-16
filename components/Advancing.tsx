import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Advancing = () => {
  return (
    <div className="w-full mx-auto relative">
      <div className="block lg:hidden w-full">
        <div className="w-full h-[974px] relative">
          <Image
            src="/home/advancing-mobile.svg"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>
      <div className="lg:block hidden w-full">
        <div className="w-full h-[920px] relative">
          <Image
            src="/home/advancing-bg.svg"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>

      <div className="lg:flex lg:flex-col-reverse justify-center items-center lg:px-[100px] px-6 absolute inset-0 py-[100px] lg:py-0">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
          <div className="lg:w-1/2 w-full ">
            <div className="w-full lg:w-[520px] flex flex-col justify-center gap-12">
              <div className="w-full flex flex-col justify-center gap-8">
                <h6 className="font-medium lg:text-lg text-base text-custom-main-color">
                  About us
                </h6>
                <h1 className="font-bold lg:text-5xl text-2xl">
                  Advancing Lives
                </h1>
                <p className="lg:font-normal font-light lg:text-base text-sm text-custom-primary-text">
                  The AAF was borne out of a unique personal life experience,
                  hence its cause to philanthropy, and supporting certain
                  initiatives to assist vulnerable people in various
                  underdeveloped communities to live a better life.
                  <br />
                  <br />
                  We are a foundation dedicated to providing and promoting
                  improved welfare for the vulnerable. By Improving care,
                  excellence, and enterprise in communities
                </p>
              </div>
              <Button
                asChild
                className="w-full lg:w-[192px] h-12 lg:h-[52px] shadow-none bg-custom-main-color hover:bg-custom-main-color"
              >
                <Link href={"/about-us"}>About us</Link>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full lg:h-[640px] h-[360px]">
              <Image
                src={"/advancingImage.svg"}
                fill
                className="object-contain absolute"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advancing;
