import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperCore, { Navigation } from 'swiper'
import './../App.css'

// install Swiper modules
SwiperCore.use([Navigation])

function ImgCarousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      navigation={true}
      loop={true}
      className="relative"
      breakpoints={{
        '576': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 1.5,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
        <img src={require('./../assets/images/ads/ad1.png')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('./../assets/images/ads/ad2.png')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('./../assets/images/ads/ad3.png')} alt="" />
      </SwiperSlide>
    </Swiper>
  )
}

export default ImgCarousel
