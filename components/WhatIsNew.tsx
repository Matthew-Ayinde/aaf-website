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
      <div className="w-full h-screen bg-[url('/children.svg')] bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center lg:px-0 px-5 gap-6">
        <h1 className="text-white font-bold text-6xl">What’s New </h1>

        <Button
          asChild
          className="py-4 px-16 bg-white hover:bg-white text-custom-main-color"
        >
          <Link href={""}>Partner with us</Link>
        </Button>
      </div>
      <div className="mt-6 grid lg:grid-cols-4 grid-cols-3 gap-4 ">
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

export default WhatIsNew;
