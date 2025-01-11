import React from 'react'
import Image from 'next/image'

const ServicesSecond = ({ data, imgDom }) => {
  return (
    <>
      <div
        className={`grid ${
          data[0].field_grid_columns !== ''
            ? 'lg:grid-cols-3 grid-cols-1 lg:pb-20 xl:gap-24 lg:gap-16'
            : 'lg:grid-cols-4 grid-cols-1 py-16 xl:gap-24 lg:gap-16'
        }  container m-auto `}
      >
        {data.map((item, index) => (
          <div className='px-0 lg:pb-4 pb-16 flex flex-col' key={index}>
            <div
              className={`${
                item.field_grid_columns !== '' ? 'order-2' : 'order-2'
              }`}
            >
              <h1
                className={`${
                  item.field_grid_columns !== ''
                    ? 'text-lg lg:text-[20px] mt-4'
                    : ' lg:text-3x text-2xl pb-5 mt-8'
                } font-bold text-blue`}
              >
                {item.field_counter}
              </h1>
              <p
                className={` ${
                  item.field_grid_columns !== ''
                    ? 'text-base lg:text-[18px]  mt-2 text-[#52697a]'
                    : 'text-lg lg:text-xl pb-4  text-blue'
                } `}
              >
                {item.field_desc}
              </p>
            </div>
            <div>
              <Image
                src={`${imgDom}${item.field_banner_icon}`}
                width={500}
                height={500}
                className='object-contain w-full'
                alt='Counter Items'
              />
            </div>
          </div>
        ))}
      </div>
      {data[0].field_grid_columns !== '' && (
        <hr className='container lg:w-[80%] w-[95%] m-auto pb-16' />
      )}
    </>
  )
}

export default ServicesSecond
