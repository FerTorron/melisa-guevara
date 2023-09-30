import './Creaciones.css'

const Creaciones = () => {
    return (
        <div className='creacionesSection'>
            <h3>Creaciones</h3>
            <div className="containerCreaciones">
                <div className="itemCreacion">
                    <img src="/img/products/resilient.png" alt="" />
                    <div className="txtItem">
                        <h4>Resilient</h4>
                        <p>Pendientes dorados elaborados de cobre</p>
                    </div>
                </div>

                <div className="itemCreacion">
                    <img src="/img/products/ethereal.png" alt="" />
                    <div className="txtItem">
                        <h4>Ethereal</h4>
                        <p>Pulsera con tres estilos para lucir diferente</p>
                    </div>
                </div>

                <div className="itemCreacion">
                    <img src="/img/products/sahbrinna.png" alt="" />
                    <div className="txtItem">
                        <h4>Sahbrinna</h4>
                        <p>Collar trenzado en tres hermosos tonalidades</p>
                    </div>
                </div>

                <div className="itemCreacion">
                    <img src="/img/products/angelha.png" alt="" />
                    <div className="txtItem">
                        <h4>Angelha</h4>
                        <p>Pulsera celeste con dos aros dorados frontales</p>
                    </div>
                </div>
            </div>
            <a href="#">VER MÁS</a>
        </div>
    )
}

export default Creaciones