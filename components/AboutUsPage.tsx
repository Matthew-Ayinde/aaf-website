import Image from "next/image";
import React from "react";
import ImageComp from "./shared/ImageComp";
import { Button } from "./ui/button";
import Link from "next/link";
import SubscribeComp from "./shared/SubscribeComp";
import ReverseImageComp from "./shared/ReverseImageComp";

const AboutUsPage = () => {
  return (
    <div className="w-full mx-auto max-w-screen-xxl">
      <div className="w-full flex flex-col justify-center items-center">
        <section className="w-full h-screen bg-custom-gradient-bg">
          <div className="w-full h-full bg-[url('/about/about-bg.svg')] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center px-6">
            <div className="w-full lg:w-[1056px] flex flex-col items-center gap-14">
              <h1 className="font-bold text-custom-white flex flex-col justify-center items-center text-[32px] lg:text-[56px] text-center">
                We stand as a testament to the transformative potential of
                empathy, cooperation, and steadfast determination.
              </h1>
              <Button
                asChild
                className="w-[209px] h-[56px] bg-white hover:bg-white text-custom-main-color"
              >
                <Link href="/">Learn More</Link>
              </Button>
            </div>
          </div>
          {/* <div></div> */}
        </section>

        <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[880px] relative">
              <Image
                src="/about/who-mobile.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[800px] relative">
              <Image
                src="/about/who-bg.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center px-6 lg:px-20 ">
            <div className="w-full lg:w-[880px] flex gap-6 lg:gap-16 flex-col justify-center items-center">
              <h1 className="text-[32px] lg:text-[56px] font-bold text-center">
                Who we are
              </h1>
              <p className="text-center text-lg text-custom-primary-text">
                The Adeyinka Adesope Foundation (AAF) serves as a symbol of hope
                and empowerment for disadvantaged communities, driven by a
                steadfast commitment to enhancing lives and advocating for
                welfare. Inspired by the visionary spirit of Adeyinka Adesope,
                the foundation&apos;s creed reflects a profound dedication to
                assisting the marginalized and underprivileged, striving
                relentlessly to elevate them towards a higher standard of
                living. <br />
                <br /> At the heart of AAF&apos;s principles lies the motto
                &quot;Advancing Lives,&quot; embodying its unwavering pursuit of
                enhanced welfare for the vulnerable, while also promoting
                excellence and entrepreneurship within communities. <br />
                <br /> In essence, the Adeyinka Adesope Foundation stands as a
                testament to the transformative potential of empathy,
                cooperation, and steadfast determination, working tirelessly to
                forge a brighter, more equitable future for all.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-6 lg:px-20 h-[909px] bg-custom-primary-bg flex justify-center items-center">
          <div className="w-full flex flex-col lg:flex-row  justify-center items-center gap-8">
            <ImageComp
              img1={"/about/arrow-up.svg"}
              img2={"/plant.svg"}
              img3={"/st.svg"}
            />
            <div className="w-full lg:w-[479px] flex flex-col gap-4 ">
              <h1 className="font-bold text-[32px] lg:text-5xl text-custom-secondary-text">
                Our Motto
              </h1>
              <p className="text-lg leading-[26px] lg:leading-[29px] font-medium text-custom-secondary-text">
                Dignity and Service
              </p>
              <p className="text-base lg:text-lg text-custom-primary-text leading-[26px] lg:leading-[29px]">
                We uphold dignity by treating every individual with respect,
                regardless of background, or status by striving for excellence
                in all endeavors, and ensuring that every act of service holds
                the highest standards of quality and integrity.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[890px] relative">
              <Image
                src="/about/vision-mobile.svg"
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
              <h1 className="font-bold text-[32px] lg:text-5xl text-custom-secondary-text">
                Our Vision
              </h1>
              <p className="text-lg leading-[26px] lg:leading-[29px] font-medium text-custom-secondary-text">
                A continent whose people can take advantage of its abundant
                potential and possibilities
              </p>
              <p className="text-base lg:text-lg text-custom-primary-text leading-[26px] lg:leading-[29px]">
                To create an environment where every individual across the
                continent has the opportunity to realize their full potential by
                tapping into Africa&apos;s vast resources, and cultural richness
                to drive innovation, entrepreneurship, and sustainable
                development.
              </p>
            </div>
            <ReverseImageComp
              img1={"/about/hr-img.svg"}
              img2={"/about/children.svg"}
              img3={"/about/dream.svg"}
            />
          </div>
        </section>

        <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[890px] relative">
              <Image
                src="/about/mission-mobile.svg"
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

          <div className="w-full flex flex-col lg:flex-row  justify-center items-center gap-8 px-6 lg:px-20 absolute inset-0">
            <ImageComp
              img1={"/about/hr-img.svg"}
              img2={"/about/children.svg"}
              img3={"/about/dream.svg"}
            />
            <div className="w-full lg:w-[479px] flex flex-col gap-4 ">
              <h1 className="font-bold text-[32px] lg:text-5xl text-custom-secondary-text">
                Our Mission
              </h1>
              <p className="text-base lg:text-lg text-custom-primary-text leading-[26px] lg:leading-[29px]">
                Improve the quality of life and enterprise through investments
                in human capital
              </p>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[2541px] relative">
              <Image
                src="/about/core-mobile.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[1505px] relative">
              <Image
                src="/about/core-bg.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center gap-20 px-6 lg:px-10 absolute inset-0">
            <h1 className="font-bold text-[32px] lg:text-[64px] text-white">
              Our Core Values
            </h1>
            <div className="w-full flex flex-wrap justify-center items-center gap-20">
              {Cores.map((core, index) => (
                <div
                  key={index}
                  className="w-full lg:w-[440px] flex flex-col items-center gap-8"
                >
                  <Image
                    src={core.icon}
                    alt={core.title}
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col items-center gap-4">
                    <h1 className="font-bold text-2xl text-custom-white">
                      {core.title}
                    </h1>
                    <p className="text-sm text-custom-gray leading-[21px] text-center">
                      {core.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[2799px] relative">
              <Image
                src="/about/meet-mobile.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[1634px] relative">
              <Image
                src="/about/meet-bg.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center gap-20  px-6 lg:px-10 absolute inset-0">
            <h1 className="font-bold text-[32px] lg:text-[64px]">
              Meet Our People
            </h1>
            <div className="w-full flex flex-wrap justify-center gap-10 ">
              {AAFPeople.map((people, index) => (
                <div
                  key={index}
                  className="w-full lg:w-[360px] flex flex-col gap-8"
                >
                  <div className="w-full lg:w-full h-[360px] lg:h-[420px] relative bg-custom-dark-gray rounded-2xl">
                    <Image
                      src={people.people}
                      alt="people"
                      fill
                      className="w-auto absolute object-cover rounded-2xl"
                    />
                  </div>

                  <div>
                    <h3 className="text-[20px] text-custom-black">
                      {people.name}
                    </h3>
                    <p className="text-base text-custom-main-color">
                      {people.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 px-6">
          <SubscribeComp />
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;

const AAFPeople = [
  {
    people: "/about/Adeyinka.svg",
    name: "Adeyinka Adesope",
    title: "Chairman/Founder",
  },
  {
    people: "",
    name: "Adenike Adesope",
    title: "Co-founder",
  },
  {
    people: "/about/sam.svg",
    name: "Samuel Akinnuga",
    title: "Executive Director",
  },
  {
    people: "/about/ranti.svg",
    name: "Oluwaranti Olaniyan",
    title: "Technical Advisor",
  },
  {
    people: "/about/pm.svg",
    name: "First Name",
    title: "Program Manager",
  },
];

const Cores = [
  {
    icon: "/about/rigour.svg",
    title: "Rigour",
    p: "We are committed to thorough research, analysis, and evidence-based decisions which upholds high standards of professionalism, integrity, and accountability in all endeavors.",
  },
  {
    icon: "/about/innovation.svg",
    title: "Innovation",
    p: "We embrace innovation as a driving force for agility and adaptability by empowering the foundation to respond nimbly to evolving needs, and dynamic environments by championing collaborative partnerships and cross-sectoral collaboration to catalyze innovation, leveraging diverse expertise, perspectives, and resources to generate transformative solutions.",
  },
  {
    icon: "/about/dignity.svg",
    title: "Dignity",
    p: "Respecting the rights, and dignity of all individuals, communities, and stakeholders by promoting equity, diversity, and inclusion in all aspects of the foundation's work and ensuring that programs and initiatives prioritize the empowerment, autonomy, and well-being of those served.",
  },
  {
    icon: "/about/excellence.svg",
    title: "Excellence",
    p: "Pursuing excellence in all aspects of the foundation's operations, programs, and initiatives by demonstrating a relentless commitment to achieving sustainable impact that is aligned with the foundation's mission and vision.",
  },
];
