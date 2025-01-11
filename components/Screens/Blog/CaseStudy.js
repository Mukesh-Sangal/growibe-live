import React, { useState, useEffect, useCallback, useMemo } from 'react'
import axios from 'axios'

const CaseStudy = ({ data, imgDom }) => {
  const [paragraphData, setParagraphData] = useState([])

  // Memoize API URL and authentication details to avoid recalculating
  const basicAuth = useMemo(() => {
    const username = 'growibes'
    const password = 'Jaibholenath@1989'
    return 'Basic ' + btoa(username + ':' + password)
  }, [])

  // Fetch data using useCallback to prevent function recreation
  const fetchData = useCallback(async () => {
    if (!data?.field_paragraph_reference?.length) return

    try {
      // Fetch CSRF token
      const csrfResponse = await fetch(`${imgDom}/session/token`)
      const csrfToken = await csrfResponse.text()

      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
        Authorization: basicAuth,
      }

      // Fetch all paragraphs in parallel
      const promises = data.field_paragraph_reference.map((reference) =>
        axios.get(
          `${imgDom}/entity/paragraph/${reference.target_id}?_format=json`,
          { headers }
        )
      )

      const fetchedData = await Promise.all(promises)
      setParagraphData(fetchedData.map((res) => res.data))
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, [data?.field_paragraph_reference, imgDom, basicAuth])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className='container lg:my-8 my-4'>
      {data?.field_case_study_title?.[0]?.value && (
        <h1 className='lg:text-2xl text-1-xl font-bold text-[#f8cc46] mb-4'>
          {data.field_case_study_title[0].value}
        </h1>
      )}
      {data?.field_para_subtitle?.[0]?.value && (
        <h2 className='lg:text-1-xl text-1xl text-dark mb-4'>
          {data.field_para_subtitle[0].value}
        </h2>
      )}
      <div className='grid grid-cols-1 lg:gap-8 gap-8'>
        {paragraphData.map((item, index) => (
          <div key={index}>
            {item?.field_item_title?.[0]?.value && (
              <h2 className='text-dark lg:text-1-xl text-1xl font-bold pb-12'>
                {item.field_item_title[0].value}
              </h2>
            )}
            {item?.field_blog_desc?.map((descItem, descIndex) => (
              <div
                key={descIndex}
                className='text-dark text-1xl pb-5 ml-16 font-medium relative'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='43.537'
                  height='18.303'
                  className='fact-and-figures_listArrowIcon__9ldRk absolute top-[10px] left-[-70px]'
                >
                  <g
                    fill='none'
                    stroke='#f8cc46'
                    strokeLinecap='round'
                    strokeWidth='3'
                  >
                    <path d='M1.5 9.151h38.978'></path>
                    <path
                      data-name='Pfad 4'
                      d='m35.006 2.121 7.03 7.03-7.03 7.03'
                      strokeLinejoin='round'
                    ></path>
                  </g>
                </svg>
                <span
                  dangerouslySetInnerHTML={{ __html: descItem.value }}
                ></span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(CaseStudy) // Memoize component to prevent unnecessary re-renders
