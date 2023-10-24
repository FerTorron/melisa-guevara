import './Novedades.css'

const Novedades = () => {
    return (
        <div className='novedadesContainer'>
            <h2>Novedades</h2>
            <div className="cardNovedadesContainer">
                <div className="cardNovedades">
                    <img src="/img/mola2023.png" alt="Universo Mola 2023" />
                    <div className="txtNovedades">
                        <span>Evento</span>
                        <p>Universo Mola 2023</p>
                    </div>
                </div>

                <div className="cardNovedades">
                    <img src="/img/desfile.png" alt="Universo Mola 2023" />
                    <div className="txtNovedades">
                        <span>Evento</span>
                        <p>Desfile Sustentable 2022</p>
                    </div>
                </div>

                <div className="cardNovedades">
                    <img src="/img/diarioUno.png" alt="Universo Mola 2023" />
                    <div className="txtNovedades">
                        <span>Nota</span>
                        <p>Diario Uno 2023</p>
                    </div>
                </div>

                <div className="cardNovedades">
                    <img src="/img/desfile.png" alt="Universo Mola 2023" />
                    <div className="txtNovedades">
                        <span>Vídeo</span>
                        <p>La Guía Industrial</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Novedades