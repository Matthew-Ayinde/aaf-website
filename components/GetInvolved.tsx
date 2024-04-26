"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

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
    <motion.div
      variants={containerVariants}
      ref={ref}
      initial="hidden"
      animate={mainControls}
      className="w-full mx-auto max-w-screen-xxl"
    >
      <div className="flex flex-col justify-center items-center w-full overflow-x-hidden">
        <section className="relative h-screen w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/volunteer/getInvolvedBanner.png")',
            }}
          />
          <motion.div
            variants={bottomVariants}
            className="absolute inset-0 flex justify-center items-center"
          >
            {/* Centered content */}
            <h1 className="text-white text-[40px] lg:text-[64px] font-bold">
              Partner with us
            </h1>
          </motion.div>
        </section>

        {/* <Content /> */}

        <section className="w-full flex justify-center items-center relative">
          <div className="block lg:hidden w-full">
            <div className="w-full h-[2874px] relative">
              <Image
                src="/donate-mobile.png"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <div className="w-full h-[3880px] relative">
              <Image
                src="/donate-bg.png"
                alt="Mobile Background"
                fill
                className="object-cover w-full absolute"
              />
            </div>
          </div>

          <div className="absolute inset-0">
            <div className="w-[120px] lg:w-[200px] h-[218.54px] lg:h-[364.24px]">
              <div className="w-full h-full relative">

              <Image src="/Group.png" alt="" fill className="w-auto object-contain absolute" />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col absolute inset-0 gap-10 lg:gap-20 px-6 lg:px-[100px] justify-center items-center">
            <div className="w-full flex flex-col gap-[48px] lg:gap-20 ">
              {donate.map((donate, index) => (

              <div key={index} className="w-full rounded-2xl h-[480px] lg:h-[640px] relative flex flex-col justify-center items-center bg-black">
                <div className="w-full h-full relative">
                  <Image
                    src={donate.bgImg}
                    alt=""
                    fill
                    className="object-cover absolute w-full rounded-2xl"
                  />
                </div>
                <div className="w-full lg:w-[720px] h-[160px] lg:h-[200px] bg-white/10 backdrop-blur-xl rounded-t-xl rounded-b-2xl lg:rounded-b-none absolute bottom-0 text-white flex justify-center items-center">

                  <div className="w-[308px] lg:w-[652px] flex flex-col justify-center items-center gap-4 lg:gap-6">

                  <h3 className="font-bold text-[20px] lg:text-2xl">{donate.title}</h3>
                  <p className="font-medium text-[13px] lg:text-base text-center">{donate.text}</p>
                  <Link href={donate.link} className="font-medium text-[13px] lg:text-base text-custom-main-color hover:underline hover:underline-offset-8">Request a Proposal</Link>
                  </div>

                </div>
              </div>
              ))}
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

const donate = [
  {
    bgImg: "/color-hands.png",
    title: "Donate",
    text: "Your collaboration with AAF can make a meaningful impact.",
    link: "/",
  },
  {
    bgImg: "/parenting.png",
    title: "Kit-a-Mum",
    text: "It costs NGN40,000 to provide a new mum with a post natal care kit, containing essential supplies for the immediate care of herself and her new born.",
    link: "/",
  },
  {
    bgImg: "/father.png",
    title: "Kit-a-Student",
    text: "It costs NGN40,000 to provide a pupil with back-to-school items for a new session, enabling them to be fully equipped to maximize their potential and realize their dreams.",
    link: "/",
  },
  {
    bgImg: "/graduate.png",
    title: "Groom an Exceptional Talent",
    text: "Reward academic excellence and fuel dreams.",
    link: "/",
  },
  {
    bgImg: "/stressed.png",
    title: "Fund an Entrepreneur",
    text: "Give a grant of NGN100,000 to a small business owner in rural and peri-urban communities.",
    link: "/",
  },
]

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
