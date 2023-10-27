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
            <CardFront />
            <Creaciones />
            <ComoComprar />
            <Recicladas />
            <SobreMelisa />
            <Novedades />
            <Contacto />
        </>
    )
}

export default Home