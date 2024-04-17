import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="w-full mx-auto max-w-screen-xxl">
      <div className="w-full bg-custom-dark-bg px-6 lg:px-20 py-[120px] flex flex-col justify-center gap-6">
        <Link href={"/"}>
          <Image
            src="/footer/white-logo.svg"
            alt="footer logo"
            width={"158"}
            height={"64"}
          />
        </Link>
        <div className="w-full flex flex-col lg:flex-row justify-between pb-20 gap-12 lg:gap-6 ">
          <div className="flex flex-col gap-6">
            <p className="font-bold text-lg text-custom-white">Contact:</p>
            <div className="flex flex-col text-custom-gray text-base underline underline-offset-4 gap-3">
              <p>1234 567 9890</p>
              <p>AAFoundation@gmail.com</p>
            </div>
            <div className="flex gap-3">
              {FooterSocial.map((social, index) => (
                <div key={index} className="w-6 h-6 relative">
                  <Link href={social.url}>
                    <Image
                      src={social.img}
                      alt="social"
                      fill
                      className="w-auto absolute object-contain"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-bold text-lg text-custom-white">Quick Links:</p>
            <div className="text-custom-gray text-base flex flex-col gap-10">
              <Link href={"/about-us"}>About Us</Link>
              <Link href={"/pillars"}>AAF Pillars</Link>
              <Link href={"/partner"}>Get-involved</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-bold text-lg text-custom-white">
              Subscribe to Newsletter
            </p>
            <div className="w-full lg:w-[400px] flex flex-col lg:flex-row gap-3 ">
              <Input
                placeholder="Enter your email"
                className="w-full lg:w-[265px] bg-white outline-none border-none focus-visible:ring-0 rounded-[8px] h-12"
              />
              <Button className="w-full lg:max-w-[119px] h-12 bg-custom-main-color hover:bg-custom-main-color">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-full pt-10 lg:pt-20 flex flex-col lg:flex-row justify-between text-sm text-white gap-6 font-normal">
          <p className="w-[270px] lg:w-full">© 2024 Adesope Adeyinka Foundation. All rights reserved.</p>
          <div className="w-full flex justify-between lg:justify-end flex-row gap-3 text-[#DCDBDB]">
            <Link href={"/"} className="hover:underline hover:underline-offset-8">Privacy Policy</Link>
            <Link href={"/"} className="hover:underline hover:underline-offset-8">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const FooterSocial = [
  {
    img: "/footer/fb-foot.svg",
    url: "/",
  },
  {
    img: "/footer/ig-foot.svg",
    url: "/",
  },
  {
    img: "/footer/x-foot.svg",
    url: "/",
  },
  {
    img: "/footer/linked-foot.svg",
    url: "/",
  },
];
