'use client'
import React from 'react'

const Banner = ({ data }) => {
  return (
    <div
      className='innerBanner bg-cover lg:h-[500px] h-[300px] mt-[72px] lg:mb-16 mb-12  bg-no-repeat bg-center'
      style={{
        backgroundImage: `url(${data.field_case_study_banner_image[0].url})`,
      }}
    >
    </div>
  )
}
export default Banner
