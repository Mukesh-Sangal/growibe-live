'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Blog from '../../../components/Screens/Blog'

export default function Products({ params }) {
  const backend_url = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Memoize the API URL to avoid unnecessary recomputation
  const apipageUrl = useMemo(() => {
    return `${backend_url}/${params.id}?_format=json`
  }, [backend_url, params.id])

  const fetchData = async () => {
    try {
      setLoading(true) // Start loading
      const res = await fetch(apipageUrl)

      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`)
      }

      const apidata = await res.json()
      setData(apidata) // Set fetched data
      setLoading(false) // Stop loading once data is fetched
    } catch (error) {
      console.error('Error fetching data:', error)
      setError(error.message)
      setLoading(false) // Stop loading in case of error
    }
  }

  useEffect(() => {
    fetchData()
  }, [apipageUrl])

  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading data: {error}</div>
  }

  return (
    <div className='mt-[64px]'>
      {data ? (
        <Blog data={data} imgDom={backend_url} />
      ) : (
        <div>No data available</div>
      )}
    </div>
  )
}
