import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { title } from "process";
import Image from "next/image";

const Programmes = () => {
  return (
    <div className="w-full mx-auto  items-center justify-center relative">
      <div className="block lg:hidden w-full">
        <div className="w-full h-[3275px] relative">
          <Image
            src="/home/helped-mobile.svg"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>
      <div className="lg:block hidden w-full">
        <div className="w-full h-[1700px] relative">
          <Image
            src="/home/helped-bg.svg"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center absolute inset-0 lg:px-24 px-6">
        <div className="flex flex-col items-center justify-center gap-4 w-full lg:w-[808px]">
          <h6 className="text-custom-main-color">Our Programmes</h6>
          <h1 className="font-bold lg:text-5xl text-4xl text-custom-secondary-text lg:mx-16 mx-0 text-center">
            We&apos;ve helped over 200 vulnerable communities
          </h1>
          <p className="lg:font-normal lg:text-lg font-light text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod
            tempor incididunt ut labore et.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-col-1 gap-x-6 lg:gap-y-[70px] gap-y-6 mt-[68px]">
          {cardDetails.map((card, index) => (
            <Card
              key={index}
              className={`max-h-[500px] max-w-[400px] lg:pt-[280px] pt-[216px] lg:pr-12 pl-2 pr-0 lg:pb-5`}
              style={{
                backgroundImage: `url(${card.imageSrc})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col space-y-5 lg:pb-0 pb-4">
                <h1 className="ml-[10px] text-2xl font-bold text-custom-white">
                  {card.title}
                </h1>
                <p className="mx-[10px] text-custom-gray">{card.paragraph}</p>
                <Button
                  asChild
                  className="bg-custom-main-color hover:bg-custom-main-color px-3 ml-[10px] lg:mr-[53px] mr-3"
                >
                  <Link href={""}>Donate Now</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const cardDetails = [
  {
    imageSrc: "/housing.svg",
    title: "Housing & Shelter",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/care.svg",
    title: "Care & Support",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/education.svg",
    title: "Education",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/environment.svg",
    title: "Enviromental Help",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/food.svg",
    title: "Food Relief Funding",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/health.svg",
    title: "Health & Dental Care",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default Programmes;
