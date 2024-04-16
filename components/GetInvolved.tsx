"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

import ImageComp from "./shared/ImageComp";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  phone: z.string(),
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "This field is required" }),
  introduction: z.string().min(1, { message: "This field is required" }),
});

interface ImageData {
  imgsrc: string;
  alt: string;
}

const GetInvolved = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      introduction: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({ ...values });

    form.reset();
  }

  const img1 = "/about/arrow-up.svg";
  const img2 = "/plant.svg";
  const img3 = "/st.svg";

  const [imageDimensions, setImageDimensions] = useState({
    width: 348,
    height: 348,
  });
  const [visibleImages, setVisibleImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 640;
    setImageDimensions({
      width: isMobile ? 120 : 348,
      height: isMobile ? 120 : 348,
    });
    setVisibleImages(newImages);
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col justify-center items-center w-full">
        <section className="relative h-screen w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/getInvolvedBanner.svg")' }}
          />
          <div className="absolute inset-0 flex justify-center items-center">
            {/* Centered content */}
            <h1 className="text-white text-2xl lg:text-[64px] font-bold">
              Volunteer with us
            </h1>
          </div>
        </section>

        <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[927px] relative">
              <Image
                src="/volunteer/content-mobile.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[1000px] relative">
              <Image
                src="/volunteer/content-bg.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>

          <div className="w-full flex flex-col-reverse justify-center items-center lg:px-20 px-6 lg:flex-row lg:gap-10 gap-8 absolute inset-0">
            <div className="w-full lg:w-[500px] flex flex-col gap-10 justify-center ">
              <h1 className="font-bold lg:text-[40px] text-2xl text-custom-dark-blue leading-[30px] lg:leading-[55px]">
                Awaiting Content for Volunteer Page
              </h1>
              <p className="font-normal lg:text-base text-sm text-custom-input-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse sem felis, molestie in pulvinar a, interdum sed
                arcu.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse sem felis, molestie in pulvinar a, interdum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse sem felis, molestie in pulvinar a, interdum sed
                arcu.
              </p>
            </div>

            <ImageComp img1={img1} img2={img2} img3={img3} />
          </div>
        </section>

        <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[889px] relative">
              <Image
                src="/volunteer/become-mobile.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[993px] relative">
              <Image
                src="/volunteer/become-bg.svg"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center absolute inset-0 gap-10 lg:gap-20 px-6">
            <h1 className="font-bold text-2xl lg:text-[56px] text-white">
              Become a Volunteer
            </h1>
            {/* form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 lg:space-y-6 w-full lg:w-[1000px] flex flex-col justify-center items-center"
              >
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <div className="w-full lg:w-[480px]">
                        <FormItem>
                          <FormLabel className="text-base text-custom-gray">
                            *First Name:
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className={`flex-1 h-12 lg:h-16 shadow-none border-custom-tertiary-text ${
                                form.formState.errors[field.name]
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />
                          </FormControl>
                        </FormItem>
                        <FormMessage />
                      </div>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <div className="w-full lg:w-[480px]">
                        <FormItem>
                          <FormLabel className="text-base text-custom-gray">
                            *Last Name:
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className={`flex-1 h-12 lg:h-16 shadow-none border-custom-tertiary-text ${
                                form.formState.errors[field.name]
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />
                          </FormControl>
                        </FormItem>
                        <FormMessage />
                      </div>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <div className="w-full lg:w-[480px]">
                        <FormItem>
                          <FormLabel className="text-base text-custom-gray">
                            *Phone Numbers:
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className={`flex-1 h-12 lg:h-16 shadow-none border-custom-tertiary-text ${
                                form.formState.errors[field.name]
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />
                          </FormControl>
                        </FormItem>
                        <FormMessage />
                      </div>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <div className="w-full lg:w-[480px]">
                        <FormItem>
                          <FormLabel className="text-base text-custom-gray">
                            *Email:
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className={`flex-1 h-12 lg:h-16 shadow-none border-custom-tertiary-text ${
                                form.formState.errors[field.name]
                                  ? "border-red-500"
                                  : ""
                              }`}
                            />
                          </FormControl>
                        </FormItem>
                        <FormMessage />
                      </div>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="introduction"
                  render={({ field }) => (
                    <div className="w-full">
                      <FormItem>
                        <FormLabel className="text-base text-custom-gray">
                          *Tell us a little bit about yourself:
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={`flex-1 h-[120px] shadow-none border-custom-tertiary-text ${
                              form.formState.errors[field.name]
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                        </FormControl>
                      </FormItem>
                      <FormMessage />
                    </div>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full lg:w-[244px] h-[60px] bg-custom-main-color hover:bg-custom-main-color"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </section>

        <section>
          <div className="pt-[100px] grid grid-cols-4 gap-4">
            {visibleImages.map((images, index) => (
              <div key={index}>
                <Image
                  src={images.imgsrc}
                  width={imageDimensions.width}
                  height={imageDimensions.height}
                  alt=""
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const newImages: ImageData[] = [
  {
    imgsrc: "/newImage1.svg",
    alt: "",
  },
  {
    imgsrc: "/newImage2.svg",
    alt: "",
  },
  {
    imgsrc: "/newImage3.svg",
    alt: "",
  },
  {
    imgsrc: "/newImage4.svg",
    alt: "",
  },
];

export default GetInvolved;
