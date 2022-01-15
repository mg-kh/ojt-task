import React from 'react'
import { ImgCarousel } from './index'
import useData from '../useHooks/useData'

function NewArrivals() {
  const elements = useData()

  return (
    <div>
      <div className="mb-5">{elements()}</div>
      <ImgCarousel />
    </div>
  )
}

export default NewArrivals
