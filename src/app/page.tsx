import Hero from '@/components/Hero'
import Name from '@/components/Name'
import Navbar from '@/components/Navbar'
import React from 'react'
import { useEffect } from 'react';

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='flex justify-evenly p-4 m-4 items-center md:flex-row flex-col'>
        <div>
          <Hero />
        </div>
        <div>
          <Name />
        </div>
      </div>
    </>
  )
}
