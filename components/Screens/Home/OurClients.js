import Image from 'next/image'
import React, { memo, useMemo } from 'react'

const OurClients = ({ data, imgDom }) => {
  // Use useMemo to avoid recalculating the image paths on every render
  const imagePaths = useMemo(
    () => data[0]?.field_clients_logos.split(', '),
    [data]
  )

  return (
    <div className='text-center lg:py-8 py-4'>
      <div className='container'>
        <div className='lg:grid lg:grid-cols-4 gap-8 items-center flex justify-center flex-wrap'>
          {imagePaths?.map((path, index) => (
            <Image
              key={index}
              src={`${imgDom}/${path}`}
              alt={`Client Image ${index + 1}`}
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
              className='object-contain'
              sizes='(max-width: 1024px) 50px, 100px' // Responsive sizes
              loading='lazy' // Ensure lazy loading
              quality={75} // Reduce image quality slightly for faster loading
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Use React.memo to optimize re-renders
export default memo(OurClients)
