import './Produccion.css'

const Produccion = () => {
    return (
        <div className='produccionContainer'>
            <h2>Proceso de producción y trazabilidad</h2>
            <div className="itemProduccion">
                <div className="titleItemProduccion">
                    <h3>1. Selección y acopio de materiales</h3>
                </div>
                <div className="infoItemProduccion">
                    <div className="leftInfoItemProduccion">
                        <img src="/img/produccion1.webp" alt="Placas de computadora" />
                    </div>
                    <div className="rightInfoItemProduccion">
                        <p>El proceso se inicia con la obtención de componentes de CPU, discos duros y otros materiales procedentes de residuos electrónicos en desuso. </p>
                        <p>Para llevar a cabo esta actividad, colaboro estrechamente con Cooperativas de recicladores urbanos, que nos permiten seleccionar los elementos que necesito y comprárselos. A cambio, también los capacito en lo que respecta a la identificación de componentes específicos procedentes de computadoras y su valor real que poseen para su reventa a chacaritas.  Además, se los informa sobre las partes que poseen composiciones más complejas o pueden ser perjudiciales para la salud (plaquetas, tubos de rayos catódicos rotos y tubos fluorescentes) y sobre la importancia del acopio bajo techo.</p>
                    </div>
                </div>
            </div>

            <div className="itemProduccion">
                <div className="titleItemProduccion">
                    <h3>2. Limpieza, acondicionamiento y desarme</h3>
                </div>
                <div className="infoItemProduccion">
                    <div className="leftInfoItemProduccion">
                        <img src="/img/produccion2.webp" alt="Cables" />
                    </div>
                    <div className="rightInfoItemProduccion">
                        <p>Los cables que se utilizarán con su recubrimiento se limpian con un paño y detergente. En el caso de las cámaras de bicicleta, son limpiadas con agua, detergente y secadas al sol para finalmente ser esterilizadas con alcohol etílico.</p>
                        <p>En este punto, también se realiza el desarme final de otras partes, como discos duros o partes de aluminio de disquetes. En el caso de que se requieran cables sin su recubrimiento de PVC, se pelan con una herramienta manual.</p>
                        <p>Todo esto se dispone en cajas o recipientes según su tipo para mantenerlo organizado de la mejor manera. Posteriormente, de acuerdo a los modelos que se van a producir, se realiza una última selección de materiales, por ejemplo, según el color y la tipología.</p>
                    </div>
                </div>
            </div>

            <div className="itemProduccion">
                <div className="titleItemProduccion">
                    <h3>3. Preparación para producción</h3>
                </div>
                <div className="infoItemProduccion">
                    <div className="leftInfoItemProduccion">
                        <img src="/img/produccion3.webp" alt="Joyas recicladas" />
                    </div>
                    <div className="rightInfoItemProduccion">
                        <p>En este momento, se aplican diferentes técnicas de entrelazados manuales (tejidos orientales, tejidos náuticos, trenzados, etc.), cumpliendo con los parámetros establecidos en el programa de diseño previamente desarrollado: disponibilidad de ese material, terminaciones, calidad, peso, comodidad, etc.</p>
                        <p>También se realizan los trabajos de corte, mecanizado, lijado y pulido de terminaciones y detalles metálicos. Para el corte, se utilizan herramientas de banco y plantillas de corte.</p>
                        <p>Otro detalle con respecto al disco duro es que, al ser un material con un excelente acabado superficial, se complica el proceso de mecanizado. Se debe tener extrema precaución protegiendo las superficies para no echarlo a perder.</p>
                    </div>
                </div>
            </div>

            <div className="itemProduccion">
                <div className="titleItemProduccion">
                    <h3>4. Diseño y montaje</h3>
                </div>
                <div className="infoItemProduccion">
                    <div className="leftInfoItemProduccion">
                        <img src="/img/produccion4.webp" alt="Joyas Recicladas" />
                    </div>
                    <div className="rightInfoItemProduccion">
                        <p>El montaje es el último paso en el cual la pieza se termina. Se llevan a cabo procesos de prensado durante más de 24 horas para asegurar una correcta unión adhesiva. También se realizan pequeñas soldaduras si es necesario, según la pieza.</p>
                        <p>En el caso de los aros, se utilizan pasadores de acero quirúrgico tercerizado, al igual que algunos cierres magnéticos del tipo redondo, mosquetones y, si fuese necesario, alguna cadena. Estamos trabajando para disminuir el material que es adquirido externamente. Sin embargo, algunas piezas podemos asegurar que se trata del 100% de material recuperado y reincorporado al proceso de producción.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produccion