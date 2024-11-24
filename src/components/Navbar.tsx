'use client'
import Link from 'next/link';
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenuOpn = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className=''>
      <div className='flex justify-center items-center w-screen p-4'>
        <div className='text-3xl font-bold w-6/12 text-center md:block hidden'>
          <h1>
            My Portfolio</h1>
        </div>
        <div className='flex justify-end w-6/12'>
          <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='menuLink'><Link href='/'>Home</Link></li>
            <li className='menuLink'><Link href='/about'>About</Link></li>
            <li className='menuLink'><Link href='/projects'>Projects</Link></li>
            <li className='menuLink'><Link href='/skills'>Skills</Link></li>
            <li className='menuLink'><Link href='/contact'>Contact</Link></li>
          </ul>
          <div className="md:hidden" onClick={toggleMenuOpn}>
            {isMenuOpen ? <AiOutlineClose className='absolute top-2 right-2' size={30} /> :
              <AiOutlineMenu className='absolute top-2 right-2' size={30} />
            }
            {isMenuOpen &&
              <ul className='absolute top-0 left-0  rounded-xl  gap-2 lg:gap-16 w-[300px] flex-col sm:flex md:hidden'>
                <li className='menuLink p-2 m-2'><Link href='/'>Home</Link></li>
                <li className='menuLink p-2 m-2'><Link href='/about'>About</Link></li>
                <li className='menuLink p-2 m-2'><Link href='/projects'>Projects</Link></li>
                <li className='menuLink p-2 m-2'><Link href='/skills'>Skills</Link></li>
                <li className='menuLink p-2 m-2'><Link href='/contact'>Contact</Link></li>
              </ul>}

          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar
