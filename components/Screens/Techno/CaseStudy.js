import React, { useState, useEffect } from 'react'
import axios from 'axios'
const CaseStudy = ({ data, imgDom }) => {
  // console.log(data, 'SSS')
  const [paragraphData, setParagraphData] = useState([])
  // console.log(paragraphData, 'data of Paragraph')
  const fetchData = async () => {
    try {
      const username = 'growibes'
      const password = 'Jaibholenath@1989'
      const basicAuth = 'Basic ' + btoa(username + ':' + password)

      // Fetch CSRF token dynamically
      const csrfResponse = await fetch(`${imgDom}/session/token`)
      const csrfToken = await csrfResponse.text()
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken, // Use the fetched CSRF token
        Authorization: basicAuth, // Add the Authorization header
      }

      const promises = data?.field_paragraph_reference?.map(
        async (reference) => {
          const response = await axios.get(
            `${imgDom}/entity/paragraph/${reference.target_id}?_format=json`,
            { headers }
          )
          return response.data
        }
      )

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
    <div className='container my-8 mb-12'>
      {data?.field_case_study_title[0]?.value && (
        <h1 className='lg:text-2xl pb-2 text-1-xl font-bold text-[#f8cc46] mb-2'>
          {data?.field_case_study_title[0]?.value}
        </h1>
      )}
      {data?.field_para_subtitle[0]?.value && (
        <h2 className='lg:text-2xl text-1xl font-bold text-dark mb-8'>
          {data?.field_para_subtitle[0]?.value}
        </h2>
      )}

      <div className='grid grid-cols-1 gap-6 pt-8'>
        {paragraphData.map((item, index) => (
          <div className='' key={index}>
            {item?.field_item_title[0]?.value && (
              <h2 className='text-dark lg:text-1-xl text-1xl font-bold pb-8'>
                {item?.field_item_title[0]?.value}
              </h2>
            )}
            {item?.field_case_study_desc[0]?.value && (
              <h3 className='text-dark lg:text-1xl text-lg font-bold pb-8'>
                {item?.field_case_study_desc[0]?.value}
              </h3>
            )}
            {item?.field_blog_desc?.map((item, index) => (
              <div
                key={index}
                className='text-dark lg:text-1xl text-xl pb-5 ml-16 font-medium relative'
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
                  dangerouslySetInnerHTML={{
                    __html: item.value,
                  }}
                ></span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CaseStudy