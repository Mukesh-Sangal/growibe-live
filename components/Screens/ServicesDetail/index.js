'use client'

import React, { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import getPageData from '../../../utils/ApiMapWithType'
import Loader from '../../Loader'
// Lazy load the components
const ServicesBanner = dynamic(() => import('./ServicesBanner'), { ssr: false })
const ServicesSecond = dynamic(() => import('./ServicesSecond'), { ssr: false })
const ImageTitleLink = dynamic(() => import('./ImageTitleLink'), { ssr: false })
const GlobalCta = dynamic(() => import('../../GlobalCta/GlobalCta'), {
  ssr: false,
})
const BrandManagement = dynamic(() => import('./BrandManagement'), {
  ssr: false,
})
const Paragraph = dynamic(() => import('./Paragraph'), { ssr: false })

const ServicesDetail = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const backend_url = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL

  // Fetch data only once using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiPageUrl = `${backend_url}/node_title/services`
        const apis = await getPageData(apiPageUrl)
        setData(apis)
      } catch (error) {
        console.error('Error fetching services data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [backend_url]) // Add backend_url as dependency

  // Memoized render function to prevent unnecessary re-renders
  const renderSection = useCallback(
    (item, index) => {
      const dataToShow = item[0]?.type

      switch (dataToShow) {
        case 'Services Banner':
          return (
            <div key={index}>
              <ServicesBanner data={item} imgDom={backend_url} />
            </div>
          )
        case 'Services Counter Main':
          return (
            <div key={index}>
              <ServicesSecond
                data={item}
                imgDom={backend_url}
                imgOrder='last'
                column='four'
              />
            </div>
          )
        case 'Services Digital Asset Management':
          return (
            <div key={index}>
              <ImageTitleLink data={item} imgDom={backend_url} />
            </div>
          )
        case 'Management Paragraph':
          return (
            <div key={index}>
              <Paragraph data={item} />
            </div>
          )
        case 'Brand Management at Scale':
          return (
            <div key={index}>
              <BrandManagement data={item} imgDom={backend_url} />
            </div>
          )
        case 'Global Cta':
          return (
            <div key={index}>
              <GlobalCta data={item} imgDom={backend_url} />
            </div>
          )
        default:
          return null // Render nothing for unknown data types
      }
    },
    [backend_url]
  )

  return (
    <div>
      {loading ? (
         <>
        <Loader/>
        </>
      ) : (
        data?.length && data.map(renderSection)
      )}
    </div>
  )
}

export default React.memo(ServicesDetail)
