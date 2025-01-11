import React from 'react'
import Image from 'next/image'
const OurTeam = ({ data, imgdom }) => {
  return (
    <div className='container lg:pb-60 pb-30 lg:pt-30 pt-12 bg-white'>
      <div className=''>
        <h1 className='text-black font-bold text-center md:text-4xl text-2xl pb-6'>
          {data[0].field_title}
        </h1>
        <p className='text-black text-center text-[38px] font-medium pb-12'>
          {data[0].field_home_page_subheading}
        </p>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-12 gap-x-8 content-between'>
          {data.map((item, index) => (
            <div className='text-center' key={index}>
              <Image
                className='mx-auto mb-4 object-contain max-w-[100%]'
                src={`${imgdom}${item.field_lets_build_image}`}
                width={200}
                height={200}
                alt={data[0].field_title}
              />
              <h2 className='text-black font-bold lg:text-[38px] text-lg mb-2'>
                {item.field_name}
              </h2>
              <h3 className='text-black lg:text-[24px] text-base'>
                {item.field_position}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam