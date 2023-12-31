import './Creaciones.css'

const Creaciones = () => {
    return (
        <section id='creaciones' className='creacionesSection newSection'>
            <div className="creacionesTitle">
                <h3>Exclusivas</h3>
                <p>Nuestras joyas son únicas y las creamos para ti</p>
            </div>
            <div className="containerCreaciones">
                <div className="itemCreacion">
                    <img src="/img/products/ethereal.webp" alt="" />
                    <div className="txtItem">
                        <h4>ETHEREAL</h4>
                        <p>Realizado con cables metálicos y recubiertos</p>
                    </div>
                </div>

                <div className="itemCreacion">
                    <img src="/img/products/resilient.webp" alt="" />
                    <div className="txtItem">
                        <h4>RESILIENT</h4>
                        <p>Tejido a mano en cordón redondo, con cables metálicos y mallas</p>
                    </div>
                </div>

                <div className="itemCreacion">
                    <img src="/img/products/sahbrinna.webp" alt="" />
                    <div className="txtItem">
                        <h4>SAHBRINNA</h4>
                        <p>Tejidas a mano con cierres en metal de disco duro</p>
                    </div>
                </div>

                <div className="itemCreacion">
                    <img src="/img/products/angelha.webp" alt="" />
                    <div className="txtItem">
                        <h4>ANGELHA</h4>
                        <p>Trenzados en cables con cobertura metálica</p>
                    </div>
                </div>
            </div>
            <a href="https://www.instagram.com/melisaguevara_ecojoyas/" target="_blank" rel='noreferrer'>VER MÁS</a>
        </section>
    )
}

export default Creaciones