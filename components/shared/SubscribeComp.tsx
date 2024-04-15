import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

const SubscribeComp = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:w-[1150px] h-[580px] lg:h-[417px] bg-[url('/subPeople.svg')] bg-[#004E7A] bg-no-repeat mt-10 bg-center bg-cover rounded text-white flex flex-col justify-center items-center gap-14 px-4 mx-6">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <h1 className="font-bold text-[32px] lg:text-[40px]">
            Subscribe to our Newsletter
          </h1>
          <p className="text-[15px] lg:text-base leading-[23px] lg:leading-[19px]">
            Help us change the world one life at a time. Join us in our mission
            to help the needy
          </p>
        </div>
        <div className="w-full lg:w-[683px] flex lg:flex-row flex-col gap-4">
          <div className="w-full lg:[480px] h-[61px] bg-white flex text-[#828282] text-base rounded-[8px] px-6">
            <Image src="/mail.svg" alt="mail" width={28} height={20} />
            <Input
              placeholder="Enter your email"
              className="bg-transparent outline-none border-none focus-visible:ring-0 rounded-none h-full"
            />
          </div>
          <Button className="w-full lg:w-[187px] h-[61px] bg-custom-main-color hover:bg-custom-main-color">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeComp;
