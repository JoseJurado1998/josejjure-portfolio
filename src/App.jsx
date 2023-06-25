/** Components */
import CustomNavbar from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'

/** FONT AWESOME ICONS */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)



function App() {

  return (
    <>

      <CustomNavbar></CustomNavbar>
      <Hero></Hero>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>b</p>
      <p>b</p>
      <p>b</p>

    </>
  )
}

export default App
