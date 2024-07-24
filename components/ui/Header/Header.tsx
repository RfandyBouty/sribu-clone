import React from 'react'
import Search from './Search'
import Logo from "@/assets/image/sribu-logo.svg"
import Image from 'next/image'
import HeaderMenut from './HeaderMenut'
import Nav from './Nav'

function Header() {
  return (
    <header className='bg-white z-50 w-full'>
      <div className='flex justify-between items-center max-w-7xl mx-auto px-6 py-4'>
        <div className='flex space-x-6 items-center'>
          <Image src={Logo} alt="logo" />
          <Search />
        </div>

        <div className='flex items-center space-x-4'>
          <HeaderMenut />
        </div>
      </div>
      <Nav />
    </header>
  )
}

export default Header