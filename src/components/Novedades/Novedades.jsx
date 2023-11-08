import './Novedades.css'

const Novedades = () => {
    return (
        <section id='novedades' className='novedadesContainer newSection'>
            <h2>Novedades</h2>
            <div className="cardNovedadesContainer">
                <div className="cardNovedades">
                    <a target="_blank" rel='noreferrer' href="https://universomola.com/universo-mola-fashion-week">
                        <img src="/img/mola2023.webp" alt="Universo Mola 2023" />
                        <div className="txtNovedades">
                            <span>Evento</span>
                            <p>Universo Mola 2023</p>
                        </div>
                    </a>
                </div>

                <div className="cardNovedades">
                    <a target="_blank" rel='noreferrer' href="https://mendoza.puntoapunto.com.ar/chacras-de-coria-se-vistio-de-moda-sustentable-y-responsable">
                        <img src="/img/desfile.webp" alt="Universo Mola 2023" />
                        <div className="txtNovedades">
                            <span>Evento</span>
                            <p>Desfile Sustentable 2022</p>
                        </div>
                    </a>
                </div>

                <div className="cardNovedades">
                    <a target="_blank" rel='noreferrer' href="https://www.diariouno.com.ar/emprendedores/una-disenadora-mendocina-recicla-cables-fabricar-pulseras-aritos-y-collares-n1225124">
                        <img src="/img/diarioUno.webp" alt="Universo Mola 2023" />
                        <div className="txtNovedades">
                            <span>Nota</span>
                            <p>Diario Uno 2023</p>
                        </div>
                    </a>
                </div>

                <div className="cardNovedades">
                    <iframe width="325" height="218" src="https://www.youtube.com/embed/XQ-xsVMKJXs?si=W78ZKjsHQLePeq6U" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="txtNovedades">
                        <span>Vídeo</span>
                        <p>La Guía Industrial</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Novedades