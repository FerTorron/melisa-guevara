import './ComoComprar.css'

const ComoComprar = () => {
    return (
        <section className='comprarSection'>
            <div className="titleComprar">
                <hr />
                <h5>¿Cómo Comprar?</h5>
                <hr />
            </div>
            <div className="listComprar">
                <div className="itemListComprar">
                    <div className="iconItem">
                        <img src="/img/icons/diamond.svg" alt="Icono Diamante" />
                    </div>
                    <div className="txtListComprar">
                        <h5>Elegir Producto</h5>
                        <p>Elige de nuestro catalogo o solicita uno personalizado</p>
                    </div>
                </div>

                <div className="itemListComprar">
                    <div className="iconItem">
                        <img src="/img/icons/chat.svg" alt="Icono Chat" />
                    </div>
                    <div className="txtListComprar">
                        <h5>Contáctanos</h5>
                        <p>Contáctanos por WhatsApp o al correo info@melisaguevara.com</p>
                    </div>
                </div>

                <div className="itemListComprar">
                    <div className="iconItem">
                        <img src="/img/icons/card.svg" alt="Icono Tarjeta" />
                    </div>
                    <div className="txtListComprar">
                        <h5>Realizar pago</h5>
                        <p>Aceptamos transferencias, Mercado Pago, Efectivo</p>
                    </div>
                </div>

                <div className="itemListComprar">
                    <div className="iconItem">
                        <img src="/img/icons/truck.svg" alt="Icono Camion" />
                    </div>
                    <div className="txtListComprar">
                        <h5>Envio rapido</h5>
                        <p>Nos aseguramos que tu producto llegue lo antes posible</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComoComprar