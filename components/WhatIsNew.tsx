"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageData {
  imgsrc: string;
  alt: string;
}

const WhatIsNew = () => {
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
    setVisibleImages(isMobile ? newImages.slice(1) : newImages);
  }, []);
  return (
    <div className="w-full mx-auto">
      <div className="w-full h-screen bg-[url('/home/whatsnew.png')] bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center lg:px-0 px-5 gap-10">
        <h1 className="text-white font-bold text-[40px] lg:text-6xl">AAF in the News </h1>

        <Button
          asChild
          className="py-4 px-16 bg-white hover:bg-white text-custom-main-color w-[207px] lg:w-[236px] h-[52px] lg:h-[52px]"
        >
          <Link href={""}>Partner with us</Link>
        </Button>
      </div>
      <div className="mt-6 grid lg:grid-cols-4 grid-cols-3 gap-4">
        {visibleImages.map((images, index) => (
          <div key={index}>
            <Image
              src={images.imgsrc}
              width={imageDimensions.width}
              height={imageDimensions.height}
              alt=""
              className="rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const newImages: ImageData[] = [
  {
    imgsrc: "/home/whatsnew2.png",
    alt: "",
  },
  {
    imgsrc: "/home/whatsnew3.png",
    alt: "",
  },
  {
    imgsrc: "/home/whatsnew4.png",
    alt: "",
  },
  {
    imgsrc: "/home/whatsnew5.png",
    alt: "",
  },
];

export default WhatIsNew;
