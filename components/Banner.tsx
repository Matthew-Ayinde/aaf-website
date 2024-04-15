import React from "react";
import Link from 'next/link';
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <div className="w-full mx-auto">
      <section className="relative h-screen w-full flex justify-center items-center ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/home/home-bg.svg")' }}
        />
        <div className="absolute px-6 inset-0 flex flex-col justify-center items-center w-full gap-10">
          {/* Centered content */}
          <h1 className="text-white text-2xl lg:text-[64px] font-bold">
          Advancing Lives
          </h1>
          <p className="text-xs lg:text-lg leading-[19.6px] lg:leading-[21.09px] text-custom-tertiary-text text-center">Help us build a future that value all human lives. Join us on our 400+ welfare projects on education, healthcare, and livelihood.</p>
          <Button asChild className="w-[209px] h-[56px] bg-custom-main-color hover:bg-custom-main-color shadow-none"><Link href="/">Learn More</Link></Button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
