import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TechWeServe = ({ data, imgDom }) => {
  return (
    <div className='container spacing'>
      <h1 className='lg:text-4xl text-2xl font-bold mb-16 heading-tech'>
        {data[0].field_title}
      </h1>
      <div className='grid lg:grid-rows-4 grid-cols-1 lg:w-auto w-full lg:grid-flow-col  lg:gap-y-0 gap-y-12 mb-8'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex xl:gap-64 lg:gap-36 gap-8 items-center lg:mb-24 mb-12'
          >
            <h2 className='lg:text-[38px] text-1-xl font-bold md:w-56 w-40'>
              {item.field_tech_heading}
            </h2>
            <div className='flex items-center content-center lg:gap-32 md:gap-24 gap-8'>
              {item.field_tech_image_unlimited
                .split(',')
                .map((image, index) => (
                  <div key={index}>
                    <Image
                      src={`${imgDom}/${image.trim()}`} // Remove leading/trailing spaces
                      width={100}
                      height={100}
                      alt={`Image ${index + 1}`} // Provide an alt text for accessibility
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className='text-center mt-16'>
        <Link href='/contact' className='button-primary-reverse'>
          {data[0].field_section_link}
        </Link>
      </div>
    </div>
  )
}

export default TechWeServe
