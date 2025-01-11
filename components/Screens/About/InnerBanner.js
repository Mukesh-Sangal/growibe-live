import React from 'react'

const InnerBanner = ({data, imgDom}) => {
  return (
    <div
      className='innerBanner bg-cover lg:h-[500px] h-[220px] mt-[72px]  bg-no-repeat bg-center'
      style={{
        backgroundImage: `url(${imgDom}/${data[0].field_banner_image})`
      }}
    >
      <div className='container spacing flex items-center h-full'>
        <h1 className='font-bold text-white lg:text-4xl md:text-2xl text-1-xl'>
          {data[0].field_banner_title}
        </h1>
      </div>
    </div>
  )
}

export default InnerBanner