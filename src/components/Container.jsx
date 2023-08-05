import React from 'react'

const Container = () => {
  return (
    <div className='
    flex items-center justify-center pt-40 flex-col-reverse gap-10
    
    md:w-full md:flex md:flex-row md:items-center md:justify-around md:pt-40 md:pb-40 '>
        <div className='w-4/5 pb-10 md:w-1/3 flex flex-col gap-5 '>
<h1 className=' text-2xl  sm:text-4xl font-bold text-indigo-950'>
    Hi, I am John, Creative Technologist</h1>
<p className='text-indigo-900'>
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
</p>

<a href="#" 
className='p-1 bg-red-400 w-[200px]
text-center
text-white
font-bold

'>Download Resume</a>
        </div>
        <img src="images/Ellipse 1.png" className='' alt="Ellipse1"/>
     
    </div>
  )
}

export default Container
