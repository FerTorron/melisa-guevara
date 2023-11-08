import './Contacto.css'

const Contacto = () => {
    return (
        <section id='contacto' className='contactoContainer newSection'>
            <h2>Contacto</h2>
            <form action="https://formspree.io/f/meqbpzko" method="POST">
                <input type="text" placeholder='Nombre' name='name' />
                <input type="email" name='email' placeholder='Correo Electrónico' />
                <textarea name="message" placeholder='Mensaje' id="" cols="30" rows="10"></textarea>
                <button>Enviar</button>
            </form>
        </section>
    )
}

export default Contacto