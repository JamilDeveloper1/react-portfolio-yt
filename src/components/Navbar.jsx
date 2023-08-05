import React from 'react'
import { useState } from 'react'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {

const [openMenu,setOpenMenu] = useState(false);

function handleClick(){
  setOpenMenu(!openMenu);
}

  return (
    <div className='w-full h-16 flex items-center justify-end fixed bg-white'>
      <ul className=' hidden md:flex md:items-center md:justify-center md:gap-3 md:mr-8'>
      <a className='links' href="#">Works</a>
      <a className='links' href="#">Blog</a>
      <a className='links' href="#">Contact</a>
      </ul>


<FaBars  onClick={handleClick} className='text-xl cursor-pointer mr-5 md:hidden z-50' />

      <ul 
      style={{right : openMenu ? '0%' : '-100%'}}
      
      
      className='transition-all fixed w-1/2 h-screen -right-full bottom-0 bg-red-400 flex items-center justify-center flex-col gap-5 md:hidden'>
      <a className='links' href="#">Works</a>
      <a className='links' href="#">Blog</a>
      <a className='links' href="#">Contact</a>
      </ul>
    </div>
  )
}

export default Navbar
