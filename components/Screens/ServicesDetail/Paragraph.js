import React from 'react'

const Paragraph = ({ data }) => {
  return (
    <div className='container lg:my-24 my-16'>
      <hr />
      <div className='lg:my-12 my-3'>
        <h1 className='text-blue lg:text-[38px] md:text-[27px] text-1xl mb-2 font-bold'>
          {data[0].field_title}
        </h1>
        <h2 className='text-blue lg:text-[24px] text-[18px] font-bold'>
          {data[0].field_home_page_subheading}
        </h2>
        <p className='text-[#52697a] lg:text-[20px] lg:leading-[34px] text-base my-4'>
          {data[0].field_desc}
        </p>
      </div>
      <hr />
    </div>
  )
}

export default Paragraph
