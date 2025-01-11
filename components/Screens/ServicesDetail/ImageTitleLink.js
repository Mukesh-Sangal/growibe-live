import React from 'react'
import Link from 'next/link'
import urlExtractor from 'utils/urlExtractor'
import Image from 'next/image'

const ImageTitleLink = ({ data, imgDom }) => {
  return (
    <div className='bg-blue lg:py-10'>
      <div className='container lg:flex lg:flex-wrap justify-center items-center py-12'>
        <div className='lg:basis-[40%] lg:pb-0 pb-12'>
          <div className='p-4'>
            <p className='title text-[#f47a20] lg:text-[20px] text-lg font-bold mb-4'>
              {data[0].field_leading_the_pack}
            </p>
            <h1 className='text-white xl:text-[38px] lg:text-[38px] lg:leading-[3rem] text-1xl mb-8 font-bold '>
              {data[0].field_title}
            </h1>
           
            {data.map((item, index) => (
              <Link
                href={urlExtractor(item.field_cta_link)[1]}
                className='  button-primary '
                key={index}
              >
                {urlExtractor(item.field_cta_link)[0]}
              </Link>
            ))}
          </div>
        </div>
        <div className='lg:basis-[50%] lg:pl-9'>
          <div className='p-4'>
            <Image
              src={`${imgDom}/${data[0].field_services_asset_management_}`}
              width={1920}
              height={600}
              alt='Services Image'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageTitleLink
