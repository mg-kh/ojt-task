import React, { useState } from 'react'

function AppBar() {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <nav
      className={`absolute w-full z-10 sm:rounded-b-none sm:bg-transparent  ${
        sideBarOpen ? 'bg-gray-200 rounded-b-2xl' : ''
      }`}
    >
      <div className="container py-1">
        <div className="flex justify-between items-center">
          {/* Left */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              className="w-48 bg-[#00000078] text-white p-2 rounded-md outline-none"
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
              src={require('./../assets/images/logo.png')}
              alt="logo"
              className="rounded-full w-14"
            />
          </div>
          {/* Right */}
          <div className="space-x-2 items-center flex">
            {/* Toggle Sidebar */}
            <button
              onClick={() => setSideBarOpen(!sideBarOpen)}
              className="w-10 h-9 px-2 bg-white rounded-md sm:hidden hover:bg-gray-100 active:bg-gray-300"
            >
              {sideBarOpen ? (
                <img
                  className="w-4 m-auto"
                  src={require('./../assets/images/icons/close.svg').default}
                  alt="bag-icon"
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
        border rounded-b-2xl`}
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
