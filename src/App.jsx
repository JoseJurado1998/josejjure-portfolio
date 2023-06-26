/** Components */
import CustomNavbar from './components/Navbar'
import { Hero } from './components/Hero'

/** FONT AWESOME ICONS */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Skills from './components/Skills'
library.add(fas)



function App() {

  return (
    <>
      <CustomNavbar />
      <Hero />
      <Skills></Skills>
      <p>a</p>
      <p>a</p>
      <p>b</p>
      <p>b</p>
      <p>b</p>

    </>
  )
}

export default App
