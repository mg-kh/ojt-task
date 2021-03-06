import React, { useState } from 'react'

function AppBar() {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [scrollPos, setScrllPos] = useState(0)
  window.addEventListener('scroll', () => {
    var top = window.pageYOffset || document.documentElement.scrollTop
    setScrllPos(top)
  })

  return (
    <nav
      className={`w-full fixed top-0 z-10 sm:rounded-b-none bg-white  ${
        sideBarOpen || scrollPos > 150
          ? 'bg-gray-200 shadow-xl'
          : 'bg-opacity-0'
      }`}
    >
      <div className="container py-2">
        <div className="flex justify-between items-center">
          {/* Left */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              className={`w-48  text-white p-2 rounded-md outline-none  ${
                scrollPos > 150 ? 'bg-gray-500 focus:ring-2' : 'bg-[#00000078]'
              }`}
              placeholder="Search Product"
            />
            <img
              src={require('./../assets/images/icons/search.svg').default}
              alt="search"
              className="absolute w-4 right-3 -translate-y-1/2 top-1/2"
            />
          </div>
          {/* Center */}
          <div>
            <img
              src={require('./../assets/images/logo.jpg')}
              alt="logo"
              className="rounded-full w-14"
            />
          </div>
          {/* Right */}
          <div className="space-x-2 items-center flex">
            <select
              name=""
              className={`text-white ${
                sideBarOpen || scrollPos > 150
                  ? 'bg-slate-500 py-1 px-2 rounded-md'
                  : 'bg-transparent'
              } `}
            >
              <option value="" className="text-black">
                π²π² Ks
              </option>
              <option value="" className="text-black">
                πΊπΈ USD
              </option>
            </select>
            {/* Toggle Sidebar */}
            <button
              onClick={() => setSideBarOpen(!sideBarOpen)}
              className={`w-10 h-9 px-2 bg-white rounded-md sm:hidden hover:bg-gray-100 active:bg-gray-300 ${
                sideBarOpen || scrollPos > 150 ? 'shadow-md' : ''
              }`}
            >
              {sideBarOpen ? (
                <img
                  className="w-4 m-auto"
                  src={require('./../assets/images/icons/close.svg').default}
                  alt="close"
                />
              ) : (
                <img
                  className="w-full"
                  src={require('./../assets/images/icons/menu.svg').default}
                  alt="bag-icon"
                />
              )}
            </button>
            <button className="w-9 h-9 hidden sm:block">
              <img
                className="w-full h-full"
                src={require('./../assets/images/icons/bag.svg').default}
                alt="bag-icon"
              />
            </button>
            <button className="w-9 h-9 hidden sm:block">
              <img
                className="w-full h-full"
                src={require('./../assets/images/icons/cart.svg').default}
                alt="cart-icon"
              />
            </button>
            <button className="w-9 h-9 hidden sm:block">
              <img
                className="w-full h-full"
                src={require('./../assets/images/icons/bell.svg').default}
                alt="bell-icon"
              />
            </button>
            <button className="w-9 h-9 hidden sm:block">
              <img
                className="w-full h-full"
                src={require('./../assets/images/icons/profile.svg').default}
                alt="profile-icon"
              />
            </button>
          </div>
        </div>
      </div>

      {/* side Bar */}
      <aside
        className={`bg-gray-100 px-3 py-4 flex flex-col space-y-4 sm:hidden ${
          sideBarOpen ? '' : 'hidden'
        }
         shadow-lg`}
      >
        <div className="relative inline-block">
          <input
            type="text"
            className="w-full bg-gray-300 ring-blue-500 text-white p-2 rounded-md "
            placeholder="Search Product"
          />
          <button>
            <img
              src={require('./../assets/images/icons/search.svg').default}
              alt="search"
              className="absolute w-4 right-3 -translate-y-1/2 top-1/2"
            />
          </button>
        </div>
        <button className="flex items-center py-1 rounded-md space-x-3 hover:bg-gray-200">
          <span>
            <img
              className="w-9 h-9"
              src={require('./../assets/images/icons/cart.svg').default}
              alt="profile-icon"
            />
          </span>
          <span className="text-black">Cart</span>
        </button>
        <button className="flex items-center py-1 rounded-md space-x-3 hover:bg-gray-200">
          <span>
            <img
              className="w-9 h-9"
              src={require('./../assets/images/icons/bell.svg').default}
              alt="profile-icon"
            />
          </span>
          <span className="text-black">Notification</span>
        </button>
        <button className="flex items-center py-1 rounded-md space-x-3 hover:bg-gray-200">
          <span>
            <img
              className="w-9 h-9"
              src={require('./../assets/images/icons/profile.svg').default}
              alt="profile-icon"
            />
          </span>
          <span className="text-black">Account</span>
        </button>
      </aside>
    </nav>
  )
}

export default AppBar
