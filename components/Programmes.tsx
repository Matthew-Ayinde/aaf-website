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
            src="/home/helped-mobile.png"
            alt="Mobile Background"
            fill
            className="object-cover w-full absolute"
          />
        </div>
      </div>
      <div className="lg:block hidden w-full">
        <div className="w-full h-[1700px] relative">
          <Image
            src="/home/helped.png"
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
              className={`h-[410px] lg:h-[500px] max-w-[400px] p-4 flex items-end`}
              style={{
                backgroundImage: `url(${card.imageSrc})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col gap-4 lg:gap-5 w-full lg:max-w-[343px]">
                <h1 className="text-lg lg:text-2xl font-bold text-custom-white">
                  {card.title}
                </h1>
                <p className="text-custom-gray text-xs">{card.paragraph}</p>
                <Button
                  asChild
                  className="bg-custom-main-color hover:bg-custom-main-color px-3 w-full lg:w-[280px] h-[45.92px] lg:h-[52px]"
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
    imageSrc: "/home/helped2.png",
    title: "Housing & Shelter",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/home/helped3.png",
    title: "Care & Support",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/home/helped4.png",
    title: "Education",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/home/helped5.png",
    title: "Enviromental Help",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/home/helped6.png",
    title: "Food Relief Funding",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/home/helped7.png",
    title: "Health & Dental Care",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default Programmes;
