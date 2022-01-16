import React from 'react'
import {
  AppBar,
  Hero,
  Categories,
  PromotionItems,
  NewArrivals,
  Phones,
  Laptops,
  Tablets,
  BuyOneGetOne,
  Footer,
  Brands,
} from '../components'

function Home() {
  return (
    <div>
      <AppBar />
      <Hero />
      {/* Categories */}
      <section className="container">
        <div className="py-3 space-y-4">
          <h3 className="uppercase font-semibold text-xl text-center">
            Categories
          </h3>
          <Categories />
        </div>
      </section>
      {/* Buy 1 Get 1 */}
      <section className="bg-[#ffe618] py-2 my-2">
        <div className="container">
          <div className="py-3 space-y-4">
            {/* Section title */}
            <div className="flex justify-between items-center">
              <h3 className="uppercase font-semibold text-xl">Buy 1 Get 1</h3>
              <button className="text-black text-xs hover:border hover:border-black px-3 py-1 duration-200 active:bg-gray-200">
                View More
              </button>
            </div>
            <BuyOneGetOne />
          </div>
        </div>
      </section>
      {/* Promotion */}
      <section className="container">
        <div className="py-3 space-y-4">
          {/* Section title */}
          <div className="flex justify-between items-center">
            <h3 className="uppercase font-semibold text-xl">Promotions</h3>
            <button className="text-gray-400 text-xs hover:border px-3 py-1 duration-200 active:bg-gray-200">
              View More
            </button>
          </div>
          <PromotionItems />
        </div>
      </section>
      <hr className="bg-gray-100 my-3 h-2 border-none" />
      {/* New Arrivals */}
      <section className="container">
        <div className="py-3 space-y-4">
          {/* Section title */}
          <div className="flex justify-between items-center">
            <h3 className="uppercase font-semibold text-xl">New Arrivals</h3>
            <button className="text-gray-400 text-xs hover:border px-3 py-1 duration-200 active:bg-gray-200">
              View More
            </button>
          </div>
          <NewArrivals />
        </div>
      </section>
      {/* View By Brands */}
      <section className="container">
        <div className="py-3 space-y-4">
          <h3 className="uppercase font-semibold text-xl">View By Brands</h3>
          <Brands />
        </div>
      </section>
      <hr className="bg-gray-100 my-3 h-2 border-none" />
      {/* Phones */}
      <section className="container">
        <div className="py-3 space-y-4">
          {/* Section title */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src={require('./../assets/images/categories/cat_1.png')}
                alt="phones"
                className="w-9"
              />
              <h3 className="uppercase font-semibold text-xl">Phone</h3>
            </div>
            <button className="text-gray-400 text-xs hover:border px-3 py-1 duration-200 active:bg-gray-200">
              View More
            </button>
          </div>
          <Phones />
        </div>
      </section>
      <hr className="bg-gray-100 my-3 h-2 border-none" />
      {/* Laptops */}
      <section className="container">
        <div className="py-3 space-y-4">
          {/* Section title */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src={require('./../assets/images/categories/cat_2.png')}
                alt="phones"
                className="w-9"
              />
              <h3 className="uppercase font-semibold text-xl">Laptop</h3>
            </div>
            <button className="text-gray-400 text-xs hover:border px-3 py-1 duration-200 active:bg-gray-200">
              View More
            </button>
          </div>
          <Laptops />
        </div>
      </section>
      <hr className="bg-gray-100 my-3 h-2 border-none" />
      {/* Tablets */}
      <section className="container">
        <div className="py-3 space-y-4">
          {/* Section title */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src={require('./../assets/images/categories/cat_5.png')}
                alt="phones"
                className="w-9"
              />
              <h3 className="uppercase font-semibold text-xl">Tablet</h3>
            </div>
            <button className="text-gray-400 text-xs hover:border px-3 py-1 duration-200 active:bg-gray-200">
              View More
            </button>
          </div>
          <Tablets />
        </div>
      </section>
      {/* Footer */}
      <section className="bg-red-600">
        <Footer />
      </section>
    </div>
  )
}

export default Home
