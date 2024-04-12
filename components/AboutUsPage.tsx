import Image from "next/image";
import React from "react";
import ImageComp from "./shared/ImageComp";

const AboutUsPage = () => {
  return (
    <div className="w-full mx-auto overflow-x-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <section className="w-full h-screen bg-red-900">first section</section>

        <section className="w-full flex flex-col items-center relative">
          <div className="absolute z-20 pt-40 flex flex-col gap-16">
            <h1 className="text-[32px] lg:text-[56px] font-bold text-center">
              Who we are
            </h1>
            <p className="w-full lg:w-[880px] text-center">
              The Adeyinka Adesope Foundation (AAF) serves as a symbol of hope
              and empowerment for disadvantaged communities, driven by a
              steadfast commitment to enhancing lives and advocating for
              welfare. Inspired by the visionary spirit of Adeyinka Adesope, the
              foundation&apos;s creed reflects a profound dedication to
              assisting the marginalized and underprivileged, striving
              relentlessly to elevate them towards a higher standard of living.{" "}
              <br />
              <br /> At the heart of AAF&apos;s principles lies the motto
              &quot;Advancing Lives,&quot; embodying its unwavering pursuit of enhanced
              welfare for the vulnerable, while also promoting excellence and
              entrepreneurship within communities. <br />
              <br /> In essence, the Adeyinka Adesope Foundation stands as a
              testament to the transformative potential of empathy, cooperation,
              and steadfast determination, working tirelessly to forge a
              brighter, more equitable future for all.
            </p>
          </div>
          <div className="w-full relative h-[800px] bg-white">
            {/* Splash */}
            <div className="w-full top-0 lg:top-6 left-0 absolute">
              <div className="w-[88px] lg:w-[205px] h-[160px] lg:h-[382px] relative">
                <Image
                  src="/about/splash.svg"
                  alt="left"
                  fill
                  className="w-auto absolute object-contain"
                />
              </div>
            </div>

            {/* Bottom */}
            <div className="w-full absolute -bottom-14 right-0">
              <div className="w-full h-[425px] relative">
                <Image
                  src="/about/bottom.svg"
                  alt="right"
                  fill
                  className="w-auto absolute object-contain"
                />
              </div>
            </div>

            {/* Right */}
            <div className="w-full absolute top-0 bottom-0 -right-[450px]">
              <div className="w-full h-full relative">
                <Image
                  src="/about/right.svg"
                  alt="right"
                  fill
                  className="w-auto absolute object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-6 lg:px-20 py-[100px] bg-[#46B8E1]">
          third content
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
