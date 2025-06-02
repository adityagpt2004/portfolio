import React from 'react'
import Typed from 'react-typed';
import { motion,} from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';


export default function Banner() {
  return (
    <div className='backgroundimage'>

      <div className='w-full h-screen flex justify-center items-center flex-col'>
        <motion.div 
        initial={{transform: "translateY(-500px)" }}
        animate={{transform: "translateY(0px)" }}
        transition={{ type: "spring", stiffness: 100 }}
        className=' md:text-3xl font-bold text-[20px]'>Welcome</motion.div>
        <motion.div
         initial={{transform: "translateX(-500px)" }}
         animate={{transform: "translateX(0px)" }}
         transition={{ type: "spring", stiffness: 100 }}
        className='md:text-6xl font-bold text-[40px]'>ADITYA GUPTA</motion.div>
        <div className='md:text-4xl font-bold text-[20px]'><h1>
      I am a&nbsp;
      <Typed
        strings={['Developer', 'Designer', 'Engineer']}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </h1>
</div>

      </div>

    </div>
  )
}
