import React from 'react'
import data from '../PostData'
function Post() {
  return (
<div className='w-full bg-post-blue flex justify-center items-center flex-col pb-10'>


        <div className='w-4/5 flex items-center justify-between pt-10'>
            <a href="#" className='text-indigo-900' >Recent posts</a>
            <a href="#" className='text-indigo-900'>View all</a>
        </div>
        <div className='
        
        flex flex-col gap-5 w-full items-center justify-center
        
        
        md:w-full md:flex-row md:flex md:items-center md:justify-around md:pt-5 md:pb-5'>
{
    data.map(item => (
        <div key={item.id} 
        className='

        w-4/5 flex flex-col gap-5 pt-10

        md:w-1/3 md:flex   md:gap-5 md:p-3 md:bg-white
        
        
        
        
        
        
        
        
        
        
        
        
        '>
            <h1 className='text-2xl sm:text-3xl text-indigo-950 font-bold' >{item.title}</h1>
            <div>
                <span className='text-indigo-900 font-semibold'>{item.date} | </span>  
                <span className='text-indigo-900 font-semibold'>{item.topic}</span>
            </div>
            <p className='text-indigo-900'>
                {item.description}
            </p>
        </div>
    ))
}
        </div>
        
 </div>
  )
}

export default Post