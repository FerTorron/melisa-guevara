import './App.css'
import Navbar from './components/Navbar/Navbar'
import CardFront from './components/CardFront/CardFront'
import Creaciones from './components/Creaciones/Creaciones'
import ComoComprar from './components/ComoComprar/ComoComprar'
import Recicladas from './components/Recicladas/Recicladas'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <CardFront />
        <Creaciones />
        <ComoComprar />
        <Recicladas />
      </main>
    </>
  )
}

export default App
