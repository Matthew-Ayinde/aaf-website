import React from "react";
import ImageComp from "./shared/ImageComp";
import Image from "next/image";

const Awaiting = () => {
  const img1 = "/awaitingImg1.svg";
  const img2 = "/awaitingImg2.svg";
  const img3 = "/awaitingImg3.svg";

  return (
    <div className="w-full mx-auto bg-custom-dark-bg lg:px-20 px-6 lg:py-[120px] py-[100px]">
      <div className="lg:flex lg:flex-col-reverse">
        <div className="flex flex-col lg:flex-row lg:gap-20 gap-14 items-center justify-center">
          <div>
            <ImageComp img1={img1} img2={img2} img3={img3} />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold lg:text-5xl text-2xl text-custom-white">Awaiting Content</h1>
            <p className="font-normal lg:text-lg text-base text-custom-tertiary-text">
              Advancing Lives  - Providing and promoting improved welfare for
              the vulnerable; Improving care, excellence and enterprise in
              communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awaiting;
