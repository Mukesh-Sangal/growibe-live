import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import CaseStudy from './CaseStudy'
import CaseStudyText from './CaseStudyText'
import axios from 'axios'
import { Skeleton } from '../../../components/ui/skeleton'

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
  }, [data])

  return (
    <div>
      {/* Render child components */}
      {paragraphData.length ? (
        paragraphData.map((paragraph, index) => {
          switch (paragraph.type[0].target_id) {
            case 'case_study_banner':
              return <Banner key={index} data={paragraph} imgDom={imgDom} />
            case 'case_study':
              return <CaseStudy key={index} data={paragraph} imgDom={imgDom} />
            case 'case_study_text_and_disc':
              return (
                <CaseStudyText key={index} data={paragraph} imgDom={imgDom} />
              )
            default:
              return null
          }
        })
      ) : (
        <div className='flex items-center justify-center space-x-4 h-[70vh] '>
          <Skeleton className='h-12 w-12 rounded-full' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
          </div>
        </div>
      )}
    </div>
  )
}

export default CaseStudies
