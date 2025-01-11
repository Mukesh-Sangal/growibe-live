'use client'
import React, { useEffect, useState } from 'react'
import { hasCookie, setCookie, deleteCookie } from 'cookies-next'

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    setShowConsent(!hasCookie('localConsent'))
  }, [])

  const acceptCookie = () => {
    setCookie('localConsent', 'true', {})
    setShowConsent(false)
  }

  const declineCookie = () => {
    deleteCookie('localConsent')
    setShowConsent(false)
  }

  if (!showConsent) {
    return null
  }

  return (
    <div className='fixed inset-0 z-50 bg-slate-700 bg-opacity-70 flex justify-center items-end'>
      <div className='flex flex-col lg:gap-x-12 md:flex-row items-center justify-between px-6 py-4 bg-[#7f11e0]  shadow-lg w-full md:w-auto mb-4 rounded md:rounded-b-none'>
        <div className='text-white text-base mb-4 md:mb-0'>
          This website uses cookies to improve user experience. By using our
          website, you consent to all cookies in accordance with our Cookie
          Policy.
        </div>
        <div className='flex space-x-4'>
          <button
            className='bg-green-500 hover:bg-green-600 py-2 px-4 rounded text-white bg-[#67c8ca] '
            onClick={acceptCookie}
          >
            Accept
          </button>
          <button
            className='bg-red-500 hover:bg-red-600 py-2 px-4 rounded text-white bg-red'
            onClick={declineCookie}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
