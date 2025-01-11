'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const pathname = usePathname()
  // console.log(pathname,'pathname')
  const menu = [
    {
      title: 'Home',
      url: '/',
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
      title: 'Dxp',
      url: '/dxp',
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
  ]
  const closeMenu = () => {
    setIsOpen(false)
  }
  //animate header on scroll
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // add active class to menu based on the route url
  const activeRoute = (routeName) => {
    // Remove trailing slash from the current pathname
    const cleanPathname = pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname

    return cleanPathname === routeName ? 'active' : ''
  }
  useEffect(() => {
  }, [isScrolling, isOpen, pathname])

  return (
    <header
      id='header'
      className='fixed w-full z-50 top-0 transition-all duration-500 ease-in-out bg-white shadow-md lg:shadow-lg'
    >
      <nav className='relative'>
        <div className='lg:flex items-center container mx-auto px-5 py-2'>
          <div className='flex justify-between'>
            <Link href='/' aria-label='Homepage' onClick={closeMenu}>
              <Image
                src='/logoo.webp'
                className='h-14 image'
                alt='logo'
                height={200}
                width={200}
                unoptimized={true}
              />
            </Link>
            <button
              type='button'
              className={`inline-flex z-50  lg:hidden items-center justify-center rounded-md p-2 focus:outline-none`}
              aria-controls='Main menu'
              aria-expanded='false'
              aria-label='Main Menu'
              id='menuBtn'
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              {/* <!-- Icon when menu is closed. Heroicon name: outline/bars-3 Menu open: "hidden", Menu closed: "block"--> */}
              <svg
                className='block h-12 w-12'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
              >
                <path
                  stroke={isOpen ? '#fff' : '#000'}
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  }
                />
              </svg>
            </button>
          </div>
          <div
            id='menu'
            className={`ml-auto mt-5 lg:mt-0 hidden lg:block lg:bg-transparent lg:bg-white bg-[#2dbef3] ${
              isOpen ? 'open' : ''
            }`}
          >
            <Link href='/' onClick={closeMenu}>
              <Image
                src='/logoo1.webp'
                className='lg:hidden mx-1 my-5 pl-3'
                alt='logo'
                height={200}
                width={200}
                unoptimized={true}
              />
            </Link>
            <ul className='flex  camelcase lg:px-0 px-3 mobile '>
              {menu.map((item, index) => (
                <li
                  className={`mobiles-icon mx-1 xl:px-2 px-[0.3rem] relative group`}
                  key={index}
                >
                  {item.url ? (
                    <Link
                      href={item && item?.url}
                      className={`px-1 relative lg:inline-block block lg:rounded-md xl:text-[20px] text-[18px] font-bold menu-link pt-1 pb-1 lg:border-0 border-solid lg:border-b-[#FBEF3C] lg:text-[#262626] text-white transition-all duration-300 ease-in-out hover:text-[#e91b72]
                                            ${
                                              activeRoute(item?.url)
                                                ? 'active lg:border-b-2 lg:border-solid lg:border-b-[#FBEF3C]lg:before:border-0  before:border-l-solid before:relative before:left-[-4px]'
                                                : ''
                                            }
                                          `}
                      onClick={closeMenu}
                      aria-label={item && item?.url}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span
                      className={`px-1 relative lg:inline-block block lg:rounded-md text-lg font-bold menu-link pt-3 pb-1 lg:border-0 border-b-[1px] border-solid border-b-text ${
                        isScrolling
                          ? 'lg:text-menuColor text-heading'
                          : 'lg:text-white text-heading'
                      }
                      `}
                    >
                      {item.title}
                    </span>
                  )}
                  {/* pass active route as props */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
