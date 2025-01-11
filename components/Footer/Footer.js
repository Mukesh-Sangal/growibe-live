import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const data = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Dxp',
      url: '/dxp',
    },
    {
      title: 'Drupal Services',
      url: '/drupal-services',
    },
    {
      title: 'What We Do',
      url: '/what-we-do',
    },
    {
      title: 'Blogs',
      url: '/blogs',
    },
    {
      title: 'About us',
      url: '/about',
    },
    {
      title: 'Contact Us',
      url: '/contact',
    },
    {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/company/growibes-digital/posts/?feedView=all',
      external: true, // Mark this as an external link
    },
  ]

  return (
    <div className='container spacing flex flex-wrap md:gap-12 gap-8 bg-white'>
      <div className='lg:basis-[25%] basis-[100%]'>
        <Image
          src='/logoo.webp'
          width={300}
          height={300}
          alt='footer-logo'
          unoptimized={true}
        />
      </div>
      <div className='footer-links lg:basis-[70%] basis-[100%] text-left lg:mt-0 mt-4'>
        <div>
          <ul className='grid lg:grid-rows-4 grid-rows-6 grid-flow-col lg:gap-4 gap-1 lg:mt-4 lg:mb-16 mb-8'>
            {data.map((item, index) => (
              <li
                key={index}
                className='font-medium md:text-1xl text-lg hover:text-red py-1 px-2 text-left'
              >
                {item.external ? (
                  <a href={item.url} target='_blank' rel='noopener noreferrer'>
                    {item.title}
                  </a>
                ) : (
                  <Link href={item.url}>{item.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <p className='md:text-1xl text-lg font-outfit'>
          2024© growibes All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
