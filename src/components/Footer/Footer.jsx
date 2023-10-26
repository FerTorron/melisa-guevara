import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="topFooter">
                <img src="/img/icons/logo.svg" alt="Logo Melisa Guevara" />
                <div className="contactInfo">
                    <span id='contactFooter'>Contáctanos:</span>
                    <div className="contactItem">
                        <div className="iconContact iconContactMail">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="icon/correo">
                                    <path id="forma" d="M17.6668 21.2836H7.3331C4.233 21.2836 2.16626 19.7335 2.16626 16.1167V8.88315C2.16626 5.26636 4.233 3.71631 7.3331 3.71631H17.6668C20.7669 3.71631 22.8336 5.26636 22.8336 8.88315V16.1167C22.8336 19.7335 20.7669 21.2836 17.6668 21.2836Z" stroke="#7B571E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path id="Vector" d="M7.32568 9.40991L10.5995 12.0238C11.6865 12.8916 13.2274 12.8985 14.3221 12.0405L17.678 9.40991" stroke="#7B571E" strokeWidth="2" strokeLinecap="round" />
                                </g>
                            </svg>

                        </div>
                        <div className="txtContact">
                            <span>Correo</span>
                            <p>info@melisaguevara.com</p>
                        </div>
                    </div>

                    <div className="contactItem">
                        <div className="iconContact iconContactWsp">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="icon/whatsapp">
                                    <path id="Vector" d="M21.95 12.4371C21.95 17.5371 17.75 21.7371 12.65 21.7371C10.95 21.7371 9.25005 21.2371 7.85005 20.4371L3.45005 21.7371C3.25005 21.8371 3.05005 21.6371 3.05005 21.3371L4.35005 16.7371C3.65005 15.4371 3.35005 14.0371 3.35005 12.5371C3.35005 7.43706 7.45005 3.23706 12.65 3.23706C17.85 3.23706 21.95 7.33706 21.95 12.4371Z" stroke="#7B571E" strokeWidth="2" />
                                    <path id="Vector_2" fillRule="evenodd" clipRule="evenodd" d="M16.3601 13.8217C16.1588 13.6596 15.9231 13.5455 15.671 13.4881C15.4189 13.4307 15.157 13.4316 14.9052 13.4905C14.527 13.6474 14.2826 14.24 14.0381 14.5363C13.9866 14.6073 13.9109 14.6571 13.8252 14.6764C13.7394 14.6956 13.6496 14.683 13.5726 14.6408C12.1878 14.0993 11.027 13.1063 10.2788 11.8231C10.215 11.743 10.1848 11.6414 10.1946 11.5395C10.2044 11.4376 10.2533 11.3435 10.3312 11.277C10.6038 11.0076 10.804 10.6739 10.9131 10.3068C10.9374 9.90185 10.8445 9.49851 10.6455 9.14484C10.4916 8.64901 10.1988 8.20751 9.80165 7.87251C9.5968 7.78053 9.36968 7.7497 9.14767 7.78371C8.92567 7.81773 8.71826 7.91516 8.55048 8.06423C8.2592 8.31512 8.02801 8.62804 7.87392 8.97995C7.71983 9.33186 7.64677 9.7138 7.66012 10.0976C7.66102 10.3132 7.68838 10.5278 7.74159 10.7367C7.87672 11.2386 8.08453 11.7181 8.35844 12.1601C8.55607 12.4986 8.77169 12.8264 9.00439 13.1419C9.76065 14.1784 10.7113 15.0584 11.8035 15.7331C12.3516 16.0759 12.9374 16.3547 13.5493 16.5638C14.185 16.8515 14.8868 16.9619 15.5803 16.8834C15.9754 16.8237 16.3497 16.6679 16.6704 16.4299C16.9911 16.1918 17.2482 15.8787 17.4192 15.5181C17.5197 15.3003 17.5501 15.0567 17.5065 14.8209C17.4017 14.3387 16.7558 14.0541 16.3601 13.8217Z" fill="#7B571E" />
                                </g>
                            </svg>

                        </div>
                        <div className="txtContact">
                            <span>Whatsapp</span>
                            <p>+5492612472520</p>
                        </div>
                    </div>

                    <hr />

                    <div className="iconContact iconContactIg">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="icon/instagram">
                                <rect id="cuadro" x="2.75" y="2.96973" width="19.5" height="19.0602" rx="5" stroke="#7B571E" strokeWidth="2" strokeLinejoin="round" />
                                <circle id="circulo" cx="12.4999" cy="12.4999" r="4.46423" stroke="#7B571E" strokeWidth="2" />
                                <circle id="flash" cx="18.178" cy="6.90186" r="1.28931" fill="white" />
                            </g>
                        </svg>

                    </div>

                    <div className="iconContact iconContactFc">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="icon/facebook">
                                <path id="Vector" d="M17.4395 13.8129L18.0291 10.0112H14.3428V7.54411C14.3428 6.50403 14.8578 5.4902 16.5087 5.4902H18.1846V2.25342C18.1846 2.25342 16.6638 1.99658 15.2098 1.99658C12.174 1.99658 10.1897 3.81745 10.1897 7.11372V10.0112H6.81519V13.8129H10.1897V23.0034H14.3428V13.8129H17.4395Z" fill="#7B571E" />
                            </g>
                        </svg>

                    </div>

                </div>
            </div>
            <hr />
            <p>Copyright © 2023 Melisa Guevara</p>
        </footer>
    )
}

export default Footer