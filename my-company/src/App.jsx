import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Services' element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
