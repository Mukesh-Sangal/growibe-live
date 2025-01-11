'use client'
import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import Loader from '../../Loader'
import dynamic from 'next/dynamic'

// Dynamically import components
const Banner = dynamic(() => import('./Banner'))
const CaseStudy = dynamic(() => import('./CaseStudy'))
const CaseStudyText = dynamic(() => import('./CaseStudyText'))

const CaseStudies = ({ data, imgDom }) => {
  const [paragraphData, setParagraphData] = useState([])

  const fetchData = async () => {
    try {
      const username = 'growibes' // Replace with your actual username
      const password = 'Jaibholenath@1989' // Replace with your actual password
      const basicAuth = 'Basic ' + btoa(username + ':' + password)
      const csrfResponse = await fetch(`${imgDom}/session/token`)
      const csrfToken = await csrfResponse.text()
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
        Authorization: basicAuth, // Add the Authorization header
      }
      const promises = data.field_case_study_ref.map(async (reference) => {
        const response = await axios.get(
          `${imgDom}/entity/paragraph/${reference.target_id}?_format=json`,
          { headers }
        )
        return response.data
      })
      const fetchedData = await Promise.all(promises)
      setParagraphData(fetchedData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [data, imgDom]) // Include imgDom in dependency array

  // Memoize the component rendering
  const renderedParagraphs = useMemo(() => {
    return paragraphData.map((paragraph, index) => {
      switch (paragraph.type[0].target_id) {
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
  }, [paragraphData, imgDom]) // Dependency array to re-render when data changes

  return (
    <div>
      {paragraphData.length ? (
        renderedParagraphs
      ) : (
         <>
        <Loader/>
        </>
      )}
    </div>
  )
}

export default CaseStudies
