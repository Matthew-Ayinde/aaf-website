"use client";

import Image from "next/image";
import React from "react";
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
  fullName: z.string().min(1, { message: "This field is required" }),
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "This field is required" }),
});

const LearnMorepage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({ ...values });

    form.reset();
  }

  return (
    <div className="bg-white flex flex-col gap-4 w-full h-fit lg:h-screen p-6">
      {/* <!-- X marks the spot :) --> */}
      <div className="lg:hidden block w-[40px] h-[40px] ml-auto relative">
        <Image
          src="/learnmore/X marks the spot.svg"
          alt="left"
          fill
          className="w-auto absolute object-contain"
        />
      </div>
      <div className="bg-[#F5F5F5] flex flex-col lg:flex-row w-full relative">
        {/* <!-- AAF Image --> */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[300px] lg:h-full sm:pb-10 relative">
            <Image
              src="/learnmore/Learn more about AF.svg"
              alt="left"
              fill
              className="w-auto rounded-tl-[12px] lg:rounded-bl-[12px] lg:rounded-tr-[0px] rounded-tr-[12px] absolute object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col py-6 px-4 lg:p-6 gap-4">
          {/* <!-- X marks the spot :) --> */}
          <div className="hidden lg:block w-[40px] h-[40px] ml-auto relative">
            <Image
              src="/learnmore/X marks the spot.svg"
              alt="left"
              fill
              className="w-auto absolute object-contain"
            />
          </div>

          {/* <!-- Learn more about AAF --> */}
          <p className="font-bold text-[#121212] lg:text-5xl text-2xl lg:leading-[62.4px] leading-[31.2px]">
            Learn more about AAF
          </p>

          {/* form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 lg:space-y-6"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <div>
                    <FormItem>
                      <FormLabel className="text-base text-custom-primary-text">
                        *Full Name:
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
                  <div>
                    <FormItem>
                      <FormLabel className="text-base text-custom-primary-text">
                        *Email Address:
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

              <div className="flex items-center space-x-2">
                <Checkbox id="consent" className="h-6 lg:h-8 w-6 lg:w-8" />
                <label
                  htmlFor="consent"
                  className="text-xs lg:text-base peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I consent to recieve more information about AAF
                </label>
              </div>

              <Button
                type="submit"
                className="w-full lg:w-[244px] h-[60px] bg-custom-main-color hover:bg-custom-main-color"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LearnMorepage;
