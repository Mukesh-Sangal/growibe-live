import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const address = [
    {
      title: 'DHARAMSHALA OFFICE',
      iframe:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.24493493255!2d76.32325197643145!3d32.197630073911206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905db27f502831b%3A0xc3c166f4c4b7e252!2sHimachal%20Pradesh%20Cricket%20Association%20Stadium%2C%20Dharamshala!5e0!3m2!1sen!2sin!4v1706247003941!5m2!1sen!2sin',
      address: 'Near Cricket Stadium lane Dharamshala',
      phone: '+91 9816091609',
      email: 'nitish@growibes.com',
    },

    {
      title: 'AUSTRALIA OFFICE',
      iframe:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.814892524082!2d143.88424207661848!3d-37.63004177202223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad15aeb7222baa1%3A0xa77b2a2a2f076ce3!2s119%20Gear%20Ave%2C%20Mount%20Helen%20VIC%203350%2C%20Australia!5e0!3m2!1sen!2sin!4v1719849520922!5m2!1sen!2sin',
      address: '119 Gear Avenue Mount Helen Ballarat,3350, Victoria',
      phone: '+61 470368355',
      email: 'nitish@growibes.com',
    },
  ]
    useEffect(() => {
      Aos.init({
        duration: 600,
        disable: 'mobile',
      })
    })
  return (
    <section className='relative'>
        <iframe
          width='100%'
          height='530'
          src={address[activeIndex].iframe}
          style={{ border: 0 }}
        ></iframe>
      <div className='container'>
        <div className='lg:absolute xl:right-0 lg:-right-9 lg:bottom-0 lg:top-[4%] xl:max-w-lg lg:max-w-md  w-full xl:translate-x-[-20%] lg:translate-x-[-10%] lg:block flex m-auto justify-center flex-wrap mb-5'>
          {address.map((item, index) => {
            return (
              <article
                key={index}
                className={`${
                  activeIndex === index
                    ? 'active bg-dark1 mb-3 px-10 pt-0 pb-8 w-full cursor-pointer'
                    : 'bg-white lg:mb-3 hover:bg-dark1 mb-3 w-full cursor-pointer'
                }`}
                data-aos='zoom-in'
              >
                <header
                  onClick={() => setActiveIndex(index)}
                  className={`${
                    activeIndex === index
                      ? 'active text-white hover:text-white heading-bar-left m-0 pt-0 accordion-header'
                      : 'heading-bar-left hover:text-white m-0  px-10 py-4 pt-0'
                  }`}
                >
                  <h2>{item.title}</h2>
                </header>
                {activeIndex === index && (
                  <div className='content'>
                    <div className='flex flex-col text-white text-lg mb-2'>
                      {item?.address}
                    </div>
                    <div className='text-white text-lg mb-2  flex items-center hover:text-[#dc248b]'>
                      <FaEnvelope
                        color={'white hover:#dc248b'}
                        size={20}
                        className='mr-3 transition duration-500 ease-in-out'
                      />
                      {item?.email && (
                        <a href={`mailto:${item?.email}`}>{item?.email}</a>
                      )}
                    </div>
                    <div className='text-white text-lg mb-2 flex items-center hover:text-[#dc248b]'>
                      <FaPhoneAlt
                        color={'white hover:#dc248b'}
                        size={20}
                        className='mr-3 pt-1 transition duration-500 ease-in-out'
                      />
                      {item?.phone && (
                        <a href={`tel:${item?.phone}`}>{item?.phone}</a>
                      )}
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Accordion
