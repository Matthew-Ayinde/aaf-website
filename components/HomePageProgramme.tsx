import React from "react";
import Image from "next/image";

const HomePageProgramme = () => {
  return (
    <div className="w-full mx-auto flex justify-center items-center relative">
      <div className="block lg:hidden w-full">
        <div className="w-full h-[974px] relative">
          <Image
            src="/home/learn-mobile.svg"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>
      <div className="lg:block hidden w-full">
        <div className="w-full h-[928px] relative">
          <Image
            src="/home/learn-bg.svg"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>
      
      <div className="lg:flex lg:flex-col-reverse justify-center items-center lg:px-[100px] px-6 absolute inset-0 py-[100px] lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-20 gap-8 ">
          <div className="lg:w-1/2 w-full flex flex-col gap-6 justify-center">
            <h6 className="font-medium text-lg text-custom-main-color">Our Programs</h6>
            <h1 className="font-bold lg:text-5xl text-2xl text-black">Learn about the change and impacts</h1>
            <p className="font-normal lg:text-lg text-base text-custom-primary-text">
              Lorem ipsum dolor sit amet consectetur adipiscing elit seddo
              eiusmod tempor incididunt ut labore et.
            </p>
            <ul className="flex flex-col gap-2 text-custom-primary-text">
              <li className="flex gap-4 text-base font-normal items-center">
                <Image src={"/checkedBox.svg"} width={40} height={40} alt="" />
                Maternal and Neonatal Health Support Programme (MNHSP)
              </li>
              <li className="flex gap-4 text-base font-normal items-center ">
                <Image src={"/checkedBox.svg"} width={40} height={40} alt="" />
                Water, Sanitation and Hygiene (WASH)
              </li>
              <li className="flex gap-4 text-base font-normal items-center">
                <Image src={"/checkedBox.svg"} width={40} height={40} alt="" />
                Graduate Enhancement Programme (GEP)
              </li>
            </ul>
          </div>
          <div className="relative lg:w-[600px] w-[328px] lg:h-[640px] h-[360px]">
            <Image
              src={"/homepageprogramme.svg"}
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

export default HomePageProgramme;
