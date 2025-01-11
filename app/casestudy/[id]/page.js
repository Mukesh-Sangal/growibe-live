'use client'
import React, { useState, useEffect } from 'react'
import CaseStudies from '../../../components/Screens/CaseStudies'

export default function Products({ params }) {
  const backend_url = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const apipageUrl = `${backend_url}/${params.id}?_format=json`
      console.log(apipageUrl, 'API URL')
      const res = await fetch(apipageUrl)
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`)
      }
      const apidata = await res.json()
      setData(apidata)
    } catch (error) {
      setError(error)
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [params.id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className='mt-[64px]'>
      {data ? (
        <CaseStudies data={data} imgDom={backend_url} />
      ) : (
        <div>No data available</div>
      )}
    </div>
  )
}
