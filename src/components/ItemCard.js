import React from 'react'

function ItemCard({ name, promotion = '', price, orPrice = '' }) {
  return (
    <>
      <div className="relative rounded-t-md pb-2 cursor-pointer group">
        {/* discount */}
        <div
          className={`bg-red-500 text-white absolute top-0 left-0 ${
            promotion ? '' : 'hidden'
          }`}
        >
          <p className="text-sm px-2">30 % off</p>
        </div>
        <button className="absolute top-0 right-0 rounded-full bg-black mt-2 mr-2 hover:bg-gray-700 p-1.5 group">
          <svg
            id="i-heart"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="fill-white m-auto w-4 h-4 "
          >
            <path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </button>
        {/* img */}
        <div className="h-32 bg-blue-100 rounded-lg flex items-center">
          <img
            src={require('./../assets/images/sample_product.png')}
            className="w-7 m-auto group-hover:scale-150 duration-200"
            alt=""
          />
        </div>
        {/* Price and name */}
        <div className="mt-2 select-none">
          <p className="text-md leading-5 group-hover:text-gray-500 duration-200">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="text-md text-red-500 group-hover:text-red-400 duration-200">
            5400 Ks
          </p>
          <p
            className={`text-xs line-through group-hover:text-gray-500 duration-200 ${
              orPrice ? '' : 'hidden'
            }`}
          >
            60000 Ks
          </p>
        </div>
      </div>
    </>
  )
}

export default ItemCard
