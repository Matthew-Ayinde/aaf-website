"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen(!open);
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <nav className="">
      <div className="flex items-center justify-between max-w-screen-xxl lg:px-20 px-6 py-5 h-[88px] w-full mx-auto bg-white lg:relative">
        {/* logo */}
        <div className="lg:w-fit w-full z-50 flex items-center justify-between">
          <Link
            href={"/"}
            onClick={() => {
              setOpen(false);
            }}
          >
            <Image
              alt="alt Image"
              width={152.33}
              height={60}
              src={"/nav/black-logo.svg"}
              className="lg:inline-block hidden"
            />
            <Image
              alt="alt Image"
              width={142.18}
              height={56}
              src={"/nav/black-logo.svg"}
              className="inline-block lg:hidden"
            />
          </Link>

          {/* hamburger menu */}
          <div onClick={toggleMobileMenu} className="lg:hidden cursor-pointer">
            {open ? (
              <Image
                src={"/nav/close.svg"}
                alt={"close"}
                width={26.67}
                height={20}
              />
            ) : (
              <Image
                src={"/nav/open.svg"}
                alt={"open"}
                width={26.67}
                height={20}
              />
            )}
          </div>
        </div>

        {/* large screen links */}
        <div className="lg:flex hidden justify-between items-center">
          <ul className="flex gap-[40px] text-base text-custom-input-gray">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.url}>
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="lg:inline-flex hidden gap-4 w-[200px] justify-end lg:border-l-2 border-l-[#4383FF] h-[46px] items-center">
          {NavSocial.map((social, index) => (
            <div key={index} className="w-[18px] h-[18px] relative">
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

        {/* mobile view */}
        <ul
          className={`lg:hidden absolute w-full h-full bottom-0 bg-white z-10 py-32 duration-500 ease-in-out transition-all ${
            open ? "left-0" : "left-[-100%] custom-input-gray"
          }`}
        >
          <div className="flex flex-col space-y-12 px-6">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.url}>
                {link.name}
              </Link>
            ))}
            <div className="flex lg:hidden gap-6 pt-10">
              {NavSocial.map((social, index) => (
                <div key={index} className="w-[18px] h-[18px] relative">
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

const navLinks = [
  {
    name: "About us",
    url: "/about-us",
  },
  {
    name: "AAF Pillars",
    url: "/pillars",
  },
  {
    name: "Get Involved",
    url: "/get-involved",
  },
  {
    name: "Contact us",
    url: "/contact-us",
  },
];

const NavSocial = [
  {
    img: "/nav/nav-fb.svg",
    url: "/",
  },
  {
    img: "/nav/nav-ig.svg",
    url: "/",
  },
  {
    img: "/nav/nav-x.svg",
    url: "/",
  },
  {
    img: "/nav/nav-linked.svg",
    url: "/",
  },
];
