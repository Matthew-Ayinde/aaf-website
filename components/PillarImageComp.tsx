import React from "react";
import Image from "next/image";

interface ImageCompProps {
  img1: string;
  img3: string;
}

const PillarImageComp: React.FC<ImageCompProps> = ({
  img1,
  img3,
}) => {
  return (
    <div className="flex w-full lg:w-[660px] h-[360px] lg:h-[640px] relative rounded-2xl">
      <div className="w-[300px] lg:w-[560px] relative rounded-2xl">
        <Image
          src={img1}
          alt=""
          fill
          className="absolute w-auto object-contain rounded-2xl"
        />
      </div>
      <div className="flex flex-col h-full">
        <div className="rounded-2xl w-[180px] border-white border-8 lg:w-[360px] h-[120px] lg:h-[300px] absolute right-0 lg:bottom-5 bottom-0">
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

export default PillarImageComp;
