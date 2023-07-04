import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import react from '../assets/icons/react.png'
import django from '../assets/icons/django.png'
import mysql from '../assets/icons/mysql.png'
import project1 from '../assets/project1.png'
import { Link } from 'react-router-dom';


const Skills = () => {
    return (

        <div className="my-8 max-w-6xl mx-auto">
            <motion.div variants={textVariant()} className='text-center sm:text-start'>
                <p className='sm:text-[18px] text-[16px] text-gray-200 uppercase tracking-wider font-semibold font-poppins'>Acerca de</p>
                <Link to={"/projects/jeizy"}><h2 id='projects' className='text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins hover:text-sky-400'>Mis proyectos</h2></Link>
            </motion.div>

            <motion.div
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-10 sm:mt-16 text-gray-200 text-[18px] max-w-3xl leading-[30px] px-3">
                <div class="max-w-sm rounded overflow-hidden shadow-lg customBlack">
                    <div class="relative">
                        <div class="overlay">
                            <img class="w-full" src={project1} alt="Sunset in the mountains" />
                            <a href='/'>
                                <div class="text-overlay cursor-pointer">
                                    <span classNames="font-bold text-xl z-50 mb-4">Ir al sitio web</span>
                                </div>
                            </a>
                        </div>
                        <div class="flex flex-row absolute bottom-0 right-0 transform text-center mb-4 gap-2 mr-2">
                            <div class="h-10 w-10 rounded-full overflow-hidden bg-sky-700 bg-opacity-90">
                                <img class="h-full w-full object-cover p-1" src={react} alt="Image" />
                            </div>
                            <div class="h-10 w-10 rounded-full overflow-hidden bg-green-800 bg-opacity-90">
                                <img class="h-full w-full object-cover p-1" src={django} alt="Image" />
                            </div>
                            <div class="h-10 w-10 rounded-full overflow-hidden bg-sky-100 bg-opacity-95">
                                <img class="h-full w-full object-cover p-1" src={mysql} alt="Image" />
                            </div>
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-4">Jeizy E-commerce</div>
                        <p class="text-gray-300 text-sm">
                            Este proyecto trata de una simulación de web funcional de una tienda online de productos de peluquería.
                        </p>
                    </div>
                    <div class="px-6 pt-1 pb-2">
                        <Link to={"/projects/jeizy"}>
                            <button class="inline-block bg-gray-200 hover:bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ver</button>
                        </Link>
                    </div>
                </div>


            </motion.div>

        </div>
    )
}

export default SectionWrapper(Skills, 'skills');