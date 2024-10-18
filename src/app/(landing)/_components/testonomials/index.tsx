"use client";
import React from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCustomButton from "@/components/swiper/custom-swiper";

type Props = {};

const Testonomials = (props: Props) => {
  return (
    <div className="h-screen w-full lg:px-40 px-2">
      <div className="font-semibold text-[3rem] py-10">
        <h1 className="text-gray-800">See what our users say</h1>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
            cssMode={true}
          loop={true}
          modules={[Pagination, Navigation, A11y]}
          className="mySwiper  md:w-1/2 lg:w-[70vw] h-[70vh]  lg:h-96  rounded-md gap-4 cursor-grab "
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperCustomButton />
        </Swiper>
      </div>
    </div>
  );
};

export default Testonomials;
