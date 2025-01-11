import Image from 'next/image'
import Link from 'next/link'
import React,  { useEffect } from 'react'
import urlExtractor from 'utils/urlExtractor'
import Aos from 'aos'
import 'aos/dist/aos.css'

const BrandManagement = ({ data, imgDom }) => {
  useEffect(() => {
    Aos.init({ duration: 600, disable: 'mobile', once: true })
  })
  return (
    <div className='container lg:py-24 lg:py-16'>
      <div className='lg:flex lg:flex-wrap justify-between lg:py-8 py-4'>
        <div
          className={`${
            data[0].field_image_position !== '' ? 'order-2 ' : ''
          } basis-[48%]`}
        >
          <div className='w-11/12'>
            <Image
              src={`${imgDom}${data[0].field_banner_image}`}
              width={1920}
              height={500}
              alt='brand'
              data-aos-offset='120'
              data-aos={`${
                data[0].field_image_position !== '' ? 'fade-left' : 'fade-right'
              }`}
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
            />
          </div>
        </div>
        <div className='basis-[44%] lg:mt-0 mt-10'>
          <div>
            <h1 className='lg:text-[20px] text-base text-[#52697a] font-bold'>
              {data[0].field_banner_title_1}
            </h1>
            <h2 className='lg:text-[38px] text-[24px] text-blue font-bold'>
              {data[0].field_home_page_subheading}
            </h2>
            <p className='lg:text-[24px]  text-[18px] text-[#52697a] mt-4 lg:mb-20 mb-8'>
              {data[0].field_desc_2}
            </p>
            <div className='lg:mb-16 mb-8'>
              {data.map((item, index) => (
                <div key={index} className='flex flex-wrap gap-4'>
                  {item.field_cta_link.split(',').map((link, linkIndex) => {
                    const [text, url] = urlExtractor(link.trim())
                    return (
                      <Link
                        key={linkIndex}
                        href={url}
                        className='brand-expertise'
                      >
                        {text}
                      </Link>
                    )
                  })}
                </div>
              ))}
            </div>

            <hr />
            {data[0].field_related_resources_title && (
              <div className='lg:mt-12'>
                <p className='lg:text-xl text-base text-blue mt-4 lg:mb-3 mb-2 font-bold'>
                  {data[0].field_related_resources_title}
                </p>
                {data[0].field_related_resources_link && (
                  <div className='related-links'>
                    {data.map((item, index) => (
                      <div key={index}>
                        {item.field_related_resources_link
                          .split(',')
                          .map((link, linkIndex) => {
                            const [text, url] = urlExtractor(link.trim())
                            return (
                              <div className='mb-4' key={linkIndex}>
                                <Link
                                  href={url}
                                  className='lg:text-lg text-base text-[#26a4dd]  rounded underline'
                                >
                                  {text}
                                </Link>
                              </div>
                            )
                          })}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandManagement
