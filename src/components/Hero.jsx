import React from 'react'
import { motion } from 'framer-motion'
import {assets} from '../assets/assets'
const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='home'
            className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
        >
            <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
                {/* left side content */}
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Hi, I'm <span className='text-purple'>Omkar Shelar</span>
                    </h1>
                    <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>Full Stack Developer</h2>
                    <p className='text-lg text-gray-300 mb-8'>
                        I am a third year Computer Engineering student focused on building efficient full-stack applications and integrating AI-powered features into modern web systems.                   </p>
                    <div className='flex space-x-4'>
                        <a href="https://drive.google.com/file/d/1M0qrXf6YV4X7tmMupSKT8Rb0kpBeg6wQ/view?usp=drive_link"  target="_blank" rel="noopener noreferrer" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>Resume</a>
                        <a href="#contact" className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300'>Contact Me</a>
                    </div>


                </div>

                {/* right side image */}

                <div className='md:w-1/2 flex justify-center'>
                <div className='relative w-64 h-64 md:w-107 md:h-80'>
                    <img 
                    className='relative rounded-2xl w-64 h-64 md:w-107 md:h-80 onject-cover z-10'
                    src={assets.portfolio} alt="Profile"/>

                </div>
                    
                </div>

            </div>

        </motion.div>
    )
}

export default Hero
