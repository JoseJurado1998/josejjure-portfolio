import React, { useState, useEffect } from 'react';
import cv from '../assets/CV_JoseJurado.pdf';

export const CustomNavbar = () => {

    //Scroll
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    //Download
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'cv_josejurado.pdf';
        link.click();
    };

    //navbar
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };
    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    /**
     * 
     */
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>

            <nav
                className={`navbar fixed top-0 w-full z-50 transition-opacity duration-300 
                 ${isScrolled ? 'bg-gray-600 bg-opacity-10 backdrop-filter backdrop-blur' : 'bg-opacity-0 '
                    }`}>


                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/** Download Button */}
                    <button onClick={handleDownload} class="boton bg-gray-200 hover:bg-blue-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>CV</span>
                    </button>

                    {/** Hamburguer*/}
                    <button data-collapse-toggle="navbar-solid-bg" aria-controls="navbar-solid-bg" aria-expanded={isNavbarOpen ? 'true' : 'false'}
                        onClick={toggleNavbar}
                        type="button"
                        class="inline-flex items-center p-2 ml-3 text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>

                    {/** Right bar */}
                    <div className={`w-full md:block md:w-auto ${isNavbarOpen ? '' : 'hidden'}`} id="navbar-solid-bg">
                        {/* <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg"> */}
                        <ul class="flex flex-col font-medium text-center mt-4 rounded-lg bg-blue-100 bg-opacity-10 border-2 border-opacity-20 border-blue-200
                          md:text-start md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                            <li>
                                <a href="#skills" onClick={closeNavbar} class="nav-links text-[21px] font-medium text-gray-100 rounded hover:text-blue-300">
                                    Habilidades</a>
                            </li>
                            <li>
                                <a href="#aboutme" onClick={closeNavbar} class="nav-links text-[21px] font-medium text-gray-100 rounded hover:text-blue-300 ">
                                    Sobre mí</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={closeNavbar} class="nav-links text-[21px] font-medium text-gray-100 rounded hover:text-blue-300">
                                    Proyectos</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={closeNavbar} class="nav-links text-[21px] font-medium text-gray-100 rounded hover:text-blue-300 ">
                                    Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default CustomNavbar
