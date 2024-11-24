
import Image from 'next/image'
import React from 'react'
// import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='rounded-full flex justify-center items-center'>
      <Image src="/banner.jpg" alt='name' width={800} height={800} />
    </div>
    
  )
}

export default Hero
