'use client'

import React, { useState, useEffect, useMemo } from 'react'
import getPageData from '../../utils/ApiMapWithType'
import InnerBanner from '../../components/Screens/Blog/InnerBanner'
import NewSliderComponent from '../../components/Screens/Blog/NewSliderComponent'
import Loader from '../../components/Loader'

const Blog = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Memoize the backend URL to avoid recomputation
  const backend_url = useMemo(() => process.env.NEXT_PUBLIC_DRUPAL_BASE_URL, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true) // Start loading state
        const apiPageUrl = `${backend_url}/node_title/blogs`
        const apis = await getPageData(apiPageUrl)
        setData(apis)
        setLoading(false) // Stop loading after data is fetched
      } catch (error) {
        setError('Error fetching data')
        setLoading(false) // Stop loading if there's an error
        console.error(error)
      }
    }
    fetchData()
  }, [backend_url])

  if (loading) {
    return (
      <>
      <Loader/>
      </>
    )
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      {data?.length ? (
        data.map((item, index) => {
          const dataToShow = item[0]?.type
          switch (dataToShow) {
            case 'Banner':
              return (
                <div key={index}>
                  <InnerBanner data={item} imgDom={backend_url} />
                </div>
              )
            case 'BlogItems':
              return (
                <div key={index}>
                  <NewSliderComponent data={item} imgDom={backend_url} />
                </div>
              )
            default:
              return null // Safely return null for unknown cases
          }
        })
      ) : (
        <div>No blog data available</div>
      )}
    </div>
  )
}

export default Blog
