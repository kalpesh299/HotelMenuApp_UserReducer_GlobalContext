import React from 'react'

export const Card = ({category,url}) => {
  return (
    <div className='h-1/6 w-1/4 md:w-1/5 md:m-2 m-1 border-2  bg-gray-200 shadow-lg hover:bg-white rounded-lg '>
        <p className='font-bold md:px-2 md:font-bold bg-yellow-400  md:inline w-full '>{category}</p>
         <img className='' src={url}/>
    </div>
  )
}
