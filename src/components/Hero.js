import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'

import SwiperCore, { Autoplay, EffectFade } from 'swiper'

SwiperCore.use([EffectFade, Autoplay])

function Hero() {
  return (
    <>
      <Swiper
        effect={'fade'}
        loop={true}
        speed={1000}
        allowTouchMove={false}
        autoplay={{
          delay: 2500,
        }}
        className="h-52 sm:h-full"
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src={require('./../assets/images/banners/banner_1.jpg')}
            alt="bag-icon"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src={require('./../assets/images/banners/banner_2.jpg')}
            alt="bag-icon"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src={require('./../assets/images/banners/banner_3.jpg')}
            alt="bag-icon"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Hero
