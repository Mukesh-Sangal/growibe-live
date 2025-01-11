import React, { memo } from 'react'
import Link from 'next/link'

const HireaDrupalDeveloper = ({ data }) => {
  // Destructure the necessary fields from the first item in the data array
  const { field_cta_section_heading, field_cta_link } = data[0]

  return (
    <div className='container lg:py-28 py-12 flex lg:flex-nowrap flex-wrap gap-6 xl:gap-0'>
      <div className='flex lg:w-[48%] justify-between flex-wrap items-baseline lg:flex-col'>
        {/* Use memoized content for the section heading and link */}
        <div className='md:w-auto lg:w-[60%] w-full'>
          <h1 className='font-bold xl:text-4xl md:text-2xl text-xl'>
            {field_cta_section_heading}
          </h1>
        </div>
        <div className='lg:mt-0 mt-8 lg:ml-0 md:ml-12'>
          <Link className='transparent-buttons' href='/contact'>
            {field_cta_link}
          </Link>
        </div>
      </div>

      {/* Memoize the mapping of items */}
      <div className='grid grid-cols-2 lg:w-[48%] w-full gap-x-8 lg:gap-x-14 md:gap-y-8 gap-y-4 lg:pt-0 pt-8'>
        {data.map((item, index) => (
          <div key={index}>
            <p className='font-medium xl:text-1-xl md:text-1xl text-xl'>
              {item.field_cta_subheading}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Use React.memo to optimize rendering
export default memo(HireaDrupalDeveloper)
