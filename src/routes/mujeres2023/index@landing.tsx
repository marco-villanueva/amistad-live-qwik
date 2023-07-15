import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Countdown } from '~/components/Countdown/Countdown';
import { AmistadLogo } from '~/components/icons/AmistadLogo';
import { FacebookIcon } from '~/components/icons/FacebookIcon';
import { InstagramIcon } from '~/components/icons/InstagramIcon';
import { WhatsappIcon } from '~/components/icons/WhatsappIcon';
import { YoutubeIcon } from '~/components/icons/YoutubeIcon';


export default component$(() => {

  const targetDate = '2023-08-05T11:00:00';

  return (
    <div class="landing">
      <header>
        <div class="header">
          <AmistadLogo variant='dark' style="amistad-logo" />
        </div>
      </header>

      <section class="hero">
        <div class="hero-left">
          <span class="hero-line-1">Congreso</span>
          <span class="hero-line-2">Entre mujeres</span>
          <span class="hero-line-3">"Vivamos en libertad"</span>
          <span class="hero-line-4">5 AGOSTO | 10:00 AM A 6:00 PM</span>
          <a target="_blank" href="https://wa.me/527776089602" class="cta-button"><i class="fa-brands fa-whatsapp"></i>  CUPO LIMITADO</a>
        </div>
        <div class="hero-right">
          <img src="https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Yvonne-01---Amistad-Live_pxmn3e.png" width="300" height="287" alt="Conferencista 1: Yvone Muñoz" />
          <img src="https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310100/Dra.-Pardillo-1---Amistad-Live_yjasjm.png" width="300" height="287" alt="Conferencista 2: Dra. Pardillo" />
        </div>
      </section>

      <section class="countdown">
        <Countdown date={targetDate} />
      </section>

      <section class="congress-section">
        <div class="congress-card">
          <div class="congress-card-left">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2E41dp-co8E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div class="congress-card-right">
            <h3>Experimenta un día de transformación y avivamiento con el poder del Espíritu Santo</h3>
            <p>Estamos emocionadas de presentarte este evento que te brindará una oportunidad única de aprendizaje, conexión y transformación personal.</p>
            <p>Descubre las estrategias más efectivas para alcanzar tus metas y sueños, mientras te conectas con otras mujeres apasionadas y comprometidas como tú.</p>
          </div>
        </div>
      </section>

      <section class="fullwidth-section">
      </section>

      <section class="cost-section-container">
        <div class="icons-main-container">
          <div class="icon-with-text-box">
            <figure class="icon-box">
              <img src="https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Icono-Ticket---Amistad-Live_yowfhy.png" width="100" height="100" alt="Conferencista 1: Yvone Muñoz" />

            </figure>
            <span class="icon-text">Entrada a todas las conferencias</span>
          </div>

          <div class="icon-with-text-box">
            <figure class="icon-box">
              <img src="https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Icono-Comida---Amistad-Live_ew6l6w.png" width="100" height="100" alt="Conferencista 1: Yvone Muñoz" />

            </figure>
            <span class="icon-text">Incluye comida</span>
          </div>

          <div class="icon-with-text-box">
            <figure class="icon-box">
              <img src="https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Icono-Adoracio%CC%81n---Amistad-Live_t6odca.png" width="100" height="100" alt="Conferencista 1: Yvone Muñoz" />

            </figure>
            <span class="icon-text">Noche de adoración</span>
          </div>

        </div>
        <div class="cost-container">
          <span class="cost-line-1">En este congreso, tendrás la oportunidad de escuchar una de las líderes más importantes de nuestro País y una de las voces más prodigiosas de Adoración de Latinoamérica</span>
          <span class="cost-line-2">COSTO DEL CONGRESO</span>
          <span class="cost-line-3">$500.00 MXP</span>
          <a target="_blank" href="https://wa.me/527776089602" class="cost-cta-button"> <i class="fa-brands fa-whatsapp"></i> 777-608-9602</a>
        </div>
      </section>

      <section class="congress-section">
        <div class="congress-card">
          <div class="congress-card-right">
            <h3>"Cielo Abierto: <br /> Noche de Adoración con Yvonne Muñoz"</h3>
            <p>Disfruta un tiempo de Adoración con Yvonne Muñoz, interprete de algunas de las canciones más escuchadas en Latinoamérica como "No Hay Nadie Como Tú" y "Digno."</p>
            <div class="concert-date-container">
              <span class="concert-date">5 AGOSTO | 7:00 PM <s class="concert-date-price">$200</s></span>
            </div>
            <h3 class="gratis">GRATIS CON TU ACCESO AL CONGRESO</h3>
            <div class="botton-centred">
              <a target="_blank" href="https://wa.me/527776089602" class="gratis-cta-button"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
            </div>
          </div>
          <div class="congress-card-photo">
          </div>
        </div>
      </section>

      <section class="image-background-section">
        <div class="conferencistas-card">
          <div class="conferencista">
            <img src="https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Yvonne-03---Amistad-Live_waosew.png" width="350" height="347" alt="Conferencista 1" />
            <h4>Yvonne Muñoz</h4>
            <p>Una mujer con un corazón apasionado por Dios y con un deseo profundo de servir a la iglesia global. Ha viajado por casi todo el mundo dirigiendo profundos tiempos de Adoración a donde quiera que va.</p>
            <p>Yvonne lleva una trayectoria de más de 19 años sirviendo en el ministerio del pastor y cantautor, Marco Barrientos, fidelidad y entrega le caracterizan durante ese tiempo.</p>
          </div>
          <div class="conferencista">
            <img src="https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310100/Dra.-Pardillo-2---Amistad-Live_fmjb8s.png" width="350" height="347" alt="Conferencista 2" />
            <h4>Dra. Rosa Ma. Pardillo</h4>
            <p>La Dra. Rosa Ma. Pardillo junto con su esposo el Dr. Idilio Pardillo Escalona fundo Amistad Cristiana A.C. desde hace má s de 50 años.</p>
            <p>Son Padres espirituales de miles de personas y su liderazgo ha influenciado gran parte de la Iglesia Cristiana en México.</p>
          </div>
        </div>
      </section>

      <section class="timeline-section">
        <div class="timeline-title">
          <span> Programa del Congreso</span>
        </div>
        <div class="timeline-main">
          <div class="timeline-header">Sábado 5 de Agosto, 2023</div>
          <div class="timeline-container">
            <div id="timeline-content">
              <ul class="timeline">
                <li class="event" data-date="9:45 am">
                  <p>Se abren puertas</p>
                </li>
                <li class="event" data-date="10:00 am a 6:00 pm">
                  <p>Conferencia Mujeres “Vivamos en libertad”</p>
                </li>
                <li class="event" id="date" data-date="7:00 pm a 8:30 pm">
                  <p>"Noche de adoración</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section >

      <section class="small-hero">
        <div class="small-hero-content">
          <h1>CUPO LIMITADO</h1>
          <h2>APARTA TU LUGAR</h2>
          <div class="botton-centred">
            <a target="_blank" href="https://wa.me/527776089602" class="gratis-cta-button"> <i class="fa-brands fa-whatsapp"></i>  777-608-9602</a>
          </div>
        </div>
      </section>

      <section class="white-card-section">
        <div class="white-card">
          <div class="white-card-left">
            <img src="https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Foto-Contacto---Amistad-Live_aqissd.jpg" width="600" height="430" alt="Imagen" />
          </div>
          <div class="white-card-right">
            <h3>Contáctanos</h3>
            <p><b>Dirección:</b></p>
            <p>Privada Sol #7, Col. Chapultepec, CP. 62450, Cuernavaca, Morelos</p>
            <a target="_blank" href="https://goo.gl/maps/wCWhZcAgPwcTCcRY9" class="como-llegar">¿CÓMO LLEGAR?</a>
            <p><b><i class="fa-brands fa-whatsapp"></i>  WhatsApp</b></p>
            <p>777-608-9602</p>
          </div>
        </div>
      </section>

      <footer>
        <div class="footer">
          <AmistadLogo variant='light' style="amistad-logo" />
          <div class="social-icons">
            <a target="_blank" href="https://www.facebook.com/AmistadLiveGlobal/" aria-label="Browse our Facebook"><FacebookIcon style="icons" /></a>
            <a target="_blank" href="https://www.instagram.com/amistad.live" aria-label="Browse our Instagram"><InstagramIcon style="icons" /></a>
            <a target="_blank" href="https://www.youtube.com/c/AmistadLive" aria-label="Browse our Youtube"><YoutubeIcon style="icons" /></a>
            <a target="_blank" href="https://wa.me/527776089602" aria-label="Contact us by Whatsapp"><WhatsappIcon style="icons" /></a>
          </div>
        </div>
      </footer>

      <footer class="mini-footer">
        <p>Aviso de privacidad - Amistad Live 2023</p>
      </footer>
    </div >
  );
});

export const head: DocumentHead = {
  title: 'Bienvenidos a Amistad Live',
  meta: [
    {
      name: 'Congreso entre Mujeres: Vivamos en Libertad - Amistad Live',
      content: 'Somos Amistad Live, una comunidad, una familia',
    },
  ],
};
