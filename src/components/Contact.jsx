import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




export const Contact = () => {
  return (
    <section className='max-w-4xl border-2 border-gray-200 mx-auto flex justify-center flex-col text-center my-14 py-10'>
      <h2 className='text-3xl font-bold'>¡Contáctame!</h2>
      <p className='mt-10'>jose.jurado.repullo@gmail.com</p>
      <div className='mt-4 flex flex-row justify-center gap-6 text-4xl'>
        <a href='https://www.linkedin.com/in/jose-antonio-jurado-repullo/'>
          <FontAwesomeIcon className='hover:text-sky-300' icon={faLinkedin} />
        </a>
        <a href='mailto:jose.jurado.repullo@gmail.com'>
          <FontAwesomeIcon className='hover:text-sky-300' icon={faEnvelope} />
        </a>
        <a href='https://github.com/JoseJurado1998'>
          <FontAwesomeIcon className='hover:text-sky-300' icon={faGithub}/>
          </a>
      </div>
    </section>
  )
}
export default Contact;
