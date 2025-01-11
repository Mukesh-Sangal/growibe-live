import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const TechGrow = ({ data, imgDom }) => {
  return (
    <div className='relative w-full flex items-center justify-center'>
      <Image
        className='2xl:h-[65vh] xl:h-[80vh] lg:h-[55vh] md:h-[65vh] h-[90vh] w-full object-cover object-left-top flex items-center justify-center'
        src={`${imgDom}/${data[0].field_lets_build_image}`}
        width={1920}
        height={500}
        alt={data[0].field_lets_build_head}
      />
      <div className='image-bg back'>
        <div className='container text-white lg:py-24 py-16'>
          <h1 className='xl:text-4xl lg:text-4xl md:text-3xl text-2xl text-left font-bold mb-8 text-white'>
            {data[0].field_lets_build_head}
          </h1>
          <div className='grid lg:grid-cols-3 grid-cols-2 xl:gap-x-28 lg:gap-x-14 gap-x-4  lg:gap-y-14 gap-y-10 '>
            {data.map((item, index) => (
              <div className='md:text-[38px] text-1xl text-white' key={index}>
                {item.field_subhead}
              </div>
            ))}
          </div>
          <div className='text-right mt-8 mb-8'>
            <Link className='transparent-buttons-reverse' href='/contact'>
              Lets connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechGrow