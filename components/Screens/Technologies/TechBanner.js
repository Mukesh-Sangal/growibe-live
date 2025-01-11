import React from 'react'
import Link from 'next/link'

const TechBanner = ({ data, imgDom }) => {
  return (
    <div
      className='relative innerBanner bg-cover h-auto lg:p-12 lg:pl-8 mt-[72px] bg-no-repeat bg-center '
      style={{
        backgroundImage: `url(${imgDom}${data[0].field_home_banner_image})`,
      }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative container spacing'>
        <div className='md:w-[500px]'>
          <h1 className='font-bold text-white  lg:w-[500px] md:w-[300px] w-full  lg:text-[50px] md:text-[36px] text-[28px]'>
            {data[0].field_home_banner_title}
          </h1>
          <hr />
          <h2 className='lg:text-[px] text-[22px] lg:leading-[31.32px] text-white font-bold'>
            Tailored Strategies to ensure your success at each Digital Touch
            point
          </h2>
          <h3 className='lg:text-[24px] text-[20px] text-white mb-6'>
            We assist you Discover ,Innovate and Build robust tech solutions to
            excel in your industry using latest of AI technology to ensure 10x
            Growth
          </h3>
        </div>
        <div className='flex w-full items-start text-center flex-wrap lg:gap-8 gap-2'>
          <Link className='technologies-expertise' href='/contact'>
            {data[0].field_home_banner_link}
          </Link>
          {/* <Link
            className='md:p-4 p-2 lg:text-[20px] text-base inline-block lg:w-52 w-40 font-bold bg-[#bcbbe07f] rounded border-2 hover:border-[#bcbbe07f] hover:bg-white transition-all duration-500 ease-in-out'
            href='/contact'
          >
            {data[0].field_home_banner_know_more_link}
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default TechBanner
