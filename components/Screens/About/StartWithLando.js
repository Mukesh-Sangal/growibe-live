import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const StartWithLando = ({data, imgdom}) => {
  return (
    <div className='container spacing'>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 h-full place-items-center '>
        <div className='pl-26'>
          <h1 className='md:text-4xl text-2xl font-bold mb-4 xl:w-[70%]'>
            {data[0].field_title}
          </h1>
          <p className='lg:text-[38px] text-1xl font-medium mb-12'>
            {data[0].field_home_page_subheading}
          </p>
          <Link href='/contact' className='transparent-buttons'>
            {data[0].field_cta_link}
          </Link>
        </div>
        <div>
          <Image
            className='object-cover'
            src={`${imgdom}${data[0].field_lets_build_image}`}
            width={1920}
            height={100}
            alt={data[0].field_title}
          />
        </div>
      </div>
    </div>
  )
}

export default StartWithLando