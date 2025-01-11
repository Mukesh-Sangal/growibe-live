'use client'
import React, { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import getPageData from '../../../utils/ApiMapWithType'
import Loader from '../../Loader'

// Dynamic imports for components
const InnerBanner = dynamic(() => import('./InnerBanner'))
const AboutUs = dynamic(() => import('./AboutUs'))
const AboutUsProjects = dynamic(() => import('./AboutUsProjects'))
const OurMission = dynamic(() => import('./OurMission'))
const LetsStartTopNotch = dynamic(() => import('./LetsStartTopNotch'))
const OurTeam = dynamic(() => import('./OurTeam'))
const StartWithLando = dynamic(() => import('./StartWithLando'))

const About = () => {
  const [data, setData] = useState([])
  const backend_url = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL

  useEffect(() => {
    const fetchData = async () => {
      const apiPageUrl = `${backend_url}/node_title/about`
      const apis = await getPageData(apiPageUrl)
      setData(apis)
    }
    fetchData()
  }, [backend_url]) // Include backend_url as a dependency

  // Memoize the component rendering logic
  const renderedContent = useMemo(() => {
    return data.map((item, index) => {
      const dataToShow = item[0]?.type
      switch (dataToShow) {
        case 'Banner':
          return (
            <div key={index}>
              <InnerBanner data={item} imgDom={backend_url} />
            </div>
          )
        case 'About us First Section':
          return (
            <div key={index}>
              <AboutUs data={item} imgDom={backend_url} />
            </div>
          )
        case 'Home Portfolio':
          return (
            <div key={index}>
              <AboutUsProjects data={item} />
            </div>
          )
        case 'Our Mission':
          return (
            <div key={index}>
              <OurMission data={item} />
            </div>
          )
        case 'About Digital Experiences':
          return (
            <div key={index}>
              <LetsStartTopNotch data={item} imgDom={backend_url} />
            </div>
          )
        case 'Our Team':
          return (
            <div key={index}>
              <OurTeam data={item} imgdom={backend_url} />
            </div>
          )
        case 'About lando today':
          return (
            <div key={index}>
              <StartWithLando data={item} imgdom={backend_url} />
            </div>
          )
        default:
          return null
      }
    })
  }, [data, backend_url]) // Memoize based on data and backend_url

  return (
    <div>
      {data.length ? (
        renderedContent
      ) : (
         <>
        <Loader/>
        </>
      )}
    </div>
  )
}

export default About
