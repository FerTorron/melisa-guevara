import './Recicladas.css'

const Recicladas = () => {
    return (
        <div className="recicladaContainer">
            <div className="leftReciclada">
                <h3>Joyas Recicladas</h3>
                <p>Nuestras joyas representan una manifestación de creatividad y sostenibilidad en el mundo de la moda. </p>
                <p className='leftRecicladadResponsive'>Estas piezas únicas fusionan la elegancia y el compromiso ambiental al transformar objetos y materiales preexistentes en obras de arte. Cada joya cuenta su propia historia, ya que los materiales reciclados pueden provenir de diversas fuentes.</p>
                <a href="#">Descubre Más</a>
            </div>
            <div className="rightReciclada">
                <img src="/img/cables.png" alt="Cables" />
            </div>
        </div>
    )
}

export default Recicladas