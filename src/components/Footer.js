import React from 'react'

function Footer() {
  return (
    <div>
      <div className="container py-5">
        <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-3 md:gap-y-0">
          {/* Service */}
          <article className="text-white">
            <h4 className="mb-3 font-semibold">Customer Service</h4>
            <a href="/" className="text-sm hover:underline">
              Terms and Privacy Policy
            </a>
            <br />
            <a href="/" className="text-sm hover:underline">
              Return Policy
            </a>
          </article>
          {/* Lan */}
          <article className="text-white">
            <h4 className="mb-3 font-semibold">Language</h4>
            <a href="/" className="text-sm hover:underline">
              Myanmar (Unicode)
            </a>
            <br />
            <a href="/" className="text-sm hover:underline">
              English
            </a>
          </article>
          {/* Contact */}
          <article className="text-white">
            <h4 className="mb-3 font-semibold">Contact Us</h4>
            <a href="/" className="text-sm hover:underline">
              No 178, MyayKha St, Mayangone, 6 Miles, Yangon, Myanmar
            </a>
            <br />
            <a href="tel:09345454345" className="text-sm hover:underline">
              +959 345 454 345
            </a>
          </article>
        </div>
      </div>
      {/* Info Footer Bar */}
      <div className="bg-gray-200 py-3">
        <p className="text-center text-sm font-semibold">
          All rights reserved. Made with all the loves in ShopDoora Co.,Ltd.
        </p>
      </div>
    </div>
  )
}

export default Footer
