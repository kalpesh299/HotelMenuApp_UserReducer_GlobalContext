import React from 'react'

export const Card = ({category,url}) => {
  return (
    <div className='h-1/6 w-1/5 m-2  border-2  bg-gray-200 shadow-lg hover:bg-white rounded-lg '>
        <p className=' px-2 font-bold bg-yellow-400 inline '>{category}</p>
         <img className='' src={url}/>
    </div>
  )
}
