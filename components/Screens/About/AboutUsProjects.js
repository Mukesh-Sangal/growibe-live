import Image from 'next/image'
import React from 'react'

const AboutUsProjects = ({data}) => {
  return (
    <div
      className='bg-cover lg:h-[400px] h-[500px] relative'
      style={{ backgroundImage: 'url(/aboutProject.png)' }}
    >
      <div className='about about-opacity'>
        <div className='container spacing grid lg:grid-cols-4 grid-cols-2 h-full xl:gap-30 md:gap-16 gap-8 content-center '>
          {data.map((item, index) => (
            <div className='flex flex-col ' key={index}>
              <h1 className='lg:text-4xl font-bold text-2xl text-white'>
                {item.field_counter_up}
              </h1>
              <div className='text-white lg:text-[38px] text-[26px]'>
                {item.field_portfolio_items}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUsProjects