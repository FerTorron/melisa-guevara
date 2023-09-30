import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="topFooter">
                <img src="/img/icons/logo.svg" alt="Logo Melisa Guevara" />
                <div className="contactInfo">
                    <span>Contáctanos:</span>
                    <div className="contactItem">
                        <div className="iconContact">
                            <img src="/img/icons/correo.svg" alt="Logo Correo" />
                        </div>
                        <div className="txtContact">
                            <span>Correo</span>
                            <p>info@melisaguevara.com</p>
                        </div>
                    </div>

                    <div className="contactItem">
                        <div className="iconContact">
                            <img src="/img/icons/whatsapp.svg" alt="Logo Whatsapp" />
                        </div>
                        <div className="txtContact">
                            <span>Whatsapp</span>
                            <p>+5492612472520</p>
                        </div>
                    </div>

                    <hr />

                    <div className="iconContact">
                        <img src="/img/icons/instagram.svg" alt="Logo Instragram" />
                    </div>

                    <div className="iconContact">
                        <img src="/img/icons/facebook.svg" alt="Logo Facebook" />
                    </div>

                </div>
            </div>
            <hr />
            <p>Copyright © 2023 Melisa Guevara</p>
        </footer>
    )
}

export default Footer