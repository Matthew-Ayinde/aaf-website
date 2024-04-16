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
        <div className="flex flex-col-reverse lg:flex-row lg:gap-[120px] gap-8 justify-center items-center">
          <div className="lg:w-1/2 w-full flex flex-col justify-center gap-4">
            <h6 className="font-medium lg:text-lg text-base text-custom-main-color">
              About us
            </h6>
            <h1 className="font-bold lg:text-5xl text-2xl">Advancing Lives</h1>
            <p className="lg:font-normal font-light lg:text-base text-sm text-custom-primary-text">
              The AAF was borne out of a unique personal life experience, hence
              its cause to philanthropy, and supporting certain initiatives to
              assist vulnerable people in various underdeveloped communities to
              live a better life.
            </p>
            <p className="lg:font-normal font-light lg:text-base text-sm text-custom-primary-text">
              We are a foundation dedicated to providing and promoting improved
              welfare for the vulnerable. By Improving care, excellence, and
              enterprise in communities
            </p>
            <Button asChild className="bg-custom-main-color hover:bg-custom-main-color">
              <Link href={""}>About us</Link>
            </Button>
          </div>
          <div className="relative lg:w-[600px] w-[328px] lg:h-[640px] h-[360px]">
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
  );
};

export default Advancing;
