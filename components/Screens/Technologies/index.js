'use client'
import React, { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import getPageData from '../../../utils/ApiMapWithType'
import Loader from '../../Loader'

// Dynamically import components
const TechBanner = dynamic(() => import('./TechBanner'))
const TechGrow = dynamic(() => import('./TechGrow'))
const TechDesign = dynamic(() => import('./TechDesign'))
const TechWeServe = dynamic(() => import('./TechWeServe'))
const TopFooter = dynamic(() => import('../../TopFooter/TopFooter'))

const Technologies = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const backend_url = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const apiPageUrl = `${backend_url}/node_title/technologies`
        const apis = await getPageData(apiPageUrl)
        setData(apis)
      } catch (err) {
        setError(err)
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [backend_url])

  // Memoize the rendering of data
  const renderedItems = useMemo(() => {
    return data.map((item, index) => {
      const dataToShow = item[0]?.type
      switch (dataToShow) {
        case 'Home Page Banner':
          return <TechBanner key={index} data={item} imgDom={backend_url} />
        case 'Lets Build head subhead img':
          return <TechGrow key={index} data={item} imgDom={backend_url} />
        case 'Title Heading With Cta':
          return <TechDesign key={index} data={item} />
        case 'Technologies We Serve':
          return <TechWeServe key={index} data={item} imgDom={backend_url} />
        case 'Cta Heading Link Image':
          return (
            <TopFooter
              key={index}
              title={item[0].field_cta_head}
              link={item[0].field_cta_image_link}
              imgurl={`${backend_url}${item[0].field_cta_bg_image}`}
            />
          )
        default:
          return null
      }
    })
  }, [data, backend_url])

  if (loading) {
    return (
       <>
      <Loader/>
      </>
    )
  }

  if (error) {
    return <div>Error loading data</div>
  }

  return <div>{renderedItems}</div>
}

export default Technologies
