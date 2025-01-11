import React, { useRef }  from 'react'
import Link from 'next/link'
import Image from 'next/image'
import urlExtractor from 'utils/urlExtractor'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { FreeMode, Autoplay, Navigation } from 'swiper/modules'
import { useSwiper } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { GrPrevious, GrNext } from 'react-icons/gr'



const SlideComponent = ({ data, imgDom }) => {
  const swiper = useSwiper()
  const swiperRef = useRef()
  // console.log(paramsData, 'Product')
  return (
    <div className='bg-white  text-dark text-3xl'>
      <div className='py-12 container'>
        <h1 className='md:text-4xl text-1-xl text-yellow-300 font-bold'>
          {data[0].field_slider_title}
        </h1>
        <h2 className='md:text-1-xl text-1xl text-black font-bold'>
          {data[0].field_slider_subtitle}
        </h2>
      </div>
      <Swiper
        slidesPerView={3}
        freeMode={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            // spaceBetween:  40,
          },
          1024: {
            slidesPerView: 3,
            // spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[FreeMode, Autoplay, Navigation]}
        className='mySwiper lg:py-36'
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link
                href={`/casestudy${urlExtractor(item.field_slider_link)[1]}`}
                key={index}
                className='Slider-hover text-black hover:text-yellow-300 relative text-left'
              >
                <Image
                  src={`${imgDom}${item.field_slider_image}`}
                  loading='lazy'
                  alt='Image'
                  width={1920}
                  height={600}
                  className='scale-100 img-hov hover:after:bg-dark/[.5] hover:after:opacity-100 after:relative after:h-full after:w-full after:transition-all after:duration-75 after:opacity-0 transition-all duration-300 ease-out lg:hover:scale-110'
                />
                <h2 className='md:text-1xl text-xl font-bold mt-12 bottom-line relative ml-8'>
                  {item.field_slider_desc}
                </h2>
              </Link>
            </SwiperSlide>
          )
        })}

        <div className='swiper-button-prev slider-arrow lg:hidden'>
          <GrPrevious size={70} color={'yellow'} />
        </div>
        <div className='swiper-button-next slider-arrow lg:hidden'>
          <GrNext size={70} color={'yellow'} />
        </div>
        <div className='swiper-pagination'></div>
      </Swiper>
    </div>
  )
}
export default SlideComponent
