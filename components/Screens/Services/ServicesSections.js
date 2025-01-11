import React, { memo } from 'react'
import Image from 'next/image'

const ServicesSections = memo(({ bgColor, color, desColor, title, desc, icon }) => {
  return (
    <div
      className={`lg:p-10 p-7 ${bgColor} flex flex-col justify-start flex-wrap gap-4`}
    >
      <div className='flex items-center gap-4'>
        <Image src={icon} alt='Drupal Services' width={100} height={100} />
        <h3
          className={`lg:text-[38px] text-xl ${color} font-semibold`}
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
})

export default ServicesSections
