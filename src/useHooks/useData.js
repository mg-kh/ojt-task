import { useState } from 'react'
import { ItemCard } from './../components/index'
import uniqid from 'uniqid'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const useData = (isPromo) => {
  const [items] = useState([
    {
      name: 'Sample product with long name',
      price: '5400',
    },
    {
      name: 'Sample product with long name',
      price: '5400',
    },
    {
      name: 'Sample product with long name',
      price: '5400',
    },
    {
      name: 'Sample product with long name',
      price: '5400',
    },
    {
      name: 'Sample product with long name',
      price: '5400',
    },
    {
      name: 'Sample product with long name',
      price: '5400',
    },
  ])

  const [promoItems] = useState([
    {
      name: 'Sample product with long name',
      promotion: '30',
      price: '5400',
      orPrice: '6000',
    },
    {
      name: 'Sample product with long name',
      promotion: '30',
      price: '5400',
      orPrice: '6000',
    },
    {
      name: 'Sample product with long name',
      promotion: '30',
      price: '5400',
      orPrice: '6000',
    },
    {
      name: 'Sample product with long name',
      promotion: '30',
      price: '5400',
      orPrice: '6000',
    },
    {
      name: 'Sample product with long name',
      promotion: '30',
      price: '5400',
      orPrice: '6000',
    },
    {
      name: 'Sample product with long name',
      promotion: '30',
      price: '5400',
      orPrice: '6000',
    },
  ])

  const elements = items.map((item) => {
    return (
      <SwiperSlide key={uniqid()} className="p-2 pl-0.5">
        <ItemCard
          name={item.name}
          promotion={item.promotion}
          price={item.price}
          orPrice={item.orPrice}
        />
      </SwiperSlide>
    )
  })

  const promoElements = promoItems.map((item) => {
    return (
      <SwiperSlide key={uniqid()} className="p-2 pl-0.5">
        <ItemCard
          name={item.name}
          promotion={item.promotion}
          price={item.price}
          orPrice={item.orPrice}
        />
      </SwiperSlide>
    )
  })

  const swiperElement = () => {
    return (
      <Swiper
        slidesPerView={1.6}
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        breakpoints={{
          '400': {
            slidesPerView: 2.4,
            spaceBetween: 20,
          },
          '576': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 4,
          },
          '1024': {
            slidesPerView: 5,
          },
          '1200': {
            slidesPerView: 6,
          },
        }}
      >
        {isPromo ? promoElements : elements}
      </Swiper>
    )
  }

  return swiperElement
}

export default useData
