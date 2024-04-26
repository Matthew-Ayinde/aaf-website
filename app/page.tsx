import Advancing from "@/components/Advancing";
import Awaiting from "@/components/Awaiting";
import HomePagePartner from "@/components/HomePagePartner";
import HomePagePillars from "@/components/HomePagePillars";
import HomePageProgramme from "@/components/HomePageProgramme";
import Programmes from "@/components/Programmes";
import SwiperComp from "@/components/SwiperComp";
import WhatIsNew from "@/components/WhatIsNew";
import SubscribeComp from "@/components/shared/SubscribeComp";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full mx-auto relative max-w-screen-xxl overflow-x-hidden">
      <SwiperComp />
      <Advancing />
      <HomePagePillars />
      {/* <HomePageProgramme /> */}
      <HomePagePartner />
      <Programmes />
      <Awaiting />
      <WhatIsNew />
      
      <div className="w-full flex justify-center items-center relative">
        <div className="block lg:hidden w-full">
          <div className="w-full h-[1033px] relative">
            <Image
              src="/home/subscribe-mobile.png"
              alt="Mobile Background"
              fill
              className="object-cover w-full absolute"
            />
          </div>
        </div>
        <div className="lg:block hidden w-full">
          <div className="w-full h-[837px] relative">
            <Image
              src="/home/subscribeImage.png"
              alt="Mobile Background"
              fill
              className="object-cover w-full absolute"
            />
          </div>
        </div>

        <div className="w-full justify-center items-center flex absolute inset-0 px-6">
          <SubscribeComp />
        </div>
      </div>
    </div>
  );
}
