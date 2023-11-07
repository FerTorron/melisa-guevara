import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/pages/Home'
import JoyasRecicladas from './components/pages/JoyasRecicladas'
import Melisa from './components/pages/Melisa'

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/joyasRecicladas' element={<JoyasRecicladas />} />
            <Route path='/sobreMelisa' element={<Melisa />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
