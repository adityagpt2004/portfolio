import React from 'react'
import welcome from "../assets/image/welcome.jpg"
import { motion} from "framer-motion";
export default function About() {
  return (
    <div className='w-full  h-screen md:grid grid-cols-2 p-3'>
        <div className='col-span-1 md:w-[70%] md:flex justify-center items-center ml-[20px] p-5'>
            <img src={welcome} alt='stonner' className='inline w-[80%] ml-[120px]'/>
        </div>
        <div className='col-span-1  md:flex justify-center flex-col'>
            <h1 className='text-3xl font-bold m-8'>ABOUT MYSELF</h1>
            <h1 className='text-xl mr-[20px] ml-[0px]'>Hello! My name is ADITYA GUPTA, and I am a passionate frontend developer with a strong creative flair. With a background in computer science and a love for design, I have found the perfect intersection in the world of frontend development. My journey began when I discovered the power of transforming ideas and concepts into visually appealing and interactive user experiences.

I believe that great design goes hand in hand with seamless functionality, and that's what I strive to achieve in every project I work on. From crafting elegant layouts to writing clean and efficient code, I enjoy every aspect of the development process. I have honed my skills in HTML, CSS, JavaScript and React, allowing me to create intuitive and responsive websites that captivate users and deliver exceptional user experiences

</h1>
           <div>
             <motion.button
                 initial={{transform: "translateX(500px)" }}
                 animate={{transform: "translateX(30px)" }}
                 transition={{ type: "spring", stiffness: 100 }}
                 whileHover={{ scale: 1.2}}
                 whileTap={{ scale: 0.8 }}
                 whileFocus={{ scale: 1.2 }}
             class="bg-black text-white font-bold py-2 px-4 rounded mt-10">
  read more..
</motion.button>
            </div>
        </div>
        
    </div>
  )
}
