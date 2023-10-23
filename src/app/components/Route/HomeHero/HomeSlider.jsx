"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./styles.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function HomeSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='bg-green-900 text-red-950 h-[100%]'>lorem asjfakfjka ajfaf afjafnafaf akfasf asfnas faskfa sfakf asfj</SwiperSlide>
        <SwiperSlide className='bg-red-900' >Slide 2</SwiperSlide>
        <SwiperSlide className='bg-green-700'>Slide 3</SwiperSlide>
        <SwiperSlide className='bg-green-200'>Slide 4</SwiperSlide>
        <SwiperSlide className='bg-green-900'>Slide 5</SwiperSlide>

      </Swiper>
    </>
  );
}


export default HomeSlider;