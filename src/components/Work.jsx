import React from 'react'

import data from '../WorkData'

function Work() {
  return (
    <div className='w-full pt-10 flex items-center justify-center flex-col pb-20'>
<a href='#' className='w-4/5 text-indigo-900'>Featured works</a>

<div className='w-full  flex flex-col justify-center items-center pt-10 gap-5'> 
    {
        data.map(item => (
            <div key={item.id} className='
            
            
            flex-col
            
            
            
            w-4/5 flex md:flex-row justify-center gap-5'>
                <img src={item.image} alt={item.title} />

                <div className='flex flex-col gap-5'>
                    <h1 className='text-2xl text-indigo-950 sm:text-4xl font-bold'>
                        {item.title}</h1>
                    <div className='flex  items-center gap-5'>
                        <span className='p-1 bg-indigo-900 text-center text-white w-[60px] rounded-full'>{item.date}</span>
                        <span className='text-slate-400'>{item.topic}</span>
                    </div>
                    <p className='text-indigo-900'>
                        {item.description}
                    </p>
                </div>

            </div>
        ))
    }
</div>
    </div>
  )
}

export default Work