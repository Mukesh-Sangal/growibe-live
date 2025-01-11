'use client'
import React from 'react'

const Banner = ({ data }) => {
  const backend_url = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL // Ensure this is set correctly in .env

  // Construct full image URL by checking if it's relative or already absolute
  const bannerImage = data?.field_case_study_banner_image?.[0]?.url.startsWith(
    'http'
  )
    ? data.field_case_study_banner_image[0].url
    : `${backend_url}${data.field_case_study_banner_image[0].url}`

  const bannerTitle =
    data?.field_case_study_banner_title?.[0]?.value || '' // Fallback title

  return (
    <div
      className='innerBanner bg-cover lg:h-[400px] h-[125px] bg-no-repeat bg-center mt-[72px]'
      style={{ backgroundImage: `url(${bannerImage})` }} // Ensure the full URL is used here
    >
      <div className='container spacing flex items-center h-full'>
        <h1 className='font-bold text-white lg:text-4xl md:text-2xl text-1-xl'>
          {bannerTitle}
        </h1>
      </div>
    </div>
  )
}

export default React.memo(Banner) // Use React.memo to prevent unnecessary re-renders
