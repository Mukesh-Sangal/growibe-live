import React from 'react'

const CaseStudyText = ({ data }) => {
  return (
    <div className='lg:mb-12 mb-8'>
      <div className='container'>
        <div>
          <h2 className='lg:text-2xl text-1-xl text-dark font-bold mb-9'>
            {data?.field_text_title[0]?.value}
          </h2>
          {data?.field_text_description.map((item, index) => (
            <h3
              className='text-dark lg:text-1-xl text-xl leading-11'
              key={index}
              dangerouslySetInnerHTML={{
                __html: item.value,
              }}
            ></h3>
          ))}
        </div>
      </div>
    </div>
  )
}



export default CaseStudyText