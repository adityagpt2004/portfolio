import { useState } from 'react'
import React from 'react'
import {AiOutlineMenu,AiFillCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { motion} from "framer-motion";

export default function Header() {
  const [change , setchange] = useState(true);
  return (
    <div>
       <div className='bg-[#c4b5fd] p-4'>
      <div className='max-w-[1240px] py-4 mx-auto text-black flex justify-between'>
        <div className='text-3xl font-bold'>ADITYA GUPTA</div>
        {change ? 
          <AiOutlineMenu className='md:hidden block' onClick={()=> setchange(!change)}/>
          :
          <AiFillCloseCircle className='md:hidden block' onClick={()=> !setchange(!change)}/>
        }

        <ul className='md:flex gap-5 hidden'>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}>

          <Link to="/">HOME</Link></motion.li>
          <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}>
            <Link to="/about">ABOUT</Link></motion.li>

          <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}>
            <Link to="/form">CONTACT-US</Link></motion.li>
            
          <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}>
            <Link to="/project">MY-WORK</Link></motion.li>
        </ul>
        {/* code for optimization */}
        <ul className={`duration-500 fixed top-[110px] p-6 bg-gray-400 w-full ${change ? 'left-[100%]' : 'left-[0px]'}`}>
          <li className='p-3 font-bold'><Link to="/">HOME</Link></li>
          <li className='p-3 font-bold'><Link to="/about">ABOUT</Link></li>
          <li className='p-3 font-bold'><Link to="/form">CONTACT-US</Link></li>
          <li className='p-3 font-bold'><Link to="/project">MY-WORK</Link></li>
        </ul>
      </div>
    </div>
    </div>
  )
}
