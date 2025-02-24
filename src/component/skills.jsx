import React from 'react'
import css from "../assets/image/css.png"
import html from "../assets/image/html.png"
import react from "../assets/image/react.png"
import tailwind from "../assets/image/tailwind.png"
import javascript from "../assets/image/javascript.png"
import CountUp from 'react-countup/'
import { useState } from 'react'

export default function Skills() {
  const [counton,setCounton]=useState(true)
  return (
    <div className=' max-w-[1240px] m-auto h-screen md:grid grid-cols-2'>
      <div className=' col-span-1 md:relative max-md:mt-[300px]'>
        <img src={css} alt='css' className='w-[15%] md:absolute left-[260px] top-[80px]'/>
        <img src={html} alt='html' className='w-[15%] md:absolute left-[50px] top-[300px]'/>
        <img src={javascript} alt='css' className='w-[100px]  md:absolute right-[60px] top-[300px]' />
        <img src={react} alt='css' className='w-[15%] md:absolute bottom-[130px] left-[260px]'/>
        <img src={tailwind} alt='css' className='w-[150px] md:absolute top-[310px] left-[220px]'/>
      </div>
      <div className='col-span-1 md:flex flex-col justify-center p-8'>
        <p className='font-bold text-5xl text-center'>SKILLS</p>
      <p className='mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt optio deserunt necessitatibus. Ut facere ab voluptatem sit nihil aliquid nisi exercitationem quidem laborum fugiat cupiditate nobis blanditiis, et ipsam cumque?</p>
      <div className='mt-10 flex'>
        <p className='text-2xl font-bold inline p-5 '>HTML</p><input type='range'value='100' className='inline'/> <p className='inline'><CountUp start={0} end={100} duration={5}/>%</p>
      </div>
      <div className='mt-5'>
        <p className='text-2xl font-bold inline p-5 '>CSS</p><input type='range'value='100' className='inline'/> <p className='inline'><CountUp start={0} end={100} duration={5}/>%</p>
      </div>
      <div className='mt-5'>
        <p className='text-2xl font-bold inline p-5'>JAVASCRIPT</p><input type='range'value='100' className='inline'/> <p className='inline'><CountUp start={0} end={100} duration={5}/>%</p>
      </div>
      <div className='mt-5'>
        <p className='text-2xl font-bold inline p-5'>REACT</p><input type='range'value='90' className='inline'/> <p className='inline'><CountUp start={0} end={90} duration={5}/>%</p>
      </div>
      <div className='mt-5'>
        <p className='text-2xl font-bold inline p-5'>TAILWIND</p><input type='range'value='90' className='inline'/> <p className='inline'><CountUp start={0} end={90} duration={5}/>%</p>
      </div>
      </div>
    </div>
  )
}

