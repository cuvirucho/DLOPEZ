import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form';
function App() {
  const [mostrarComentarios, setMostrarComentarios] = useState(false); // Estado para controlar la visibilidad de comentarios

  const enviarMensaje = () => {
    const numero = "593990978386"; // Número de teléfono
    const mensaje = "Hola deseo hacer una reserva"; // Mensaje
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank'); // Abre WhatsApp en una nueva pestaña
  };

  // Función para alternar la visibilidad de la sección de comentarios
  const toggleComentarios = () => {
    setMostrarComentarios(!mostrarComentarios); // Alterna entre true/false
  };



  const { register, handleSubmit ,reset} = useForm();

  const submit = data => {
		console.log(data);
    	reset(defaultValues)
      const numero = "593990978386"; // Número de teléfono
      const mensaje = data.comentraio; // Mensaje
      const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank'); // Abre WhatsApp en una nueva pestaña
}
const defaultValues = {comentraio: ""}



  return (
    <>
      <section className='conterfull'>
        <article className='conbtelogo'>
          <img className='logo' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1725686754/rpvyfrhzbamenydp6ath.png" alt="logo" />
        </article>
        
        <article className='contelibkteree'>
          <div className='item' onClick={enviarMensaje}>
            <i className='bx bxl-whatsapp'></i>  
            <h2>Whatsapp</h2>
          </div>

          <a href="https://www.facebook.com/profile.php?id=100063954163068">
            <div className='item'>
              <i className='bx bxl-facebook-circle'></i>
              <h2>Facebook</h2>
            </div>
          </a>
          
          <a href="https://www.tiktok.com/@d_lopezspabarberstudio">
            <div className='item'>
              <i className='bx bxl-tiktok'></i>
              <h2>Tiktok</h2>
            </div>
          </a>

          <a href="https://www.instagram.com/d_lopez_spa_barber_estudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <div className='item'>
              <i className='bx bxl-instagram'></i>
              <h2>Instagram</h2>
            </div>
          </a>

          {/* Botón para mostrar/ocultar comentarios */}
          <div className='item' onClick={toggleComentarios}>
            <h2>Comentarios</h2>
          </div>
        </article>

        {/* Sección de comentarios, visible solo si mostrarComentarios es true */}
        {mostrarComentarios && (
          <article className='contecomet' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input  {...register("comentraio")} className='comanteria' type="text" placeholder="Escribe tu comentario..." />
            <button className='btnenvia'  onClick={handleSubmit(submit)} >Enviar</button>
          </article>
        )}
      </section>
    </>
  );

}

export default App;
