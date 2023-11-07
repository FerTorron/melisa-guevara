import './SobreEmpresa.css'

const SobreEmpresa = () => {
    return (
        <div className='sobreMarcaContainer'>
            <div className="topNavContainer">
                <div className="navItemsContainer">
                    <span className='lightNav'>SOBRE MÍ</span>
                    <span className='strongNav'>SOBRE LA MARCA</span>
                </div>
            </div>
            <div className="middleImgContainer">
                <div className="middleItemContainer">
                    <div className="leftMiddleItem">
                        <p>El mundo a nuestro alrededor cambia a un ritmo vertiginoso. El cambio climático, la escasez de agua, los desastres naturales y las desigualdades sociales tienen un impacto creciente en nuestras vidas. Es importante que todos tomemos medidas para abordar estas cuestiones.</p>
                        <p>En <b>Melisa Guevara Joyería Sustentable</b>, no solo verás colecciones de joyería de diseño, sino también una gama de actividades y servicios diseñados para satisfacer diversas necesidades. </p>
                    </div>
                    <div className="rightMiddleItem">
                        <img src="/img/diarioUno.png" alt="Melisa con pulseras" />
                    </div>
                </div>

                <div className="middleItemContainer reverseMiddleItemContainer">
                    <div className="rightMiddleItem">
                        <img src="/img/maquinaPulsera.png" alt="Una maquina para pulseras" />
                    </div>
                    <div className="leftMiddleItem">
                        <p>La empresa tiene el propósito de impactar positivamente en la comunidad, compartiendo experiencias y promoviendo modelos como la economía circular y aquellas que tienen un impacto social positivo.</p>
                    </div>
                </div>

                <div className="bottomItemContainer">
                    <div className="topBottomItem">
                        <p>“La misión es convertir lo que antes dañaba nuestra tierra en arte y diseño. Estas creaciones transmiten un mensaje de esperanza y concienciación.“</p>
                    </div>
                    <div className="middleItemContainer reverseMiddleItemContainer">
                        <div className="leftMiddleItem">
                            <p className='finalBottom'><b>Únete a esta emocionante aventura. Cada compra que haces es un paso hacia un futuro más sostenible.</b></p>
                        </div>
                        <div className="rightMiddleItem">
                            <img src="/img/pulseraSombra.png" alt="Una imagen de una pulsera con sombra" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreEmpresa