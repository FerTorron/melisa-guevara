import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/contacto' element={<Contacto />} /> */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
