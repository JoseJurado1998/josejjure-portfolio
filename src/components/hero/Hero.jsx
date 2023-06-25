import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Hero = () => {
  return (
    <div className='flex background-c h-screen w-full'>
        <div className='my-auto pl-2 sm:pl-14'>
          <h1
            className='text-[20px] sm:text-[40px] font-poppins uppercase 
             colorHeader'>
            ¡Hola! soy
            <span
              className="text-[50px] sm:text-[90px] pl-4
                font-mova text-gray-50
                font-extrabold uppercase">
              Jose
            </span>
          </h1>
          <div className='ml-2 sm:ml-10'>
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
      </div>
  )
}
