import Image from 'next/image'
import React, { memo } from 'react'

const Location = memo(({ data, imgDom }) => {
  // Destructure data for easier access
  const { field_location_title } = data[0]

  return (
    <div className='bg-[#25AAE1] lg:p-16 md:p-12 p-4'>
      <h1 className='lg:text-4xl text-white pb-8 font-bold text-2xl text-left container'>
        {field_location_title}
      </h1>
      <div className='container grid md:grid-cols-2 grid-cols-1 xl:gap-x-32 md:gap-x-12 gap-y-24'>
        {data.map((item, index) => {
          const {
            field_office_,
            field_office_location,
            field_office_address,
            field_office_phone,
            field_office_email,
          } = item

          return (
            <div key={index}>
              <div className='relative'>
                <Image
                  src={`${imgDom}/${field_office_}`}
                  width={300}
                  height={500}
                  alt={`Office at ${field_office_location}`} // Add alt text for better accessibility
                  className='object-contain w-full'
                  priority // Use priority to load the image faster
                />
                <div className='location font-bold text-1xl text-white absolute bottom-2 left-2'>
                  {field_office_location}
                </div>
              </div>
              <div className='address w-[80%] text-left mt-7'>
                <p className='text-white text-left text-lg leading-loose'>
                  {field_office_address}
                </p>
                <p className='text-white text-left mt-4'>
                  <strong>Call Us</strong>
                </p>
                <p className='text-[#e3f307] mt-1'>{field_office_phone}</p>
                <p className='text-white text-left mt-4'>
                  <strong>Email</strong>
                </p>
                <p className='text-[#e3f307] mt-1'>{field_office_email}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
})

export default Location
