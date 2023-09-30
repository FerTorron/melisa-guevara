import './App.css'
import Navbar from './components/Navbar/Navbar'
import CardFront from './components/CardFront/CardFront'
import Creaciones from './components/Creaciones/Creaciones'
import ComoComprar from './components/ComoComprar/ComoComprar'
import Recicladas from './components/Recicladas/Recicladas'
import SobreMelisa from './components/SobreMelisa/SobreMelisa'
import Novedades from './components/Novedades/Novedades'
import Contacto from './components/Contacto/Contacto'
import Whatsapp from './components/Whatsapp/Whatsapp'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Whatsapp />
      <main>
        <CardFront />
        <Creaciones />
        <ComoComprar />
        <Recicladas />
        <SobreMelisa />
        <Novedades />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
