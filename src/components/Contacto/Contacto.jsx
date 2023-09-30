import './Contacto.css'

const Contacto = () => {
    return (
        <div className='contactoContainer'>
            <h2>Contacto</h2>
            <form action="">
                <input type="text" placeholder='Nombre' />
                <input type="text" placeholder='Correo Electrónico' />
                <textarea name="" placeholder='Mensaje' id="" cols="30" rows="10"></textarea>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Contacto