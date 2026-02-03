import { div, nav } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <a href="#" className='text-3xl font-bold text-white'>
                        Omkar
                        <span className='text-purple'>Shelar</span>
                        <div className='w-4 h-4 bg-purple rounded-full'></div>
                    </a>
                </div>
                <div className='hidden md:flex space-x-10'>
                    <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Home</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple   duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>About</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple   duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#technologies" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Technologies</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple   duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Projects</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple   duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Experience</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple   duration-300 group-hover:w-full'></span>
                    </a>

                    <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Contact</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple   duration-300 group-hover:w-full'></span>
                    </a>
                </div>

                {/* mobile button */}
                <div className='md:hidden'>
                    {
                        showMenu ?
                            <FaXmark onClick={() => setShowMenu(!showMenu)}
                                className='text-2xl cursor-pointer' /> :
                            <FaBars onClick={() => setShowMenu(!showMenu)}
                                className='text-2xl cursor-pointer' />
                    }


                </div>
            </div>

            {/* Mobile menus */}

            {
                showMenu && (
                    <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4  '>
                        <a onClick={() => setShowMenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                            <span>Home</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple   duration-300 group-hover:w-full'></span>


                        </a>

                        <a onClick={() => setShowMenu(!showMenu)} href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                            <span>About</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple   duration-300 group-hover:w-full'></span>

                        </a>

                        <a onClick={() => setShowMenu(!showMenu)} href="#technologies" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                            <span>Technologies</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple   duration-300 group-hover:w-full'></span>

                        </a>

                        <a onClick={() => setShowMenu(!showMenu)} href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                            <span>Projects</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple   duration-300 group-hover:w-full'></span>

                        </a>

                        <a onClick={() => setShowMenu(!showMenu)} href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                            <span>Experience</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple   duration-300 group-hover:w-full'></span>

                        </a>

                        <a onClick={() => setShowMenu(!showMenu)} href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                            <span>Contact</span>
                                                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple   duration-300 group-hover:w-full'></span>

                        </a>
                    </div>
                )
            }

        </nav>
    )
}

export default Navbar
