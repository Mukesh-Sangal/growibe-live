import React, { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image' // Optimized Next.js Image component

const BannerLayout = React.memo(({ data, imgDom }) => {
  const bannerImageUrl = useMemo(
    () => `${imgDom}/${data[0]?.field_home_banner_image}`,
    [data, imgDom]
  )

  if (!data || data.length === 0) return null // Safeguard for empty data

  return (
    <header className='relative flex h-[80vh] lg:bg-center bg-right bg-no-repeat bg-cover'>
      <Image
        src={bannerImageUrl}
        alt={data[0]?.field_home_banner_title || 'Banner Image'}
        layout='fill'
        objectFit='cover'
        priority // Loads the image with higher priority for banner
        className='z-[-1]' // Image behind content
      />
      <div className='container flex lg:items-center items-end relative z-10'>
        <div className='p-6 md:p-0 w-full md:w-1/2 lg:mb-0 md:mb-16 mb-8'>
          <h1 className='font-light text-white lg:w-[80%] w-full 2xl:text-[4.5rem] xl:text-[3.5rem] text-1xl leading-snug'>
            {data[0]?.field_home_banner_title}
          </h1>
          <div className='banner_link flex justify-start lg:pt-8 pt-4 gap-9'>
            <Link href='/contact' passHref legacyBehavior>
              <a className='text-white text-center font-light lg:text-[1.25rem] md:text-lg text-base border border-white hover:bg-white hover:text-black transition-all duration-200 ease-in lg:p-4 p-2 rounded'>
                {data[0]?.field_home_banner_link}
                <span className='inline ml-2'>➔</span>
              </a>
            </Link>
            <Link href='/contact' passHref legacyBehavior>
              <a className='text-white text-center font-light lg:text-[1.25rem] md:text-lg text-base border border-white hover:bg-white hover:text-black transition-all duration-200 ease-in lg:p-4 p-2 rounded'>
                {data[0]?.field_home_banner_know_more_link}
                <span className='inline ml-2'>➔</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
})

export default BannerLayout
