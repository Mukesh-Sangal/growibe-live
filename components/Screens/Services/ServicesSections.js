import React, { memo } from 'react'
import Image from 'next/image'

const ServicesSections = memo(
  ({ bgColor, color, desColor, title, desc, icon, mobileicon }) => {
    return (
      <div
        className={`lg:p-10 p-7 ${bgColor} flex flex-col justify-start flex-wrap gap-4`}
      >
        <div className='flex items-center gap-4'>
          <picture>
            <source srcSet={mobileicon} media='(max-width: 767px)' />
            <source srcSet={icon} media='(min-width: 768px)' />
            <img
              src={icon} // fallback
              alt='Drupal Services'
              className='md:w-[120px] md:h-[120px] w-[80px] h-[80px]'
              width={100}
              height={100}
              loading='lazy'
            />
          </picture>
          <h3
            className={`xl:text-[38px] md:text-1-xl text-xl ${color} font-semibold`}
            dangerouslySetInnerHTML={{ __html: title }} // Be sure to sanitize if needed
          />
        </div>
        <div>
          <p className={`md:text-1xl text-xl ${desColor} lg:mb-10 mb-4`}>
            {desc}
          </p>
        </div>
      </div>
    )
  }
)

export default ServicesSections
