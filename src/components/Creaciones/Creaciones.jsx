import './Creaciones.css'

const Creaciones = () => {
    return (
        <div className='creacionesSection'>
            <div className="creacionesTitle">
                <h3>Exclusivas</h3>
                <p>Nuestras joyas son únicas y las creamos especialmente para ti</p>
            </div>
            <div className="containerCreaciones">
                <div className="itemCreacion">
                    <img src="/img/products/ethereal.png" alt="" />
                    <div className="txtItem">
                        <h4>ETHEREAL</h4>
                        <p>Realizado con cables metálicos y recubiertos</p>
                    </div>
                </div>

                <div className="itemCreacion">
                    <img src="/img/products/resilient.png" alt="" />
                    <div className="txtItem">
                        <h4>RESILIENT</h4>
                        <p>Tejido a mano en cordón redondo, con cables metálicos y mallas</p>
                    </div>
                </div>

                <div className="itemCreacion">
                    <img src="/img/products/sahbrinna.png" alt="" />
                    <div className="txtItem">
                        <h4>SAHBRINNA</h4>
                        <p>Tejidas a mano con cierres en metal de disco duro</p>
                    </div>
                </div>

                <div className="itemCreacion">
                    <img src="/img/products/angelha.png" alt="" />
                    <div className="txtItem">
                        <h4>ANGELHA</h4>
                        <p>Trenzados en cables con cobertura metálica</p>
                    </div>
                </div>
            </div>
            <a href="#">VER MÁS</a>
        </div>
    )
}

export default Creaciones