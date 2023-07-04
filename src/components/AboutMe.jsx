import React from 'react'
import me from '../assets/me.png'
import { motion } from 'framer-motion';
import { fadeIn, textVariant, textSwipeRight } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const AboutMe = () => {
    return (
        <>
            <section class="w-full pb-10 lg:pb-0 overflow-hidden bg-gray-200 md:pt-0 sm:pt-8 2xl:pt-8">
                <div class="w-full mx-auto px-4 md:py-8 lg:py-0 sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">

                        {/** About me text */}
                        <div className='flex flex-col justify-center text-center lg:text-left pt-10 lg:py-4'>
                            <motion.div variants={textVariant()}>
                                <h2 id='aboutme' class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                                    Sobre mí
                                </h2>
                            </motion.div>

                            <motion.div variants={fadeIn('', '', 0.1, 1)}>
                                <div class="lg:mx-0 mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                                    <p>Técnico Superior en Desarrollo de Aplicaciones Web</p>
                                    <p className='text-gray-400 text-sm'>Lucena(Córdoba) 2021-2023</p>
                                    <p>Licenciado en Bellas Artes(Mención en Animación e Ilustración)</p>
                                    <p className='text-gray-400 text-sm'>Universidad de Granada 2016-2020</p>
                                    <p className='mt-2'>
                                        Poseo varias pasiones que nutren mi creatividad y enriquecen mi trabajo.
                                    </p>
                                    <p>Disfruto de tocar la guitarra y la batería, así como de sumergirme en la literatura fantástica.</p>
                                    <p className='mt-2'>Practico calistenia y slackline para mantenerme en forma y alimentar mi disciplina, y en mi tiempo libre disfruto del dibujo digital, el arte tradicional y la fotografía.</p>
                                </div>

                                <p class="mt-6 text-sm lg:text-xl text-gray-500 md:mt-8">
                                    <span class="relative inline-block">
                                        <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-200"></span>
                                        <span class="relative">``La suerte es</span>
                                    </span>
                                    &nbsp; lo que ocurre cuando la preparación se encuentra con la oportunidad`` ~ Seneca
                                </p>
                            </motion.div>
                        </div>

                        {/** Image */}
                        <div class="hidden lg:block lg:relative">
                            <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                            <img class="relative h-full w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom"
                                src={me} alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionWrapper(AboutMe, 'aboutme');

