'use client'
import React, { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import getPageData from '../../../utils/ApiMapWithType'
import { Skeleton } from '../../ui/skeleton'

// Dynamically import the Location component
const Location = dynamic(() => import('./Location'))

const ContactLocation = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const backend_url = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const apiPageUrl = `${backend_url}/node_title/contact`
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
        case 'Office Location':
          return (
            <div key={index}>
              <Location data={item} imgDom={backend_url} />
            </div>
          )
        default:
          return null
      }
    })
  }, [data, backend_url])

  if (loading) {
    return (
      <div className='flex items-center justify-center space-x-4 h-[70vh]'>
        <Skeleton className='h-12 w-12 rounded-full' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>
    )
  }

  if (error) {
    return <div>Error loading data</div>
  }

  return <div>{renderedItems}</div>
}

export default ContactLocation
