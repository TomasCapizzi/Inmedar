import React from 'react'

//type Props = {}

export default function Contacto() {
  return (
    <div className='contacto-container' id='contacto'>
        <article className='form-container'>
            <h3>Contáctanos</h3>
            <form action="">
                <label htmlFor="">Nombre</label>
                <input type="text" />
                <label htmlFor="">Empresa</label>
                <input type="text" />
                <label htmlFor="">Mail</label>
                <input type="text" />
                <label htmlFor="">Consulta</label>
                <textarea name="" id=""></textarea>
                <button>Enviar</button>
            </form>
        </article>
        <article className='info-container'>
            <div className='mapa'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1340.5032659168915!2d-58.50118312358265!3d-34.66239164273393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc91b3af92afd%3A0x3e1dd3b77250d6e6!2sAv.%20Lisandro%20de%20la%20Torre%202371%2C%20C1440ECL%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1715797068774!5m2!1ses-419!2sar" width="auto" height="auto" loading="lazy"></iframe>
            </div>
            <div className='datos'>
                <h4>Teléfono</h4>
                <p>+54 9 11 1234-5678</p>
                <h4>Mail</h4>
                <p>info@inmedar.com.ar</p>
            </div>
        </article>
    </div>
  )
}