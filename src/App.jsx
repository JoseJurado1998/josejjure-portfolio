/** Components */
import CustomNavbar from './components/Navbar'
import { Hero } from './components/Hero'

/** FONT AWESOME ICONS */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Projects from './components/Projects'
library.add(fas)



function App() {

  return (
    <>
      <CustomNavbar />
      <Hero />
      <Skills/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
