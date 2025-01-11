import React from 'react'

const OurMission = ({data}) => {
  return (
    <div className='container spacing text-left'>
      <div className='w-full m-auto'>
        <h1
          className='font-bold text-black lg:text-4xl text-2xl pb-8'
          dangerouslySetInnerHTML={{
            __html: data[0].field_title,
          }}
        >
        </h1>
        <p
          className='text-black text-[24px] font-medium pb-8'
          dangerouslySetInnerHTML={{
            __html: data[0].field_desc,
          }}
        ></p>
        <hr />
      </div>
    </div>
  )
}

export default OurMission