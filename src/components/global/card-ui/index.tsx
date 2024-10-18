import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
  image: string;
  title: string;
};

const Cards = ({ children, image, title }: Props) => {
  return (
    <Card className="md:w-[20vw] h-full  p-1  shadow-lg hover:scale-[1.01] cursor-pointer transition-all duration-300 ease-in-out ">
      <CardHeader className="w-full flex  justify-center items-center">

        <div className="w-20 h-20 rounded-full  relative overflow-hidden">
        <Image
          src={image}
          alt={image}
          fill
          priority
          className="rounded-full object-cover ring"
        />

        </div>
        <h1 className="text-center font-semibold text-lg">{title}</h1>
      </CardHeader>
      <CardContent className="text-center">{children}</CardContent>
    </Card>
  );
};

export default Cards;
