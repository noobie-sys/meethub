import React from "react";
import {ArrowRight, ArrowLeft, MoveRight , MoveLeft} from 'lucide-react'
import { useSwiper } from "swiper/react";

const SwiperCustomButton = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        className="absolute z-20 top-[9.5rem] left-0 text-violet-700  flex justify-center items-center  transition-all  rounded-full cursor-pointer p-2 text-2xl bg-slate-100"
        onClick={() => swiper.slidePrev()}
      >
        <ArrowLeft className="" />
      </button>

      <button
        className="absolute z-20 top-[9.5rem] right-0  flex justify-center items-center  transition-all  text-2xl rounded-full cursor-pointer p-2 bg-slate-100 text-violet-700"
        onClick={() => swiper.slideNext()}
      >
        <ArrowRight className="" />
      </button>
    </div>
  );
};

export default SwiperCustomButton;