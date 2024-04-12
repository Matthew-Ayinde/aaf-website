import Image from "next/image";
import React from "react";
import ImageComp from "./shared/ImageComp";

const LearnMorepage = () => {
  return (
    <div className="flex h-screen w-full p-4 lg:p-10">
      <div className="bg-[#F5F5F5] flex flex-col rounded-xl lg:flex-row w-full h-screen lg:h-[625px] relative">
        
        {/* <!-- AAF Image --> */}
        <div className="w-full lg:w-[640px]">
          <div className="w-full h-[160px] lg:h-full sm:pb-10 relative">
            <Image
              src="/learnmore/Learn more about AF.svg"
              alt="left"
              fill
              className="w-auto rounded-tl-[12px] lg:rounded-bl-[12px] lg:rounded-tr-[0px] rounded-tr-[12px] absolute object-cover"
            />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 h-[160px] lg:h-full  absolute inset-y-0 right-0">

        {/* <!-- X marks the spot :) --> */}
        <div className="w-[56px] h-[5px] mt-5 ml-[570px]">
            <Image
                  src="/learnmore/X marks the spot.svg"
                  alt="left"
                  width={40}
                  height={40}
              />
        </div>

        {/* <!-- Learn more about AAF --> */}
        <p className="font-bold text-[#121212] px-10 pt-20 lg:text-5xl text-2xl lg:leading-[62.4px] leading-[31.2px]">Learn more about AAF</p>
        <div className="">
          <form className=" px-8 pt-6 pb-8 mb-4">

        {/* <!-- Full Name Field --> */}
        <div className="pt-5 mb-4">
          <label className=" block text-[#4F4F4F] text-base leading-[25.6px] lg:font-normal font-sm mb-2"  htmlFor="full-name">
          * Full Name:
          </label>
          <input
            className="border border-gray-400 rounded-[12px] lg:w-[560px] w-[300px] h-[64px] py-2 px-3 bg-[#F5F5F5] text-gray-700"
            id="full-name"
            type="text"
          />
        </div>

        {/* <!-- Email Address Field --> */}
        <div className="pt-3 mb-4">
          <label className="block text-[#4F4F4F] text-base leading-[25.6px] lg:font-normal font-sm mb-2" htmlFor="full-name">
          * Email Address:
          </label>
          <input
            className="border border-gray-400 rounded-[12px] lg:w-[560px] w-[300px] h-[64px] py-2 px-3 bg-[#F5F5F5] text-gray-700"
            id="email-address"
            type="text"
          />
        </div>
        
        {/* <!-- Checkbox --> */}
        <label className="inline-flex items-center">
          <input type="checkbox" 
          className="form-checkbox lg:ml lg:mr mr-4 ml-1 lg:h-7 h-10 lg:w-5 w-10"/>
          <span className="lg:m-1 mr-10 lg:text-base text-[16px] font-normal lg:leading-6 text-[#4F4F4F]">I consent to recieve more information about AAF</span>
        </label>

        {/* <!-- Button --> */}
        <button className="block mt-10 bg-[#488AC9] hover:bg-blue-700 lg:w-[244px] w-[300px] lg:h-[60px] h-[48px] text-white font-normal lg:text-base text-sm leading-[25.6px] py-2 px-4 border rounded-[8px]">
        Submit
        </button>      
  </form>
</div>

        </div>
      </div>
    </div>
  );
};

export default LearnMorepage;
