import React from 'react'

export default function Footer() {
  return (
    <div>
      < footer className="bg-neutral-900 text-center text-white" >
        <div className="p-4 text-center"> © 2023 Copyright:
          <a className="text-whitehite" href="https://tailwind-elements.com/"> ADITYA GUPTA</a>
        </div>
        <button id='download' className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center m-2">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
          <span>Download CV</span>
        </button>
        <label htmlFor='download'>
        <i className="fa-solid fa-download fa-shake text-[35px] m-2" style={{ color: '#ffffff' }}></i>
        </label>
      </footer >
    </div>
  )
}
