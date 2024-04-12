import React from 'react'
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';


const Advancing = () => {
  return (
    <div className="w-full mx-auto lg:px-[100px] px-6">
        <div className="lg:flex  gap-[120px]  items-center justify-center flex-col-reverse">
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <h6 className="font-medium text-lg text-custom-main-color">About us</h6>
            <h1 className="lg:font-extrabold lg:text-5xl font-bold text-2xl">Advancing Lives</h1>
            <p className="lg:font-normal lg:text-base font-light text-sm">
            The AAF was borne out of a unique personal life experience, hence its cause to philanthropy, and supporting certain initiatives to assist vulnerable people in various underdeveloped communities to live a better life.
            </p>
            <p className="lg:font-normal lg:text-base font-light text-sm">
            We are a foundation dedicated to providing and promoting improved welfare for the vulnerable. By Improving care, excellence, and enterprise in communities
            </p>
            <Button asChild className="py-4 px-16 bg-custom-main-color hover:bg-custom-main-color">
              <Link href={""}>
                About Us
              </Link>
            </Button>
          </div>
          <div className="relative w-1/2 h-[640px]">
            <Image 
            src={"/advancingImage.svg"}
            fill
            className="object-contain absolute"
            alt=''
            />
          </div> 
        </div>


    </div>
  )
}

export default Advancing