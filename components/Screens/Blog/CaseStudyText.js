import React from 'react'

// Use React.memo to prevent unnecessary re-renders
const CaseStudyText = React.memo(({ data }) => {
  // Extract fields with default values to avoid accessing undefined properties
  const section = data?.field_section?.[0]?.value || ''
  const textTitle = data?.field_text_title?.[0]?.value || ''
  const textDescription = data?.field_text_description || []

  return (
    <div className='md:mb-8 mt-12'>
      <div className='container'>
        <div>
          <h2 className='text-2xl text-dark font-bold mb-9'>{section}</h2>
          <h3 className='text-1xl text-dark font-bold mb-9'>{textTitle}</h3>
          {textDescription.map((item, index) => (
            <h3
              className='text-dark text-1xl leading-11'
              key={item.value || index} // Use item.value if unique, otherwise index
              dangerouslySetInnerHTML={{ __html: item.value }}
            />
          ))}
        </div>
      </div>
    </div>
  )
})

export default CaseStudyText
