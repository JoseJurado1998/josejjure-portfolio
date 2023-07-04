/** FONT AWESOME ICONS */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Route, Routes } from 'react-router-dom'
library.add(fas)
//
import Home from './pages/Home'
import Projects from './pages/Projects'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path="/projects/*" element={<Projects />} />
        <Route path="*" component={<div>Pagina no encontrada</div>} />
      </Routes>

    </>
  )
}

export default App
