"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade, Pagination, Parallax } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { slideData } from "@/data/slideData";

const SwiperComp = () => {
  const navbarHeight = 80;
  const fullScreenHeight = `calc(100vh - ${navbarHeight}px)`;

  return (
    <div className="w-full relative">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination, Parallax]}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          // renderBullet: function(index, className) {
          //   return `<div className="flex">
          //     <span className=" h-2 w-2 rounded-full bg-green-900 flex"></span>
          //   </div>`
          // }
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={600}
        parallax={true}
      >
        {slideData.map((data, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full"
              style={{ height: fullScreenHeight }}
            >
              <Image
                src={data.imgSrc}
                alt=""
                fill
                className="object-cover absolute w-full inset-0"
              />
              <div className="absolute inset-0 w-full">
                <div className="w-full h-full flex flex-col justify-center items-center lg:px-28 px-4 gap-10">
                  <div className="w-fit" data-swiper-parallax="1440">
                    <h1 className="text-white text-2xl lg:text-[64px] font-bold">
                      {data.header}
                    </h1>
                  </div>
                  <p className="text-xs lg:text-lg leading-[19.6px] lg:leading-[21.09px] text-custom-tertiary-text text-center">
                    {data.content}
                  </p>
                  <Button
                    asChild
                    className="w-[209px] h-[56px] bg-custom-main-color hover:bg-custom-main-color shadow-none"
                  >
                    <Link href="/">Learn More</Link>
                  </Button>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComp;
