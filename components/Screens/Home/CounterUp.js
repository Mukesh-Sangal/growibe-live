import React, { useState, useMemo } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const CounterItem = React.memo(({ detail }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false)

  return (
    <li className='flex flex-col justify-center items-center gap-5 p-7 mb-12 lg:mb-0'>
      <CountUp
        start={viewPortEntered ? null : 0}
        end={+detail.field_counter}
        duration={2.75}
        suffix='+'
      >
        {({ countUpRef }) => (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={(isVisible) => {
              if (isVisible) setViewPortEntered(true)
            }}
            delayedCall
          >
            <span
              ref={countUpRef}
              className='circle lg:text-4xl text-2xl font-bold border-white rounded-full w-48 h-48 inline-flex items-center justify-center z-50 conic-gradient relative'
              aria-label={`${detail.field_counter}+`}
            />
          </VisibilitySensor>
        )}
      </CountUp>
      <h3 className='capitalize lg:text-2xl text-xl font-bold'>
        {detail.field_short_desc}
      </h3>
    </li>
  )
})

const CounterUp = ({ data, imgDom }) => {
  const backgroundImageUrl = useMemo(
    () => `${imgDom}${data[0]?.field_improve_b}`,
    [data, imgDom]
  )

  if (!data || data.length === 0) return null // Safeguard for empty data

  return (
    <section
      className='improving bg-cover bg-center bg-black text-white h-auto object-fill bg-fixed'
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <article className='container lg:py-24 py-14 relative z-30'>
        <header className='heading text-white text-center lg:text-4xl text-2xl font-bold'>
          {data[0]?.field_improve_header}
        </header>
        <ul className='grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-12 text-center lg:mt-20 mt-12'>
          {data.map((detail, index) => (
            <CounterItem key={index} detail={detail} />
          ))}
        </ul>
      </article>
    </section>
  )
}

export default React.memo(CounterUp)
