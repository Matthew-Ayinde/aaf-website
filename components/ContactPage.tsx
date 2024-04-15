import Image from "next/image";
import React from "react";
import { Card } from "./ui/card";
import SubscribeComp from "./shared/SubscribeComp";
import Link from "next/link";

// import mobileBg from "../public/contact/touch-mobile.svg";

const ContactPage = () => {
  return (
    <div className="w-full mx-auto">
      <div className="w-full flex flex-col justify-center items-center">
        <section className="w-full bg-custom-dark-blue h-[200px] lg:h-[720px] bg-[url('/contact/aaf-bg.svg')] bg-center bg-no-repeat lg:bg-cover bg-contain"></section>

        <section className="w-full flex flex-col justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[1951px] relative">
              <Image
                src="/contact/touch-mobile.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[1291px] relative">
              <Image
                src="/contact/touch-bg.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-[45px] lg:gap-[120px] px-6 lg:px-16 absolute inset-0">
            <div className="w-full flex flex-col justify-center items-center gap-4 ">
              <h1 className="text-custom-black font-bold text-[32px] lg:text-[64px]">
                Get in Touch with us
              </h1>
              <p className="text-base lg:text-2xl text-custom-dark-gray">
                We would love to hear from you
              </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center">
              {ContactCard.map((card, index) => (
                <Card
                  key={index}
                  className="w-[328px] lg:w-[400px] h-[360px] lg:h-[400px] flex flex-col gap-8 px-7 py-20"
                >
                  <div className="w-8 lg:w-16 h-8 lg:h-16 relative">
                    <Image
                      src={card.icon}
                      alt=""
                      fill
                      className="w-auto object-contain absolute"
                    />
                  </div>
                  <div className="flex flex-col gap-4 text-sm lg:text-base text-custom-dark-gray font-light leading-6">
                    <h2 className="font-bold text-base lg:text-xl text-custom-secondary-text">
                      {card.header}
                    </h2>
                    {card.p ? <p>{card.p}</p> : ""}

                    {card.list && (
                      <ul className="flex flex-col gap-2">
                        {card.list.map((item, index) => (
                          <li key={index} className="flex gap-4 ">
                            <div className="w-6 h-6 relative">
                              <Link href={item.url}>
                                <Image
                                  src={item.imgsrc}
                                  alt="social"
                                  fill
                                  className="w-auto absolute object-contain"
                                />
                              </Link>
                            </div>
                            <p>{item.p}</p>
                          </li>
                        ))}
                      </ul>
                    )}

                    {card.emailList && (
                      <ul className="flex flex-col gap-2">
                        {card.emailList.map((email, index) => (
                          <li key={index}>
                            <p>{email}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full pb-[81px] px-6">
          <SubscribeComp />
        </section>
      </div>
    </div>
  );
};

export default ContactPage;

const ContactCard = [
  {
    icon: "/contact/ion-social-buffer.svg",
    header: "Follow us on Social Media",
    list: [
      {
        imgsrc: "/contact/contact-fb.svg",
        url: "/",
        p: "Awating Content",
      },
      {
        imgsrc: "/contact/contact-ig.svg",
        url: "/",
        p: "Awating Content",
      },
      {
        imgsrc: "/contact/contact-x.svg",
        url: "/",
        p: "Awating Content",
      },
    ],
  },
  {
    icon: "/contact/location.svg",
    header: "Address/Location",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem felis, molestie in pulvinar a, interdum sed arcu. ",
  },
  {
    icon: "/contact/contact-mail.svg",
    header: "Contact Email",
    emailList: [
      "Loremipsum@gmail.com",
      "Loremipsum@gmail.com",
      "Loremipsum@gmail.com",
    ],
  },
];
