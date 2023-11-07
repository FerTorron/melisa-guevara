import './SobreMi.css'

const SobreMi = () => {
    return (
        <div className='sobreMiContainer'>
            <div className="topNavContainer">
                <div className="navItemsContainer">
                    <span className='strongNav'>SOBRE MÍ</span>
                    <span className='lightNav'>SOBRE LA MARCA</span>
                </div>
                <div className="txtSobreMi">
                    <p>Mi historia comienza en Mendoza, Argentina, una tierra con una pasión por el trabajo y la superación. Me gradué en Diseño Industrial en la Universidad Nacional de Cuyo, un logro que marcó el inicio de mi viaje hacia la creación de algo especial. En mi búsqueda de un propósito profesional, me encontré inmersa en proyectos que abrazaban el upcycling y el desarrollo de programas para su implementación. Fue allí donde descubrí la dirección que daría forma a mi carrera.</p>
                    <p>Descubrí la joyera en mí, un viaje que me llevó a mi infancia y a la profesión de mi padre en electrónica. En 2018, experimenté una profunda conexión con los residuos electrónicos al abordar un proyecto de diseño. Me conmovió la problemática circundante y la falta de acción.</p>
                </div>
            </div>
            <div className="bottomInfoContainer">
                <p>“Soy una soñadora e idealista convencida de que el diseño y la expresión tienen el poder de transformar la sociedad.”</p>
                <div className="imgMelisa">
                    <img src="/img/melisa2.webp" alt="Melisa guevara" />
                    <div className='rectangleBlue'></div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi