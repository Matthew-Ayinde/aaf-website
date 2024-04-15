import Image from "next/image";
import React from "react";
import PillarReverseImageComp from "./PillarReverseImageComponent";
import PillarImageComp from "./PillarImageComp";

const PillarImageComponent = () => {
  return (
    <div className="w-full mx-auto max-w-screen-xxl">
      <div className="w-full flex flex-col justify-center items-center">

      <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[890px] relative">
              <Image
                src="/pillar/pillar-vision-mobile.png"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[909px] relative">
              <Image
                src="/about/vision-bg.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>

          <div className="w-full flex flex-col-reverse lg:flex-row  justify-center items-center gap-8 px-6 lg:px-20 absolute inset-0">
            <div className="w-full lg:w-[479px] flex flex-col gap-4">
              <p className="lg:text-5xl text-2xl text-black mb-6 font-bold">Health</p>
              <div>
                <div className="mb-6">
                  <p className="font-normal lg:text-xl text-[18px] mb-4 text-custom-primary-text">Maternal and Neonatal Health Support Programme (MNHSP)</p>
                  <p className="font-light lg:text-[16px] text-sm text-custom-pillar-gray">By providing easy access to healthcare, we aim to implement initiatives that significantly decrease maternal mortality rates, 
                improve access to prenatal healthcare, and enhance Neonatal Care through our support programmes.</p>
                </div>
                <div className="mb-6">
                  <p className="font-normal lg:text-xl text-[18px] mb-4 text-custom-primary-text">Water, Sanitation and Hygiene (WASH)</p>
                  <p className="font-light lg:text-[16px] text-sm text-custom-pillar-gray">We aim to provide and ensure access to clean water, sanitation, and hygiene facilities, by promoting and educating communities on hygiene practices through WASH interventions, which would foster behavioral change and sustainable hygiene habits</p>
                </div>
              </div>
            </div>
            <PillarReverseImageComp
              img1={"/Frame 101.png"}
              img3={"/about/dream.svg"}
            />
          </div>
      </section> 
       
      <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[890px] relative">
              <Image
                src="/pillar/education-mobile.png"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[909px] relative">
              <Image
                src="/about/mission-bg.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row  justify-center items-center gap-8 px-6 lg:px-20 absolute inset-0 pt-14">
            <PillarImageComp
              img1={"/Frame 100.png"}
              img3={"/Frame1111.png"}
            />
            <div className="w-full lg:w-[479px] flex flex-col gap-4 ">
              <h1 className="font-bold text-[32px] lg:text-5xl mt-8 mb-4 lg:mt-7 lg:mb-6 text-black">
                Education
              </h1>
              <p className="text-lg lg:text-xl font-medium text-custom-primary-text">
                Graduate Enhancement Programme (GEP)
              </p>
              <p className="font-light text-[16px] text-custom-pillar-gray lg:mb-6 mb-36">
                We want to equip graduates with essential skills and cultivate leadership qualities and entrepreneurial mindset among them, by empowering them to drive innovation and make a positive impact in their respective fields through tailored training and workshops to enhance employability.
              </p>
            </div>
          </div>
      </section>

      <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[890px] relative">
              <Image
                src="/pillar/social-mobile.png"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[909px] relative">
              <Image
                src="/about/vision-bg.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>

          <div className="w-full flex flex-col-reverse lg:flex-row  justify-center items-center gap-8 px-6 lg:px-20 absolute inset-0">
            <div className="w-full lg:w-[479px] flex flex-col gap-4 ">
              <h1 className="font-bold text-[32px] lg:text-5xl mt-8 lg:mb-6 text-black">
                Social Enterprise
              </h1>
              <p className="text-xl font-medium text-custom-primary-text my-4">
                Social Impact
              </p>
              <p className="font-light text-[16px] text-custom-pillar-gray mb-6">
                By visiting various markets and providing traders with immediate access to healthcare with our team of doctors on the ground to examine and solve basic health-related issues.
              </p>
            </div>
            <PillarReverseImageComp
              img1={"/frame104.png"}
              img3={"/about/dream.svg"}
            />
          </div>
      </section>

        
        
      </div>
    </div>
  );
};

export default PillarImageComponent;




