import React from 'react'
import Image from 'next/image'
const LetsStartTopNotch = ({data, imgDom}) => {
  return (
    <div className='container spacing'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div>
          <h1
            className='font-bold text-black lg:text-4xl text-2xl xl:w-[54%] md:w-[70%]'
            dangerouslySetInnerHTML={{
              __html: data[0].field_title,
            }}
          >
          </h1>
        </div>
        <div>
          <Image
            src={`${imgDom}/${data[0].field_lets_build_image}`}
            width={1920}
            height={100}
            alt='Top Notch Image'
          />
        </div>
      </div>
    </div>
  )
}

export default LetsStartTopNotch