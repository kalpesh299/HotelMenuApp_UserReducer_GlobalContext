import React from 'react'
import { FaSearchengin } from "react-icons/fa6";
export const Header = () => {
  return (
    <div>
        <nav class="border-gray-200 bg-black dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFjKZjYb-nFgmzqdyCzNkfw38DzshY-tQPQ&usqp=CAU" class="h-10" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">GetUrFood</span>
    </a>
    <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div class="hidden w-full" id="navbar-hamburger">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className='bg-[url("https://t3.ftcdn.net/jpg/02/74/26/90/360_F_274269053_9U6OcKvNwUb61EHTrmYEACqVwb34uhsu.webp")] flex flex-col h-96 w-screen items-center justify-center' >
<div className='w-full flex justify-center items-center ' >
<input className='w-2/4 rounded-3xl p-4 outline-none' placeholder='search '/>
<button className='text-4xl mt-1 p-2 text-white bg-black rounded-2xl ml-2'><FaSearchengin /></button>
</div>
<h1 className='text-center text-4xl font-extrabold p-2 text-black'>What is Your Favourite Meal ?</h1>
</div>
    </div>
  )
}
