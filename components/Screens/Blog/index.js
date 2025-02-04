import React, { useEffect, useState, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import Loader from '../../Loader'
import Link from 'next/link'

// Dynamically import components to split the bundle
const Banner = dynamic(() => import('./Banner'))
const CaseStudy = dynamic(() => import('./CaseStudy'))
const CaseStudyText = dynamic(() => import('./CaseStudyText'))

const Blogs = ({ data, imgDom }) => {
  const [paragraphData, setParagraphData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch CSRF token and headers only once
  const getHeaders = async () => {
    try {
      const csrfResponse = await fetch(`${imgDom}/session/token`)
      const csrfToken = await csrfResponse.text()
      const username = process.env.NEXT_PUBLIC_USERNAME
      const password = process.env.NEXT_PUBLIC_PASSWORD
      const basicAuth = 'Basic ' + btoa(username + ':' + password)

      return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
        Authorization: basicAuth,
      }
    } catch (err) {
      throw new Error('Failed to fetch headers')
    }
  }

  // Fetch the paragraph data
  const fetchData = useCallback(async () => {
    try {
      if (!data?.field_blog?.length) {
        setParagraphData([])
        setLoading(false)
        return
      }

      const headers = await getHeaders()

      const promises = data.field_blog.map(async (reference) => {
        const response = await axios.get(
          `${imgDom}/entity/paragraph/${reference.target_id}?_format=json`,
          { headers }
        )
        return response.data
      })

      const fetchedData = await Promise.all(promises)
      setParagraphData(fetchedData)
    } catch (error) {
      setError(error.message || 'An error occurred while fetching data')
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }, [data, imgDom])

  // Call fetchData when the component mounts or data changes
  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Memoize the rendering logic to prevent unnecessary re-renders
  const renderParagraphs = useMemo(() => {
    if (loading) {
      return (
        <>
          <Loader />
        </>
      )
    }

    if (error) {
      return (
        <div className='flex items-center justify-center h-[70vh]'>
          <p className='text-red-500'>Error loading data: {error}</p>
        </div>
      )
    }

    if (!paragraphData.length) {
      return (
        <>
          <Loader />
        </>
      )
    }

    // Render paragraphs based on their type
    return paragraphData.map((paragraph, index) => {
      switch (paragraph?.type?.[0]?.target_id) {
        case 'case_study_banner':
          return <Banner key={index} data={paragraph} imgDom={imgDom} />
        case 'case_study':
          return <CaseStudy key={index} data={paragraph} imgDom={imgDom} />
        case 'case_study_text_and_disc':
          return <CaseStudyText key={index} data={paragraph} imgDom={imgDom} />
        default:
          return null
      }
    })
  }, [loading, error, paragraphData, imgDom])

  return (
    <div>
      {renderParagraphs}
      <div className='container mt-12 mb-4'>
        <Link className='transparent-buttons' href='/contact'>
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default Blogs
