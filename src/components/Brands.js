import React, { useState } from 'react'
import uniqid from 'uniqid'

function Brands() {
  const [categories] = useState([
    {
      img: 'apple.png',
    },
    {
      img: 'google.png',
    },

    {
      img: 'mi.png',
    },
    {
      img: 'apple.png',
    },
    {
      img: 'google.png',
    },
    {
      img: 'mi.png',
    },
    {
      img: 'apple.png',
    },
  ])
  const categoryElements = categories.map((category) => (
    <button key={uniqid()} className="group">
      <img
        className="w-20 m-auto"
        src={require(`./../assets/images/logos/${category.img}`)}
        alt={`${category.name}`}
      />
    </button>
  ))
  return (
    <div className="grid grid-cols-5 lg:grid-cols-8 gap-y-5 gap-x-5 items-center">
      {categoryElements}
      <div className="text-center">
        <button className="hover:text-red-400 text-red-500 text-xs sm:text-sm">
          View All
        </button>
      </div>
    </div>
  )
}

export default Brands
