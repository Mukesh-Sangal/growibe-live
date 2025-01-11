import Link from 'next/link'
import React from 'react'

const TechDesign = ({ data }) => {
  return (
    <div
      className={data[0].field_section_5 !== '' ? 'bg-[#6a5acd]' : 'bg-white'}
    >
      <div className='container py-16'>
        <h1
          className={`xl:text-4xl lg:text-4xl md:text-3xl text-1-xl text-left font-bold mb-8 ${
            data[0].field_section_5 !== '' ? 'text-white' : 'text-black'
          }`}
          dangerouslySetInnerHTML={{
            __html: data[0].field_cta_section_heading,
          }}
        ></h1>
        <div className='grid lg:grid-cols-3 grid-cols-2 xl:gap-x-20 lg:gap-x-8 lg:gap-y-10 gap-6'>
          {data.map((item, index) => (
            <div
              className={`lg:text-[38px] text-1xl ${
                data[0].field_section_5 !== '' ? 'text-white' : 'text-black'
              }`}
              dangerouslySetInnerHTML={{
                __html: item.field_cta_subheading,
              }}
              key={index}
            ></div>
          ))}
        </div>
        <div className='lg:text-center text-right lg:mt-20 mt-12'>
          <Link
            className={`${
              data[0].field_section_5 !== ''
                ? 'tech-descover-button'
                : 'transparent-buttons'
            } lg:text-[20px] text-1xl border-2 font-medium rounded`}
            href='/contact'
          >
            Lets connect
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TechDesign
