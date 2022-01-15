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
      <SwiperSlide key={uniqid()}>
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
      <SwiperSlide key={uniqid()}>
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
        slidesPerView={2.5}
        spaceBetween={25}
        centeredSlides={false}
        loop={true}
        breakpoints={{
          '576': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 6,
            spaceBetween: 50,
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
