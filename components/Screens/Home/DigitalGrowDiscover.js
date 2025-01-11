import React, { memo } from 'react'
import Link from 'next/link'
import urlExtractor from 'utils/urlExtractor'

const DigitalGrowDiscover = ({ data, imgDom }) => {
  // Memoize URL extraction and split to avoid recalculating on every render
  const extractLinks = (linkString) => {
    return linkString.split(',').map((link) => {
      const [text, url] = urlExtractor(link.trim())
      return { text, url }
    })
  }

  const backgroundImage = `${imgDom}${data[0]?.field_home_cta_bg_image}`

  return (
    <div
      className='bg-cover relative w-full bg-fixed digital-grow'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='spacing'>
        <h1
          className='container grow-dis relative lg:text-4xl text-xl font-bold text-white text-left lg:mb-12 mb-8'
          dangerouslySetInnerHTML={{
            __html: data[0]?.field_home_service_title,
          }}
        />
        <div className='items-container relative flex justify-between flex-wrap'>
          {data.map((item, index) => (
            <div
              className='item services-item rounded py-7 bg-white flex items-center mt-1 h-full xl:min-h-[395px] lg:min-h-[300px] mb-4'
              key={index}
            >
              <div>
                <div
                  className={`${
                    !item.field_text_services?.trim() ? 'text-suuuuu' : ''
                  }`}
                >
                  <h1
                    className='xl:text-2xl lg:text-xl text-xl pt-6 font-bold xl:w-64 md:w-48'
                    dangerouslySetInnerHTML={{
                      __html: item.field_home_service_heading,
                    }}
                  />
                </div>
              </div>
              <div className='xl:text-xl lg:self-center lg:text-lg text-xl pt-4 text-left'>
                {item?.field_home_cta_subheading_link_i && (
                  <div className='flex flex-wrap flex-col'>
                    {extractLinks(item.field_home_cta_subheading_link_i).map(
                      ({ text, url }, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={`/technologies/${url}`}
                          className='xl:text-2xl pb-4 hover:text-[#25AAE1] text-left lg:text-xl text-xl font-bold'
                        >
                          {text}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
              {item?.field_text_subhead_link_item && (
                <div className='xl:text-2xl lg:text-xl lg:self-center text-xl'>
                  {extractLinks(item.field_text_subhead_link_item).map(
                    ({ text, url }, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={`/technologies/${url}`}
                        className='xl:text-2xl hover:text-[#25AAE1] text-left lg:text-xl text-xl font-bold'
                      >
                        {text}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='text-center w-full pt-12 font-medium text-white relative'>
          <Link href='/contact' className='transparent-buttons-reverse'>
            {data[0]?.field_home_service_link}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default memo(DigitalGrowDiscover)
