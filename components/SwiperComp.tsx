"use client";

import { useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade, Pagination, Parallax } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { slideData } from "@/data/slideData";

const SwiperComp = () => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  const navbarHeight = 80;
  const fullScreenHeight = `calc(100vh - ${navbarHeight}px)`;

  SwiperCore.use([Autoplay, EffectFade]);

  const goToSlide = (index: number) => {
    console.log("Clicked on bullet index:", index);
    if (swiper) {
      // swiper.slideTo(index);
      swiper.update();
      swiper.slideTo(index, 600)
    }
  };

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
                  <div className="flex gap-1">
                    {slideData.map((_, idx) => (
                      <div
                        key={idx}
                        className={`swiper-pagination-bullet ${
                          idx === index
                            ? "bg-custom-main-color w-6 cursor-pointer"
                            : "bg-custom-tertiary-text h-2 w-2 cursor-pointer"
                        } rounded-full `}
                        onClick={() => goToSlide(idx)}
                        // onClick={() => console.log(idx)}
                      ></div>
                    ))}
                  </div>
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
