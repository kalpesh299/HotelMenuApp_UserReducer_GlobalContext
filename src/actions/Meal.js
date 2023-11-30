import React from 'react'

export const Meal = ({area,name,image}) => {
  return (
    <div className='mt-2'>
    <div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={image} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{area}</h3>
        </a>
        <p class="mb-3  text-gray-700 dark:text-gray-400 font-bold font-serif">{name}</p>
       
    </div>
</div>

    </div>
  )
}
