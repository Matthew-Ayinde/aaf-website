"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

import ImageComp from "./shared/ImageComp";

interface ImageData {
  imgsrc: string;
  alt: string;
}

const GetInvolved = () => {
  const img1 = "/about/arrow-up.svg";
  const img2 = "/plant.svg";
  const img3 = "/st.svg";

  const [imageDimensions, setImageDimensions] = useState({
    width: 348,
    height: 348,
  });
  const [visibleImages, setVisibleImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 640;
    setImageDimensions({
      width: isMobile ? 120 : 348,
      height: isMobile ? 120 : 348,
    });
    setVisibleImages(newImages);
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col justify-center items-center w-full">
        <section className="relative h-screen w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/getInvolvedBanner.svg")' }}
          />
          <div className="absolute inset-0 flex justify-center items-center">
            {/* Centered content */}
            <h1 className="text-white text-[64px] font-bold">Volunteer with us</h1>
          </div>
        </section>
        <section className="w-full lg:flex lg:gap-20 gap-8 lg:px-[100px] px-6 lg:py-[180px] py-100px">
          <div className="lg:flex flex-col lg:gap-10  justify-center  ">
            <h1 className="font-bold lg:text-[44px] text-2xl text-custom-dark-blue mr-[92px] leading-[55px]">
              Awaiting Content for Volunteer Page
            </h1>
            <div className="flex flex-col gap-2">
              <p className="font-normal lg:text-base text-sm text-custom-input-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse sem felis, molestie in pulvinar a, interdum sed
                arcu.{" "}
              </p>
              <p className="font-normal lg:text-base text-sm text-custom-input-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse sem felis, molestie in pulvinar a, interdum.
              </p>
              <p className="font-normal lg:text-base text-sm text-custom-input-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse sem felis, molestie in pulvinar a, interdum sed
                arcu.{" "}
              </p>
            </div>
          </div>
          <ImageComp img1={img1} img2={img2} img3={img3} />
        </section>

        <section>{/* form to become a Volunteer */}</section>

        <section>
          <div className="mt-6 grid grid-cols-4 gap-4 ">
            {visibleImages.map((images, index) => (
              <div key={index}>
                <Image
                  src={images.imgsrc}
                  width={imageDimensions.width}
                  height={imageDimensions.height}
                  alt=""
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const newImages: ImageData[] = [
  {
    imgsrc: "/newImage1.svg",
    alt: "",
  },
  {
    imgsrc: "/newImage2.svg",
    alt: "",
  },
  {
    imgsrc: "/newImage3.svg",
    alt: "",
  },
  {
    imgsrc: "/newImage4.svg",
    alt: "",
  },
];

export default GetInvolved;
