/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Contact from './Contact'

export default function Footer() {
  return (
    <section>
      <div className="bg-[url('/assets/images/footer-bg.png')] bg-cover w-full z-0 py-16 px-10">
        <div className="flex items-center space-x-8">
          <div className="flex-auto">
            <img
              src="/assets/images/logo.svg" alt="logo"
            />
          </div>
          <Contact />
        </div>
      </div>
    </section>
  )
}
