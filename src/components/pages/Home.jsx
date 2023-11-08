import CardFront from '../CardFront/CardFront'
import Creaciones from '../Creaciones/Creaciones'
import ComoComprar from '../ComoComprar/ComoComprar'
import Recicladas from '../Recicladas/Recicladas'
import SobreMelisa from '../SobreMelisa/SobreMelisa'
import Novedades from '../Novedades/Novedades'
import Contacto from '../Contacto/Contacto'
import Whatsapp from '../Whatsapp/Whatsapp'

const Home = () => {
    return (
        <>
            <Whatsapp />
            <div id='inicioMelisa'></div>
            <CardFront />
            <div id='creaciones'></div>
            <Creaciones />
            <ComoComprar />
            <div id='joyasRecicladas'></div>
            <Recicladas />
            <div id='melisa'></div>
            <SobreMelisa />
            <div id='novedades'></div>
            <Novedades />
            <div id='contacto'></div>
            <Contacto />
        </>
    )
}

export default Home