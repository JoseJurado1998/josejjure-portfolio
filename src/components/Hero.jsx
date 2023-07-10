import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion';


export const Hero = () => {
  return (
    <div className='flex background-c h-screen w-full'>
        <div className='my-auto pl-8 sm:pl-20'>
          <h1
            className='text-[30px] sm:text-[40px] font-poppins uppercase 
             colorHeader'>
            ¡Hola! soy
            <span
              className="text-[50px] sm:text-[90px] pl-4
                font-mova text-gray-50
                font-extrabold uppercase">
              Jose
            </span>
          </h1>
          <div className='text-sm sm:text-lg text-gray-100'>
            <p className='flex flex-row gap-4 items-center mt-2 text-md'>
              <FontAwesomeIcon icon="fa-solid fa-computer" />
              Desarrollador Web Full Stack
            </p>
            <p className='flex flex-row gap-4 items-center mt-2 text-md'>
              <FontAwesomeIcon icon="fa-solid fa-paintbrush" />
              Artista Digital
            </p>
            <p className='flex flex-row gap-4 items-center mt-2 text-md'>
            <FontAwesomeIcon icon="fa-solid fa-guitar" />
              Músico
            </p>
          </div>
        </div>

        {/** Framer motion */}
        <div
          className="absolute bottom-5 sm:bottom-8 w-full 
          flex justify-center items-center">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-gray-100 mb-1"
              />
            </div>
        </div>
      </div>
  )
}
