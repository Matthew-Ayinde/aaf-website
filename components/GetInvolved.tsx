"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import Image from "next/image";

import Content from "./partner/Content";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

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
    <motion.div variants={containerVariants}
    ref={ref}
    initial="hidden"
    animate={mainControls} className="w-full mx-auto max-w-screen-xxl">
      <div className="flex flex-col justify-center items-center w-full overflow-x-hidden">
        <section className="relative h-screen w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/volunteer/getInvolvedBanner.png")',
            }}
          />
          <motion.div variants={bottomVariants} className="absolute inset-0 flex justify-center items-center">
            {/* Centered content */}
            <h1 className="text-white text-[40px] lg:text-[64px] font-bold">
              Partner with us
            </h1>
          </motion.div>
        </section>

        {/* <Content /> */}

        <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[889px] relative">
              <Image
                src="/volunteer/become-volunteer-mobile.png"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[993px] relative">
              <Image
                src="/volunteer/become-volunteer-bg.png"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>

          {/* <div className="w-full flex flex-col justify-center items-center absolute inset-0 gap-10 lg:gap-20 px-6">
            <h1 className="font-bold text-2xl lg:text-[56px] text-white">
              Get in touch
            </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 lg:space-y-6 w-full lg:w-[1000px] flex flex-col justify-center items-center text-custom-gray"
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
          </div> */}
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
    </motion.div>
  );
};

const newImages: ImageData[] = [
  {
    imgsrc: "/volunteer/footer-1.png",
    alt: "",
  },
  {
    imgsrc: "/volunteer/footer-2.png",
    alt: "",
  },
  {
    imgsrc: "/volunteer/footer-3.png",
    alt: "",
  },
  {
    imgsrc: "/volunteer/footer-4.png",
    alt: "",
  },
];

export default GetInvolved;

const containerVariants = {
  hidden: {
    // opacity: 0,
    y: 0,
  },

  visible: {
    // opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const leftVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const rightVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const bottomVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};