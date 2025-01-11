import Link from 'next/link';
import React from 'react'
import urlExtractor from 'utils/urlExtractor'

const GlobalCta = ({data}) => {
  return (
    <div className='cta-bg'>
      <div class='left-gradient'></div>
      <div class='right-gradient'></div>
      <div class='container z-1 relative py-16 pb-24'>
        <div className='lg:w-2/4 w-full'>
          <h1
            className='lg:text-[38px] text-1-xl text-white font-bold'
            dangerouslySetInnerHTML={{
              __html: data[0].field_global_cta_title,
            }}>
          </h1>
          <p className='lg:text-1xl text-lg text-white'>
            {data[0].field_global_cta_description}
          </p>
          <div className='mt-8'>
            <Link
              href={urlExtractor(data[0].field_global_cta_link)[1]}
              className='brand-expertise-reverse'
            >
              {urlExtractor(data[0].field_global_cta_link)[0]}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalCta