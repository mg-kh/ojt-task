import React, { useState } from 'react'
import uniqid from 'uniqid'

function Categories() {
  const [categories] = useState([
    {
      name: 'Sample Category',
      img: 'cat_1.png',
    },
    {
      name: 'Sample Category',
      img: 'cat_2.png',
    },

    {
      name: 'Sample Category',
      img: 'cat_3.png',
    },
    {
      name: 'Sample Category',
      img: 'cat_2.png',
    },
    {
      name: 'Sample Category',
      img: 'cat_4.png',
    },
    {
      name: 'Sample Category',
      img: 'cat_5.png',
    },
    {
      name: 'Sample Category',
      img: 'cat_4.png',
    },
  ])
  const categoryElements = categories.map((category) => (
    <button key={uniqid()} className="group">
      <img
        className="w-20 m-auto"
        src={require(`./../assets/images/categories/${category.img}`)}
        alt={`${category.name}`}
      />
      <p className="text-center text-xs md:text-sm lg:px-1 group-hover:text-gray-600">
        {category.name}
      </p>
    </button>
  ))
  return (
    <div className="grid grid-cols-5 lg:grid-cols-8 gap-y-5 gap-x-5 items-center">
      {categoryElements}
      <div className="text-center">
        <button className="rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-100">
          <svg
            version="1.1"
            id="Layer_1"
            viewBox="0 0 92 92"
            className="fill-gray-400 w-14 p-1"
          >
            <path
              id="XMLID_30_"
              d="M21,53c-1.8,0-3.7-0.8-5-2.1c-1.3-1.3-2-3.1-2-4.9c0-1.8,0.8-3.6,2-5c1.3-1.3,3.1-2,5-2c1.8,0,3.6,0.8,4.9,2
              c1.3,1.3,2.1,3.1,2.1,5c0,1.8-0.8,3.6-2.1,4.9C24.6,52.2,22.8,53,21,53z M50.9,50.9c1.3-1.3,2.1-3.1,2.1-4.9c0-1.8-0.8-3.6-2.1-5
              c-1.3-1.3-3.1-2-4.9-2c-1.8,0-3.7,0.8-5,2c-1.3,1.3-2,3.1-2,5c0,1.8,0.8,3.6,2,4.9c1.3,1.3,3.1,2.1,5,2.1
              C47.8,53,49.6,52.2,50.9,50.9z M75.9,50.9c1.3-1.3,2.1-3.1,2.1-4.9c0-1.8-0.8-3.6-2.1-5c-1.3-1.3-3.1-2-4.9-2c-1.8,0-3.7,0.8-5,2
              c-1.3,1.3-2,3.1-2,5c0,1.8,0.8,3.6,2,4.9c1.3,1.3,3.1,2.1,5,2.1C72.8,53,74.6,52.2,75.9,50.9z"
            />
          </svg>
        </button>
        <p className="text-xs md:text-sm lg:px-1 text-gray-400">View All</p>
      </div>
    </div>
  )
}

export default Categories
