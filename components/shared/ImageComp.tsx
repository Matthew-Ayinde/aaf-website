import React from "react";
import Image from "next/image";

interface ImageCompProps {
  img1: string;
  img2: string;
  img3: string;
  hText: string;
  pText: string;
}

const ImageComp: React.FC<ImageCompProps> = ({ img1, img2, img3, hText, pText }) => {
  return (
    <div className="bg-custom-dark-bg flex flex-col lg:flex-row justify-center items-center w-full gap-10 px-6 lg:px-20 py-[144px]">
      <div className="flex w-full lg:w-[700px] h-[360px] lg:h-[720px] relative">
        <div className="w-[300px] lg:w-[600px] relative">
          <Image
            src={img1}
            alt=""
            fill
            className="absolute w-auto object-contain rounded-2xl"
          />
        </div>
        <div className="flex flex-col h-full">
          <div className="rounded-2xl w-[120px] lg:w-[240px] h-[120px] lg:h-[240px] absolute right-0 top-0">
            <Image
              src={img2}
              alt=""
              fill
              className="absolute w-auto object-cover rounded-2xl"
            />
          </div>
          <div className="rounded-2xl w-[180px] border-white border-8 lg:w-[360px] h-[120px] lg:h-[240px] absolute right-0 bottom-0">
            <Image
              src={img3}
              alt=""
              fill
              className="absolute w-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full lg:w-[479px]">
        <h1 className="text-2xl lg:text-5xl font-bold text-custom-white">
          {hText}
        </h1>
        <p className="text-base lg:text-lg text-[#bdbdbd]">
          {pText}
        </p>
      </div>
    </div>
  );
};

export default ImageComp;
