import './Recicladas.css'
import { Link } from 'react-router-dom'

const Recicladas = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <section id='joyasRecicladas' className="recicladaContainer newSection">
            <div className="leftReciclada">
                <h3>Joyas Recicladas</h3>
                <p>Nuestras joyas representan una manifestación de creatividad y sostenibilidad en el mundo de la moda. </p>
                <p className='leftRecicladadResponsive'>Estas piezas únicas fusionan la elegancia y el compromiso ambiental al transformar objetos y materiales preexistentes en obras de arte. Cada joya cuenta su propia historia, ya que los materiales reciclados pueden provenir de diversas fuentes.</p>
                <Link onClick={scrollToTop} to="/joyasRecicladas">Descubre Más</Link>
            </div>
            <div className="rightReciclada">
                <img src="/img/cables.webp" alt="Cables" />
            </div>
        </section>
    )
}

export default Recicladas