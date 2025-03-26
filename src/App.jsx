import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form';
function App() {
  const [mostrarComentarios, setMostrarComentarios] = useState(false); // Estado para controlar la visibilidad de comentarios

  const enviarMensaje = () => {
    const numero = "593963200325"; // Número de teléfono
    const mensaje = "Hola deseo hacer una reserva"; // Mensaje
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank'); // Abre WhatsApp en una nueva pestaña
  };

  

  const handleClick = () => {
    const direccion = encodeURIComponent("Moritas, Cuenca, Ecuador");
    const url = `https://www.google.com/maps/dir/?api=1&destination=${direccion}`;
    window.open(url, "_blank");
  }



  return (
    <>
      <section className='conterfull'>
        <article className='conbtelogo'>
          <img className='logo' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731124196/Que_esperas_._dqfhgg.png" alt="logo" />
        </article>
        
        <article className='contelibkteree'>
          <div className='item' onClick={enviarMensaje}>
            <i className='bx bxl-whatsapp'></i>  
            <h2>Reservas</h2>
          </div>

          <a className='item'  href="https://www.facebook.com/Moritascafe">
            
              <i className='bx bxl-facebook-circle'></i>
              <h2>Facebook</h2>
            
          </a>
          
          <a  className='item'  href="https://www.tiktok.com/@moritas.coffe?is_from_webapp=1&sender_device=pc">
            
              <i className='bx bxl-tiktok'></i>
              <h2>Tiktok</h2>
           
          </a>



          <a  className='item' href="https://www.instagram.com/moritas_coffee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            
              <i className='bx bxl-instagram'></i>
              <h2>Instagram</h2>
          
          </a>


          <a className='item'     href="https://moritasfranqusia.netlify.app/">
          <i class='bx bx-trending-up'></i>
              <h2>Franquisia</h2>
          </a>


          <div className='item' onClick={handleClick}>
          
          <i class='bx bxs-navigation'></i>
            <h2  className='1' >Como llegar</h2>
          
          </div>
     
     
        </article>

   
      </section>
    </>
  );

}

export default App;
