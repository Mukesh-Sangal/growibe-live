import React from 'react'

const ContactBanner = ({ title }) => {
  return (
    <div
      className='innerBanner bg-cover lg:h-[400px] h-[220px] mt-[72px]  bg-no-repeat bg-center'
      style={{ backgroundImage: `url('/aboutBanner.webp')` }}
    >
      <div className='container spacing flex items-center justify-end h-full'>
        <h1 className='font-bold text-white 2xl:text-4xl lg:text-3xl md:text-1-xl text-1xl'>
          {title}
        </h1>
      </div>
    </div>
  )
}

export default ContactBanner
