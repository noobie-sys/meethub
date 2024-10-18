import Image from "next/image";
import React from "react";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

type Props = {};

const BannerImage = (props: Props) => {
  return (
    <div className="w-full h-full relative">
      <div className="relative h-[80vh] w-full aspect-video">
        <div className="absolute h-full bg-black opacity-[0.6] w-full z-20" />
        <Image
          src={"/meethub-banner.jpg"}
          alt="banner"
          priority
          sizes="70vw"
          fill
          objectFit="cover"
          className="opacity-[0.95]"
        />
      </div>
      <div className="absolute w-full h-full flex flex-col z-30 justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center items-center text-slate-200 pb-6 ">
          <div className={cn(`uppercase text-[2rem] text-center md:text-[3rem] font-bold tracking-wider drop-shadow-lg`)}>
            <h1>outside is where innvoation happens</h1>
          </div>
          <div className={cn(`uppercase  ${lato.className} text-slate-300 tracking-widest md:text-lg text-center text-sm `)}>
            <p>Explore the world and meet new people</p>
          </div>
        </div>
        <div className="">
            <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
