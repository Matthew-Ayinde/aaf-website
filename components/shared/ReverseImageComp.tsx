import React from "react";
import Image from "next/image";

interface ImageCompProps {
  img1: string;
  img2: string;
  img3: string;
}

const ReverseImageComp: React.FC<ImageCompProps> = ({ img1, img2, img3 }) => {
  return (
    <div className="flex w-full lg:w-[660px] h-[360px] lg:h-[640px] relative rounded-2xl justify-end">
      <div className="w-[300px] lg:w-[560px] relative rounded-2xl top-0 right-0">
        <Image
          src={img1}
          alt=""
          fill
          className="absolute w-auto object-contain rounded-2xl"
        />
      </div>
      <div className="flex flex-col h-full">
        <div className="rounded-2xl w-[120px] lg:w-[240px] h-[120px] lg:h-[240px] absolute left-0 top-0">
          <Image
            src={img2}
            alt=""
            fill
            className="absolute w-auto object-cover rounded-2xl border-white border-8"
          />
        </div>
        <div className="rounded-2xl w-[180px] border-white border-8 lg:w-[360px] h-[120px] lg:h-[240px] absolute left-0 bottom-0">
          <Image
            src={img3}
            alt=""
            fill
            className="absolute w-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ReverseImageComp;
