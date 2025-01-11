import React from 'react'
import Link from 'next/link'

const Banner = ({ title, imgurl }) => {
  return (
    <div
      className='relative innerBanner bg-cover h-auto lg:p-12 lg:pl-8 mt-[72px] bg-no-repeat bg-center '
      style={{
        backgroundImage: `url(${imgurl})`,
      }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative container spacing items-center h-full'>
        <div className='md:w-[500px]'>
          <h1 className='font-bold text-white lg:text-[50px] md:text-[36px] text-[28px]'>
            {title}
          </h1>
          <hr />
          <h2 className='lg:text-[24px] text-[22px] lg:leading-[31.32px] text-white font-bold'>
            Drive Digital Innovation with Elite Drupal Solutions
          </h2>
          <h3 className='lg:text-[24px] text-[20px] text-white mb-6'>
            Partner with us for unparalleled Drupal expertise, delivering
            scalable solutions and proactive support that elevate and empower
            your digital success.
          </h3>
          <Link
            href='/contact'
            className='service-expertise'
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
