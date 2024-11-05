import React, { useRef, useEffect } from 'react';
import './Registro.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Medicinal from '../../assets/medicina.png'

const Footer = () => {
    const formRef = useRef(null); // Creamos una referencia al formulario

    useEffect(() => {
        const form = formRef.current; // Accedemos al formulario usando la referencia

        if (form) {
            const handleSubmit = (e) => {
                e.preventDefault();
                const nombre = document.getElementById('nombre').value;
                const email = document.getElementById('email').value;
                const telefono = document.getElementById('telefono').value;
                const opcion = document.getElementById('opcion').value;
                const mensaje = document.getElementById('mensaje').value;
                guardarContacto(nombre, email, telefono, opcion, mensaje);
            };

            form.addEventListener('submit', handleSubmit); // Añadimos el listener

            return () => {
                form.removeEventListener('submit', handleSubmit); // Limpiamos el listener al desmontar el componente
            };
        }
    }, []);

    function handleSubmit(event) {
        event.preventDefault(); // Previene el envío del formulario por defecto

        const nombre = event.target.nombre.value; // Obtener el valor del nombre
        const email = event.target.email.value; // Obtener el valor del email
        const telefono = event.target.telefono.value; // Obtener el valor del teléfono
        const opcion = event.target.opcion.value; // Obtener el valor de la opción seleccionada (Sí o No)
        const mensaje = event.target.mensaje.value; // Obtener el valor del mensaje

        // Construir la URL para enviar a Google Forms
        fetch(`https://docs.google.com/forms/d/e/1FAIpQLScXdfJKU2XHfQdiMMzPUufOKQWYgVxbxE02HhjJJky0hCObgg/formResponse?submit=Submit&usp=pp_url&entry.1412527661=${encodeURIComponent(nombre)}&entry.509287817=${encodeURIComponent(email)}&entry.1159708760=${encodeURIComponent(telefono)}&entry.55167361=${encodeURIComponent(opcion)}&entry.513478566=${encodeURIComponent(mensaje)}`, {
            method: 'POST',
            mode: 'no-cors'
        })
            .then(() => {
                alert('Contacto Guardado!');
                // Limpiar el formulario
                formRef.current.reset();
            })
            .catch(() => {
                alert('Error al guardar el contacto.');
            });
    }

    return (
        <div>
            <footer className='container-footer'>
                <div className="logo-section">
                    <svg id="Capa_mini" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 721.43 722.87" width={100}>
                        <path d="M447.71,288.27c-8.43-46.91-17.24-93.13-24.88-139.55a308.09,308.09,0,0,1-2.28-84c0.94-8.56-4.42-13.4-9.29-18.53-0.84-.88-5,0.26-6.77,1.58C396.63,53.65,394,62.12,394,71.52c-0.08,12.15,0,24.29,0,37.16-7.52-2.66-13.39-5-19.42-6.76a29.27,29.27,0,0,0-9.89-1.1c-5.06.32-6.83,2.75-5,7.46,2,5.21,4.06,10.9,7.71,14.9,20.45,22.4,30.78,49.44,37.31,78.37,2.47,11,4.9,21.95,7.44,33.33a6.82,6.82,0,0,1-1.92-.52C384.53,213.56,359,192.64,333.29,172c-26.21-21.09-48.09-45.56-62.1-76.59-3.3-7.31-10.29-11-17.93-12.76-4.49-1-5.29,2.59-5.37,5.95-0.25,11.35,2.78,22,7.61,32.14,12.34,25.83,31,46.76,52.46,65.11,11.34,9.69,23.82,18.19,36.4,26.25C375.46,232,400,257.17,411.09,293.29c10.73,35,3.29,67.15-16.28,97.72a80.92,80.92,0,0,1-28.7-21.41c-11-12.52-17.63-27.54-24.39-42.51-18-39.84-35.51-79.91-54.42-119.31-10.74-22.38-25.5-42.31-45.26-58A101.7,101.7,0,0,0,195.15,129c-8.64-1.48-16.47.76-23.5,5.81-5,3.56-5.21,6.8,0,9.69,7.95,4.42,16.06,9,24.66,11.69,16.43,5.19,30.78,12.92,41.25,27.42-7.41-1.53-14.52-3.41-21.75-4.38a36.36,36.36,0,0,0-25.29,5.61c-6.3,4.12-6.17,8.36,0,12.69,7.55,5.25,16.23,6.26,25.06,7.15,29,2.92,49.43,19,64.73,42.69,14.11,21.84,22.24,46.33,30.89,70.57,4,11.25,8,22.49,12.35,34.53-1.88-.72-3.13-1.09-4.27-1.66-18.71-9.27-36.7-19.61-52.33-33.71-17.35-15.66-26.71-35.12-29-58.27A55.38,55.38,0,0,0,235.12,246c-2-5.63-7.13-9.56-11-9.27-5.13.37-11.26,4.78-11.91,10.53-0.85,7.4-1.19,15.22.28,22.44,2.09,10.3,6,20.23,9.18,30.31,0.55,1.77,1.2,3.5,2.16,6.3l-23.68-6.71c-17.8-5.06-35.78-9.55-53.33-15.34-17.2-5.67-34-12.49-50.88-19.18a28.35,28.35,0,0,0-17-1.63c-6.29,1.38-8.88,5.35-6.31,11.26,2.43,5.59,6,10.68,9.41,16.54-1.46.29-3.06,0.64-4.67,0.92-8.35,1.45-14.21,6.23-17.25,14A7.93,7.93,0,0,0,61.37,313a17.44,17.44,0,0,0,16.26,5.62A292.41,292.41,0,0,1,151,316c35.33,3.33,68.81,13.16,100.69,28.53,11.55,5.57,22.74,11.9,34.09,17.88L285.6,364c-8.9,2.12-17.76,4.43-26.7,6.34-49.12,10.5-98.87,16-149,18.3-14.81.69-29.67,1-44.42,2.36-6.09.58-12.2,3.08-17.81,5.75-4.58,2.18-4.85,6.07-1.69,10.17,5.36,7,12.43,10.8,21.28,11.11,10.41,0.36,20.81.64,31.22,1.08,3.64,0.15,7.26.69,12.34,1.19-3.16,3-5.54,5-7.66,7.25-5.67,6.08-7.12,13.17-4.69,21.09,1.2,3.93,3.88,6.29,7.89,5.18,4.3-1.2,9.49-2.32,12.26-5.34,18.69-20.38,42.44-31.13,68.66-37.35,13.85-3.28,27.85-5.95,42.7-9.08a12.38,12.38,0,0,1-1.24,2.52C206,427.1,188.1,453.37,171,480.17c-8,12.52-18.52,22.14-30.83,30-14,8.95-28.34,17.28-41.8,26.91-6.44,4.61-11.55,11.3-16.57,17.6-3.67,4.6-2.24,8.27,3.67,8.83a55.37,55.37,0,0,0,18.74-1.18c17.25-4.44,31.72-14.39,45.47-25.26,23.6-18.66,43.68-40.37,59-66.57,17.66-30.19,41.77-53.77,74.93-66.64,35.3-13.71,68.78-9,100.58,10.93,3.09,1.94,2.78,3.93,2,6.62-5,16.43-16.31,27.83-31.1,35.09-23.4,11.49-47.39,21.76-71.14,32.55-26,11.81-52.31,23-77.87,35.63-22.27,11-42.36,25.48-58,45.26-11.64,14.7-19,31.27-21.23,50-0.88,7.49,1.45,14.34,5.38,20.6,3.1,4.94,5.67,4.95,9.36.53a67,67,0,0,0,12.95-25.22c4.66-16.6,13-30.77,27.43-41.62-1.6,7.31-3.46,14.17-4.55,21.14a36.74,36.74,0,0,0,5.5,26.35c4.22,6.5,8.76,6.67,12.45,0,2.94-5.29,6-11.29,6.33-17.11,1.6-32.43,17.22-55.94,44.09-72.88,19.72-12.43,41.56-20,63.32-27.71q22.36-8,44.71-16a1.8,1.8,0,0,1,.42.77c-13.21,26.25-28.52,50.84-53.73,67.56-17.7,11.75-37.63,18.32-57.53,25-3.14,1.05-6,3.06-8.94,4.63,2.31,2.66,4.34,5.62,7,7.91,10.73,9.4,23.14,8.51,35.49,4.62,10-3.15,19.65-7.42,29.81-11.32a25.37,25.37,0,0,1-.62,3.08q-20.43,60.9-40.93,121.78c-1.23,3.66-3.13,7.09-4.4,10.74-2.18,6.27-.23,12.75,4.58,16.12,4.56,3.19,10,2.58,15.47-2.07,2.25-1.93,4.06-4.36,6.42-6.93,3.75,5.87,6.55,11.38,10.45,16,2.63,3.09,6.82,4.84,10.31,7.2,2.24-3.58,5.72-6.94,6.45-10.81a62.16,62.16,0,0,0,.56-19.39c-2.72-20.47-1.67-40.92.08-61.29,3.07-35.59,11-70,27.22-102.13,5.69-11.27,12.43-22,18.69-33l1.74,0.34c2.43,10.89,5,21.75,7.25,32.68,9.11,44.54,13.51,89.64,16.08,135,1,18.51,1.91,37,3.36,55.52a30.57,30.57,0,0,0,4.28,13.34c5,8,15,7,18.2-1.84a94.47,94.47,0,0,0,4.46-22.13c1-9.64.86-19.39,1.29-29.09,0.09-2.07.49-4.13,0.9-7.43,2.62,2.4,4.43,4.19,6.37,5.81,6.52,5.43,13.82,7.35,22.2,5.24,3.63-.92,5.42-3.09,4.39-6.44-1.57-5.12-2.53-11.36-6-14.79-21.17-20.76-31.76-46.69-38.36-74.75-3.06-13-5.87-26.08-8.9-39.58a6.21,6.21,0,0,1,1.91.61c22.2,22.77,48.62,40.31,73.7,59.5,22.76,17.41,41.8,37.78,54.69,63.69a99.52,99.52,0,0,0,13.27,19.65c3.17,3.75,7.88,6.44,12.33,8.81,4.8,2.55,7.32,1.21,8.24-4.19,1.4-8.28.87-16.38-2.75-24.29-14.51-31.68-38-55.75-64.59-77.33-18.63-15.14-37.58-29.92-55.81-45.53C422.11,565,408.06,548.6,400,527.71c-8.14-21.18-7.69-42.63-1.36-63.9,4.1-13.77,9.85-27.06,15-41a80.06,80.06,0,0,1,29.59,21.05c10.64,11.87,17.39,26.06,23.79,40.42,16.3,36.55,32.2,73.28,49,109.61,10.62,23,23.9,44.47,42.27,62.34,16.56,16.1,36,26.45,59.11,29.25,8.16,1,15.31-1.81,21.67-6.6,4-3,4.16-5.82-.1-8.33-7.52-4.44-15.13-9.47-23.39-11.76-19.2-5.33-34.28-16-47.35-32.41,5.9,2.32,10.86,4.06,15.64,6.2,12.91,5.78,24.88,2.57,36.32-3.89,6.09-3.44,6.2-7.38-.37-10.15-11-4.62-22.49-8-33.86-11.61-7.21-2.3-14.68-3.79-21.83-6.23-12.79-4.37-22.52-12.82-28.13-25-16.94-36.83-33.42-73.87-50.06-110.84a39.06,39.06,0,0,1-3.28-10.3c5.28,3.33,10.59,6.62,15.85,10,16.95,10.89,33.61,22.19,47.84,36.61,17.68,17.92,29.28,38.37,26.83,64.7-0.38,4.11,6.07,12.2,9.71,12.84,3.48,0.61,12.34-5.18,13.08-10.06,1.08-7.19,1.68-14.79.54-21.9-1.87-11.62-5.31-23-8.07-34.47-0.39-1.63-.64-3.3-1.06-5.54,2.46,0.65,4.15,1,5.78,1.55Q649.4,526.9,705.57,545.6c2.49,0.83,4.75,2.47,7.27,3.07,5.22,1.24,10.6,3.07,15.82,2.79,9.36-.49,12.78-7.6,8-15.74-2.46-4.22-5.8-7.92-9.17-12.43,2.37-.56,4.48-1,6.58-1.56,7.25-1.81,12.72-5.87,16-12.67,1.5-3.06,1.26-5.57-1.46-8-4.75-4.26-10.1-6.51-16.46-5.39-51.21,9-100.82,2.69-149.19-15.52-21.48-8.09-41.91-18.37-62.92-31,9.28-1.69,17.22-3.24,25.2-4.58,35.12-5.89,70.14-12.52,105.42-17.28,23.17-3.13,46.71-3.6,70.09-5.15,11.94-.79,23.94-1,35.83-2.24,3.2-.33,8.53-3.27,8.63-5.23,0.18-3.35-2.31-7.58-4.92-10.19-6.91-6.9-16.18-8.3-25.45-8.55-11.23-.31-22.48-0.07-33.71-0.07l-0.55-2c2-2.13,4-4.2,5.9-6.4,5.63-6.54,7-14.06,4.8-22.29-0.81-3-2.67-5.39-6-4.38-4.94,1.5-11.06,2.32-14.31,5.7-20.42,21.27-46.1,32-74,38.68-12.33,3-24.74,5.63-37.13,8.39a18.26,18.26,0,0,1-3.18,0c6.71-7.58,13.29-14.44,19.21-21.83,15.89-19.85,31.26-40.11,47.26-59.86,20.14-24.87,44-45.27,73.46-58.53,6.86-3.08,10.5-9.21,12.83-16.07,1.08-3.18-.2-5.29-3.61-6.37-9.55-3-18.55-1.34-27.11,3.15-30.08,15.77-56.13,36.46-77.24,63.27C606.83,336.09,592,354.74,576.7,373c-11.35,13.62-24.25,25.69-39.88,34.44-25.36,14.2-51.91,14.51-78.84,5.75-12-3.91-23.55-9.22-35.61-14a56,56,0,0,1,14.44-25.82c13.74-14.37,31.1-23.12,49.08-30.55,30.13-12.44,60.73-23.76,90.73-36.5,27.95-11.87,53.92-27.13,74.51-50.16a124.11,124.11,0,0,0,28-52.2c1.33-5.11,3.08-10.12,4.37-15.24,1.66-6.58-1.51-14.64-7.42-17.71-1.66-.86-4.86-0.3-6.61.79-6.08,3.8-9.73,9.57-11.61,16.46-1.67,6.12-3.45,12.21-5,18.37-3.41,13.75-12.18,23.51-23.8,32.31,1.34-7.74,3-14.71,3.62-21.77,0.52-6.07,0-12.26-.42-18.38a11.22,11.22,0,0,0-2-4.82c-4.53-7.27-9.25-7.84-15.39-1.85-4.17,4.07-6.95,8.79-7,14.88-0.35,32.2-14.44,56.8-41.22,74.37-17.26,11.33-36.52,18.24-55.67,25.42-18,6.74-35.83,13.82-53.73,20.75-0.94.36-1.89,0.69-3.8,1.39,1.21-2.14,1.84-3.51,2.68-4.73,12-17.41,23.25-35.45,36.35-52,17.37-22,40.88-33,69.11-33.24,7.05,0,10.63-4.94,14.21-9.62,0.85-1.11.08-4.17-.86-5.81-3.94-6.91-10.36-9.73-18.07-10.09-14.66-.69-28.19,3.67-41.46,9.19-3.4,1.41-6.73,3-10.84,4.85,0.49-2.13.71-3.6,1.16-5,11.65-36.61,23.24-73.25,35.05-109.8,1.94-6,4.8-11.73,7.38-17.52A19.33,19.33,0,0,0,547,76.46c-0.95-1.58-4-3.33-5.47-2.9a73.17,73.17,0,0,0-13.76,5.87c-1.51.8-2.23,3.07-3.57,5-4.64-6.46-7.91-12-12.14-16.57-2.77-3-6.92-4.8-10.45-7.14-2,3.71-5.24,7.25-5.8,11.16-1.11,7.79-2.12,16.05-.7,23.65,2.28,12.16,2.2,24.18,1.55,36.33-1.71,32.53-6.19,64.56-16.83,95.53a232.1,232.1,0,0,1-30.51,59A23.68,23.68,0,0,1,447.71,288.27Z" transform="translate(-43.87 -45.91)" fill='#B1FA63' />
                    </svg>
                    <h2>Alisos Club</h2>
                </div>
                <div className="footer-content">
                    <div className="contact-form">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" id="nombre" name="nombre" placeholder="Nombre" required />
                            <input type="email" id="email" name="email" placeholder="Email" required />
                            <input type="text" id="telefono" name="telefono" placeholder="Teléfono" required />
                            <select id="opcion" name="opcion" required className="select-input">
                                <option value="" disabled selected>Reprocan</option>
                                <option value="Si">Sí</option>
                                <option value="No">No</option>
                            </select>
                            <textarea id="mensaje" name="mensaje" placeholder="Mensaje" required></textarea>
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                    <img src={Medicinal} alt="" />
                </div>
                <hr />
                <ul className="footer-bottom">
                    <div>Los Alisos Club</div>
                    <div className='cane'>Todos los derechos reservados <a href="https://canepadev.vercel.app/">©CanepaDev</a></div>
                    <div className='social'>
                        <ul>
                            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;