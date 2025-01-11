import React, { useEffect, useState } from 'react'
// import './YourComponent.css' // Import your CSS file

const ScrollIcon = () => {
  const [animationStarted, setAnimationStarted] = useState(false)

  useEffect(() => {
    // Start the animation after a short delay (adjust as needed)
    const animationTimeout = setTimeout(() => {
      setAnimationStarted(true)
    }, 500)

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(animationTimeout)
  }, [])

  return (
    <div className={`parachute-icon ${animationStarted ? 'animate' : ''}`}>
      {/* Your parachute icon or image goes here */}
      <span>🪂</span>
    </div>
  )
}

export default ScrollIcon
