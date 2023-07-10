import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { skills, skills2 } from '../utils/icons';

const SkillCard = ({ index, title, icon }) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.12 * index, 0.75)}
            className="w-[180px] bg-gray-100 bg-opacity-5 px-[10px] rounded-[20px] shadow-card">
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="rounded-[20px] py-5 px-12 h-[180px] flex justify-evenly items-center flex-col">
                <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                <h3 className="text-taupe text-[18px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div className="my-8 max-w-6xl mx-auto text-start px-0.5 sm:px-4">
            <motion.div variants={textVariant()} className='text-center sm:text-start'>
                <p id='skills' className='sm:text-[18px] text-[16px] text-gray-200 uppercase tracking-wider font-semibold font-poppins'>Acerca de</p>
                <h2 className='text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins'>Habilidades</h2>
            </motion.div>

            <motion.div
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-gray-200 text-[18px] max-w-3xl leading-[30px]">
                <ul className='grid gap-y-4 sm:gap-y-1 px-4 lg:px-2'>
                    <li>Competencia principal en el desarrollo web con <span className='font-bold'>React.js</span> y <span className='font-bold'>Django Rest Framework.</span></li>
                    <li>Creatividad y punto de vista Artístico en mis proyectos.</li>
                    <li>Interés por el aprendizaje de diseño <span className='font-bold'>UX/UI</span>.</li>
                    <li>Deseo de crecer con nuevos desafíos.</li>
                </ul>
            </motion.div>

            {/** Main skills */}
            <div className="mt-10 flex flex-row flex-wrap justify-center gap-2 sm:gap-3 px-0 sm:px-0">
                {skills.map((skill, index) => (
                    <SkillCard key={skill.title} index={index} {...skill} />
                ))}
            </div>


            {/** Secondary skills */}
            <motion.div variants={textVariant()}>
                <h2 className='mt-12 font-bold md:text-[40px] sm:text-[28px] xs:text-[40px] text-[15px] font-poppins'>Otros conocimientos</h2>
            </motion.div>

            <div className="mt-10 flex flex-row flex-wrap justify-center gap-2">
                {skills2.map((skill, index) => (
                    <SkillCard key={skill.title} index={index} {...skill} />
                ))}
            </div>

        </div>
    )
}

export default SectionWrapper(Skills, 'skills');

