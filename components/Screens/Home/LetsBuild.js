import React, { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import urlExtractor from 'utils/urlExtractor'

const LetsBuild = ({ data, imgDom }) => {
  // Destructure the first item to avoid repetitive access to `data[0]`
  const { field_lets_build_image, field_lets_build_head } = data[0]

  return (
    <div
      className='relative w-full flex items-center justify-center bg-fixed lg:min-h-[60vh] md:min-h-[40vh] min-h-[75vh] bg-no-repeat bg-cover'
      style={{
        backgroundImage: `url(${imgDom}${field_lets_build_image})`,
      }}
    >
      <div className='image-bg back parachute'>
        <div className='container flex justify-center items-center spacing h-full bef-img relative'>
          <div className='flex flex-wrap justify-between lg:gap-x-16 lg:gap-y-0 gap-y-11 items-center lg:w-full md:w-[90%]'>
            <div className='heading 2xl:w-[41%] lg:w-[50%] w-[100%]'>
              <header className='font-bold xl:text-4xl lg:text-3xl text-1-xl text-white'>
                {field_lets_build_head}
              </header>
            </div>
            <div className='titles grid grid-cols-2 content-between md:gap-y-8 md:gap-x-12 gap-y-8 gap-x-3 lg:w-[40%] w-[100%]'>
              {data.map((item, index) => {
                // Extract the link text and URL once to avoid calling urlExtractor twice
                const [linkText, linkUrl] = urlExtractor(
                  item.field_lets_build_link
                )
                return (
                  <Link
                    className='font-medium xl:text-1-xl text-1xl items-start text-white'
                    href={`/technologies/${linkUrl}`}
                    key={index}
                  >
                    {linkText}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default memo(LetsBuild)
