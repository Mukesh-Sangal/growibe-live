// components/Loading.js
import Image from 'next/image'
import '../../app/loader.css'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-[70vh]'>
      {/* animate-spin-logo */}
      <div className='animate-scale-up-down'>
        <Image
          src='/logoo.webp'
          alt='Site Logo'
          width={200}
          height={56}
          unoptimized={true}
        />
      </div>
    </div>
  )
}

export default Loading
