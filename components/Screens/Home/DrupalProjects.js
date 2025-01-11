import React, { useEffect, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import CountUp from 'react-countup'

// Dynamically import VisibilitySensor to reduce initial bundle size
const VisibilitySensor = dynamic(() => import('react-visibility-sensor'), {
  ssr: false,
})

const DrupalProjects = ({ data }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false)

  const handleVisibilityChange = useCallback((isVisible) => {
    if (isVisible) {
      setViewPortEntered(true)
    }
  }, [])

  return (
    <div className='bg-[#5856d6] main p-6 '>
      <div className='container spacing grid lg:grid-cols-3 grid-cols-1 2xl:gap-30 lg:gap-30 gap-8 md:flex-nowrap flex-wrap'>
        {data.map((item, index) => (
          <div className='item block text-white' key={index}>
            <CountUp
              start={viewPortEntered ? null : 0}
              end={+item.field_counter_up}
              duration={index === data.length - 1 ? 5.75 : 4.75}
              suffix={index === data.length - 1 ? '%' : '+'}
              delay={0}
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor
                  active={!viewPortEntered}
                  onChange={handleVisibilityChange}
                  delayedCall
                >
                  <span
                    className={`font-bold ${
                      index === data.length - 1
                        ? '2xl:text-4xl lg:text-3xl-1 text-2xl'
                        : '2xl:text-4xl lg:3xl-1 text-2xl'
                    }`}
                    ref={countUpRef}
                  />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1 className='lg:text-2xl text-xl text-white'>
              {item.field_portfolio_items}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}

// Use React.memo to optimize the component
export default React.memo(DrupalProjects)
