import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    const menuBtn = () => {
        setNavOpen(!navOpen)
    }
    return (
        <header>
            <img src="/img/logo/logoMg.png" alt="Logo Melisa Guevara" />
            <nav className={navOpen ? "navResponsive" : null}>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Creaciones</a></li>
                    <li><a href="#">Joyas Recicladas</a></li>
                    <li><a href="#">Melisa Guevara</a></li>
                    <li><a href="#">Novedades</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <img src="/img/icons/menu.svg" onClick={menuBtn} className='menuBtn' alt="" />
        </header>
    )
}

export default Navbar