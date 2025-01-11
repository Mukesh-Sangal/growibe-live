import React from 'react'
import Image from 'next/image';

const ServicesBanner = ({ data, imgDom }) => {
  return (
    <div
      className='service-bef lg:p-12 lg:pl-8 relative mt-[72px]'
    >
      <div className='container flex flex-wrap justify-between relative'>
        <div className='xl:basis-[33%] lg:basis-[45%] w-full lg:order-1 order-2 lg:mt-12 mt-16'>
          <div className='desc'>
            <h1 className='lg:text-[50px] text-[36px] text-white font-bold mb-8 '>
              {data[0].field_banner_title}
            </h1>
            <hr />
            <h3 className='lg:text-[24px] text-[22px] lg:leading-[31.32px] text-white font-bold'>
              {data[0].field_heading}
            </h3>
            <p className='lg:text-[24px] text-[20px] text-white mb-12'>
              {data[0].field_home_page_subheading}
            </p>
          </div>
        </div>
        <div className='lg:basis-[49%] w-full  overflow-hidden lg:order-2 order-1'>
        </div>
      </div>
    </div>
  )
}

export default ServicesBanner