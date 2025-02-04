'use client'

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'
import getPageData from '../../../utils/ApiMapWithType'
import Link from 'next/link'
import Loader from '../../Loader'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion'

// Lazy loading components
const Banner = dynamic(() => import('./Banner'), { ssr: false })
const ServicesSections = dynamic(() => import('./ServicesSections'), {
  ssr: false,
})
const Process = dynamic(() => import('./Process'), { ssr: false })
const Hire = dynamic(() => import('./Hire'), { ssr: false })
const TopFooter = dynamic(() => import('../../TopFooter/TopFooter'), {
  ssr: false,
})

const Services = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const backend_url = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
  console.log(data, 'Services')
  // Fetch data only once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiPageUrl = `${backend_url}/node_title/drupal%20services`
        const apis = await getPageData(apiPageUrl)
        setData(apis)
      } catch (error) {
        console.error('Error fetching services data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [backend_url])

  // Utility function: Memoized to avoid recalculation
  const isEven = useCallback((number) => number % 2 === 0, [])

  const renderSection = useCallback(
    (item, index) => {
      const dataToShow = item[0]?.type
      console.log(item,'Data')
      switch (dataToShow) {
        case 'Banner':
          return (
            <div key={index}>
              <Banner
                title={item[0]?.field_banner_title}
                imgurl={`${backend_url}${item[0]?.field_banner_image}`}
              />
            </div>
          )
        case 'Box layout':
          return (
            <div key={index} className='container spacing'>
              <div className='flex items-stretch flex-wrap'>
                {item
                  .sort(
                    (a, b) =>
                      (a.field_service_box_order || 0) -
                      (b.field_service_box_order || 0)
                  ) // Sorting based on field_service_box_order
                  .map((el, i) => (
                    <div
                      key={i}
                      className={`lg:basis-1/2 w-full ${
                        i === 0 || i === 3 || i === 4 || i === 7 || i === 8
                          ? isEven(i)
                            ? 'bg-sky-600 md:bg-sky-600'
                            : 'bg-white md:bg-sky-600'
                          : isEven(i)
                          ? 'bg-sky-600 md:bg-white'
                          : 'bg-white md:bg-white'
                      } `}
                    >
                      <ServicesSections
                        title={el.field_heading}
                        desc={el.field_subheading}
                        icon={`${backend_url}${el.field_box_icon}`}
                        bgColor={
                          i === 0 || i === 3 || i === 4 || i === 7 || i === 8
                            ? isEven(i)
                              ? 'bg-sky-600 md:bg-sky-600'
                              : 'bg-white md:bg-sky-600'
                            : isEven(i)
                            ? 'bg-sky-600 md:bg-white'
                            : 'bg-white md:bg-white'
                        }
                        color={
                          i === 0 || i === 3 || i === 4 || i === 7 || i === 8
                            ? isEven(i)
                              ? 'text-white md:text-white'
                              : 'text-sky-600 md:text-white'
                            : isEven(i)
                            ? 'text-white md:text-sky-600'
                            : 'text-sky-600 md:text-sky-600'
                        }
                        desColor={
                          i === 0 || i === 3 || i === 4 || i === 7 || i === 8
                            ? isEven(i)
                              ? 'text-white md:text-white'
                              : 'text-black md:text-white'
                            : isEven(i)
                            ? 'text-white md:text-black'
                            : 'text-black md:text-black'
                        }
                      />
                    </div>
                  ))}
              </div>
              <div className='flex justify-center items-center lg:py-8 py-4'>
                <Link
                  className='inline-block transparent-buttons'
                  href='/contact'
                >
                  {item[0]?.field_section_link}
                </Link>
              </div>
            </div>
          )
        case 'Title With Desc Main':
          return (
            <div key={index}>
              <Process
                title={item[0]?.field_title}
                desc={item[0]?.field_desc}
                list={item[0]?.field_title_with_desc_heading.split(',')}
              />
            </div>
          )
        case 'faq':
          const sortedFaqItems = item.sort(
            (a, b) => a.field_faq_o - b.field_faq_o
          )
          return (
            <div key={index} className='container text-left spacing'>
              <h2 className='lg:text-center xl:mb-20 mb-12 font-bold lg:text-4xl text-xl'>
                {sortedFaqItems[0]?.field_faq_title}
              </h2>
              <Accordion
                type='single'
                collapsible
                className='w-full lg:w-4/6 mx-auto'
              >
                {sortedFaqItems.map((el, i) => (
                  <AccordionItem value={`item-${i}`} key={`faq-item-${i}`}>
                    <AccordionTrigger>{el?.field_question}</AccordionTrigger>
                    <AccordionContent>{el?.field_answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )
        case 'Title Heading With Cta':
          return (
            <div key={index}>
              <Hire
                title={item[0]?.field_cta_section_heading}
                link={item[0]?.field_cta_link}
                list={item}
                value='field_cta_subheading'
              />
            </div>
          )
        case 'Cta Heading Link Image':
          return (
            <div key={index}>
              <TopFooter
                title={item[0]?.field_cta_head}
                link={item[0]?.field_cta_image_link}
                imgurl={`${backend_url}${item[0]?.field_cta_bg_image}`}
              />
            </div>
          )
        default:
          return null
      }
    },
    [backend_url, isEven]
  )

  return (
    <div>
      {loading ? (
        <><Loader/></>
      ) : (
        data?.length && data.map(renderSection)
      )}
    </div>
  )
}

export default React.memo(Services)
