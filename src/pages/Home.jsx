import React from 'react'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import CustomNavbar from '../components/Navbar'
import { Hero } from '../components/Hero'

export const Home = () => {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}
export default Home;
