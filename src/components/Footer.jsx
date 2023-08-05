import React from 'react'
import {GrFacebook} from 'react-icons/gr'
import {BsInstagram,BsTwitter,BsLinkedin} from 'react-icons/bs'
function Footer() {
  return (
    <div className='w-full pb-10 pt-10'>
        <div className='w-full flex items-center justify-center  text-indigo-900 gap-5 pb-5 text-xl'>
<GrFacebook className='cursor-pointer' />
<BsInstagram className='cursor-pointer' />
<BsTwitter className='cursor-pointer' />
<BsLinkedin className='cursor-pointer' />
        </div>
<p className=' max-[300px]:text-xs w-full flex items-center justify-center text-indigo-950 font-bold'>
Copyright ©2020 All rights reserved
</p>
    </div>
  )
}

export default Footer