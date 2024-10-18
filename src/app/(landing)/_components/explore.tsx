import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const ExploreMeetups = (props: Props) => {
  return (
    <div className="w-full lg:h-[30vh] bg-gradient-to-r from-purple-900 to-purple-700 lg:px-32">
      <div className="px-10 py-14 flex flex-col">
        <div className=" text-white text-shadow-lg ">
          <h1 className="lg:text-[3rem] text-[1.6rem] md:text-[2.5rem] font-semibold">
            Explore meetups and events around you.
          </h1>
          <p className="lg:w-[40vw] text-slate-300 text-[13px] md:text-[1rem]">
            Find local meetups and events that match your interests. Connect
            with people, explore new activities, and stay engaged with what’s
            happening around you!{" "}
          </p>
        </div>
        <div className="mt-4">
          <Link href={"/meetups"}>
            <Button variant={'outline'} className="font-semibold text-violet-900 bg-slate-200 text-sm md:text-">Explore Meetups </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreMeetups;
