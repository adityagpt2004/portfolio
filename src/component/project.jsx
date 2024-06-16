import React from 'react'
import camera from "../assets/image/product.png"
import { motion,} from "framer-motion";

export default function Project() {
  return (
    <div className='bg-gradient-to-b from-violet-500 to-white max-md:mt-[400px]'>

            <div className='max-w-[1240px] text-center m-auto text-5xl font-bold'>
                PROJECTS
            </div>
            <div className='flex flex-wrap max-w-[1240px] m-auto'>
                <motion.div
                initial={{transform: "translateX(-500px)" }}
                animate={{transform: "translateX(0px)" }}
                transition={{
                    ease: "easeInOut",
                    duration: 1.2
                 } }
                className='w-[250px] h-[500px] border-2 border-black my-10 rounded-3xl m-5'>
                    <div className=''><img src={camera} /></div>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold'>
                            RAMAN PHOTOGRAPHY
                        </h2>
                        <p className=''>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt optio deserunt necessitatibus. Ut facere ab voluptatem sit nihil aliquid nisi exercitationem quidem laborum fugiat cupiditate nobis blanditiis, et ipsam cumque?
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                 initial={{transform: "translateX(-2000px)" }}
                 animate={{transform: "translateX(0px)" }}
                transition={{
                    ease: "easeInOut",
                    duration: 1.3
                 } }
                className='w-[250px] h-[500px] border-2 border-black my-10 rounded-3xl m-5'>
                    <div className=''><img src={camera} /></div>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold'>
                          RAMAN PHOTOGRAPHY
                        </h2>
                        <p className=''>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt optio deserunt necessitatibus. Ut facere ab voluptatem sit nihil aliquid nisi exercitationem quidem laborum fugiat cupiditate nobis blanditiis, et ipsam cumque?
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                initial={{transform: "translateX(-2000px)" }}
                animate={{transform: "translateX(0px)" }}
                transition={{
                    ease: "easeInOut",
                    duration: 1.4
                 } }
                className='w-[250px] h-[500px] border-2 border-black my-10 rounded-3xl m-5'>
                    <div className=''><img src={camera} /></div>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold'>
                          RAMAN PHOTOGRAPHY
                        </h2>
                        <p className=''>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt optio deserunt necessitatibus. Ut facere ab voluptatem sit nihil aliquid nisi exercitationem quidem laborum fugiat cupiditate nobis blanditiis, et ipsam cumque?
                        </p>
                    </div>
                </motion.div>
                <motion.div 
                initial={{transform: "translateX(-2000px)" }}
                animate={{transform: "translateX(0px)" }}
                transition={{
                    ease: "easeInOut",
                    duration: 1.5
                 } }
                className='w-[250px] h-[500px] border-2 border-black my-10 rounded-3xl m-5'>
                    <div className=''><img src={camera} /></div>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold'>
                            RAMAN PHOOGRAPHY
                        </h2>
                        <p className=''>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt optio deserunt necessitatibus. Ut facere ab voluptatem sit nihil aliquid nisi exercitationem quidem laborum fugiat cupiditate nobis blanditiis, et ipsam cumque?
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
  )
}
