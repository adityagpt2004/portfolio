import React,{useState} from 'react'
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineInstagram} from "react-icons/ai";
import { AiOutlineFullscreen} from "react-icons/ai";
import { AiOutlineFullscreenExit} from "react-icons/ai";
import { motion} from "framer-motion";

export default function Sidebar() {
    const [toggle, setToggle] = useState(true);
    return (
        <div className='fixed left-0 top-[210px]'>
            <div>
                {toggle ? 
                <AiOutlineFullscreenExit onClick={()=>setToggle(!toggle)} className='md:hidden text-[40px]'/>
                :
                <AiOutlineFullscreen onClick={()=>setToggle(!toggle)} className='md:hidden text-[40px]'/>
                }
            </div>
            <div className={` bg-[#c4b5fd] md:hidden rounded-r-[20px] ${toggle?'hidden':''}`}>
                <div className='text-[40px] p-2'>
                    <a href='https://github.com/dashboard'><AiOutlineGithub /></a>
                </div>
                <motion.div className='text-[40px] p-2'>
                    <motion.a 
                   
                    href='https://www.linkedin.com/in/aditya-kumar-286b41251/'><AiFillLinkedin/></motion.a>
                </motion.div>
                <div className='text-[40px] p-2'>
                    <a><AiOutlineDownload /></a>
                </div>
                <div className='text-[40px] p-2'>
                    <a href='https://www.instagram.com/'><AiOutlineInstagram/></a>
                </div>
            </div>
            <div className='max-md:hidden bg-[#c4b5fd] rounded-r-[20px] '>
                <motion.div 
                 whileHover={{ scale: 1.2 }}
                className='text-[40px] p-2'>
                    <a href='https://github.com/dashboard'><AiOutlineGithub /></a>
                </motion.div>
                <motion.div 
                 whileHover={{ scale: 1.2 }}
                className='text-[40px] p-2'>
                    <motion.a  href='https://www.linkedin.com/in/aditya-kumar-286b41251/'><AiFillLinkedin/></motion.a>
                </motion.div>
                <motion.div 
                 whileHover={{ scale: 1.2 }}
                className='text-[40px] p-2'>
                    <a><AiOutlineDownload /></a>
                </motion.div>
                <motion.div
                whileHover={{ scale: 1.2 }}
                className='text-[40px] p-2'>
                    <a href='https://www.instagram.com/'><AiOutlineInstagram/></a>
                </motion.div>
            </div>
        </div>
    )
}
