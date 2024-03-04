import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Style from "./style.module.css";
import "./main.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider({ slider }) {
  return (
    <>
      <div className={Style.slider}>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slider?.map((elem) => {
            return (
              <SwiperSlide key={elem.id}>
                <img src={elem.image} alt={elem.alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
