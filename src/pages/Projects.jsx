import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Jeizy from './Jeizy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    return (
        <>
            <div className='bg-gray-50 text-gray-700'>
                <span className='w-full flex flex-row justify-start pt-2 pl-4 items-center'>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                   <Link to={"/"}> &nbsp; Volver al porfolio</Link>
                </span>
                <header class="w-full container mx-auto">
                    <div class="flex flex-col items-center pb-4">

                        <Link to="/projects" class="font-bold text-sky-300 uppercase text-5xl hover:text-sky-500">
                            Mis Proyectos
                        </Link>
                        <p class="text-lg text-gray-400">
                            José Antonio Jurado Repullo
                        </p>
                    </div>
                </header>

                <nav class="w-full py-2 border-t border-b bg-gray-100">
                    <div class="hidden sm:flex w-full flex-grow sm:items-center sm:w-auto" >
                        <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                            <Link to="jeizy" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Jeizzy</Link>
                            <span class="text-gray-300 py-2 px-4 mx-2">Proyecto2 (WIP)</span>
                        </div>
                    </div >
                </nav >

            </div>
            <Routes>
                <Route path="jeizy" element={<Jeizy />} />
                {/* <Route path="project2" element={<Project2 />} /> */}
            </Routes>
        </>
    )
}

export default Projects