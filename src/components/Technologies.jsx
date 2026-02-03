import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiRedis } from 'react-icons/di'
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNodeJs, FaReact } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiCplusplus, SiDocker, SiExpress, SiJavascript, SiMongodb, SiMysql, SiNetlify, SiNpm, SiNumpy, SiOpenai, SiPandas, SiPlotly, SiPostman, SiPython, SiReact, SiRedux, SiScikitlearn, SiStreamlit, SiTailwindcss, SiVercel, SiVite } from 'react-icons/si'
import { motion } from 'framer-motion'
import { SiMongoose } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'

const iconVarients = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
})

const Technologies = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='technologies'
            className='py-20 bg-dark-100'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>Technologies</h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Technologies I work with to bring ideas to life</p>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div
                        variants={iconVarients(2.8)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiCplusplus className='text-7xl text-cyan-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(3.0)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiPython className='text-7xl text-yellow-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(3.2)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaJava className='text-7xl text-red-600' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(3.4)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaHtml5 className='text-7xl text-orange-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(3.6)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaCss3Alt className='text-7xl text-blue-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(3.8)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiJavascript className='text-7xl text-yellow-300' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(3.8)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiTypescript className='text-7xl text-yellow-300' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(4.0)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiTailwindcss className='text-7xl text-sky-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(4.2)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiVite className='text-7xl text-purple-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(4.4)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaReact className='text-7xl text-cyan-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(4.6)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiRedux className='text-7xl text-purple-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(4.8)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaNodeJs className='text-7xl text-green-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(5.0)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiExpress className='text-7xl text-gray-300' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(5.2)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiMongodb className='text-7xl text-green-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(5.4)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiMysql className='text-7xl text-blue-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(5.6)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiDocker className='text-7xl text-sky-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(5.8)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiVercel className='text-7xl text-white' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(6.0)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiNetlify className='text-7xl text-teal-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(6.2)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaGithub className='text-7xl text-white' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(2.9)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaGitAlt className='text-7xl text-orange-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(3.1)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiPostman className='text-7xl text-orange-400' />
                    </motion.div>
                    {/* <motion.div
                        variants={iconVarients(3.3)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiNpm className='text-7xl text-red-600' />
                    </motion.div> */}
                    <motion.div
                        variants={iconVarients(3.5)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiOpenai className='text-7xl text-emerald-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(3.7)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiScikitlearn className='text-7xl text-orange-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(3.9)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiStreamlit className='text-7xl text-red-500' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(4.1)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiPlotly className='text-7xl text-indigo-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(4.3)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiNumpy className='text-7xl text-blue-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVarients(4.5)}
                        initial="initial"
                        animate="animate"
                        className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiPandas className='text-7xl text-indigo-500' />
                    </motion.div>
                    


                </div>

            </div>
        </motion.div>
    )
}

export default Technologies
