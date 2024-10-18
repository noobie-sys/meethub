import Cards from "@/components/global/card-ui";
import React from "react";

type Props = {};

const Information = (props: Props) => {
  return (
    <div className="h-full mb-20 lg:mb-20 w-full ">
      <div className="w-full text-[3rem] font-bold  text-gray-700  dark:text-gray-200 md:px-40 px-10 pt-8">
        <h1>Why meethub?</h1>
      </div>
      <div className="w-full py-10 p-5 flex flex-col md:flex-row gap-3 justify-center items-center">
        <Cards image="/handshake.webp" title="Meet New People">
          <h1 className="">
            Meeting new like minded people was never easier. No matter what you
            love you will find people with the same interst on meethub.
          </h1>
        </Cards>
        <Cards image="/high-five.webp" title="Make new friends">
          <h1 className="">
            Meeting new like minded people was never easier. No matter what you
            love you will find people with the same interst on meethub.
          </h1>
        </Cards>
        <Cards image="/hand-with-pen.webp" title="Host a meetup">
          <h1 className="">
            Meeting new like minded people was never easier. No matter what you
            love you will find people with the same interst on meethub.
          </h1>
        </Cards>
        <Cards image="/brain.webp" title="Learn new things">
          <h1 className="">
            Meeting new like minded people was never easier. No matter what you
            love you will find people with the same interst on meethub.
          </h1>
        </Cards>
      </div>
    </div>
  );
};

export default Information;
