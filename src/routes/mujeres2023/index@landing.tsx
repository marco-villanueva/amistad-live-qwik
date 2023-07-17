import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Countdown } from '~/components/Countdown/Countdown';
import { AmistadLogo } from '~/components/icons/AmistadLogo';
import { FacebookIcon } from '~/components/icons/FacebookIcon';
import { InstagramIcon } from '~/components/icons/InstagramIcon';
import { WhatsappIcon } from '~/components/icons/WhatsappIcon';
import { YoutubeIcon } from '~/components/icons/YoutubeIcon';


export default component$(() => {

    useStylesScoped$(`
  
  .hero {
      display: flex;
      align-items: center;
      padding: 50px;
      background-image: url('https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Fondo-Slider-con-flores---Amistad-Live_bbrurr.jpg');
      background-size: cover;
      min-height: 400px;
  }
  
  .hero-left {
      display: flex;
      flex-direction: column;
      margin-left: 5rem;
      align-items: center;
  }
  
  .hero-line-1 {
      font-size: 6rem;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--morado);
  }
  
  .hero-line-2 {
      font-size: 4rem;
      font-weight: bold;
      text-transform: uppercase;
      color: var(--morado);
      margin-bottom: 10px;
  }
  
  .hero-line-3 {
      font-size: 2.25rem;
      font-weight: bold;
      text-transform: uppercase;
      color: var(--negro);
      font-style: italic;
      font-family: var(--font-secondary);
      margin-bottom: 10px;
  }
  
  .hero-line-4 {
      font-size: 2.1rem;
      text-transform: uppercase;
      color: var(--negro);
      margin-bottom: 10px;
      border: 2px solid var(--negro);
      border-radius: 10px;
      padding: 0.5rem;
  }
  
  @media (max-width: 768px) {
      .header {
          padding: 2rem 2rem;
          background-color: var(--beige);
      }
  
      .hero {
          flex-direction: column;
          padding: 3rem 1rem;
      }
  
      .hero-left {
          margin-left: 0;
          margin-bottom: 2rem;
          text-align: center;
      }
  
      .hero-line-1 {
          font-size: 4rem;
      }
  
      .hero-line-2 {
          font-size: 3rem;
      }
  
      .hero-line-3 {
          font-size: 1.8rem;
      }
  
      .hero-line-4 {
          font-size: 1.7rem;
      }
  
      .hero-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
      }
  
      .hero-right img {
          width: 200px;
          height: auto;
          margin-right: 1rem;
          margin-left: 1rem;
      }
  }
  
  @media (max-width: 1250px) {
      .header {
          padding: 2rem 2rem;
          background-color: var(--beige);
      }
  
      .hero {
          flex-direction: column;
          padding: 3rem 1rem;
      }
  
      .hero-left {
          margin-left: 0;
          margin-bottom: 2rem;
          text-align: center;
      }
  
      .hero-line-1 {
          font-size: 4rem;
      }
  
      .hero-line-2 {
          font-size: 3rem;
      }
  
      .hero-line-3 {
          font-size: 1.8rem;
      }
  
      .hero-line-4 {
          font-size: 1.7rem;
      }
  
      .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
      }
  
      .hero-right img {
          width: 200px;
          height: auto;
          margin-right: 1rem;
          margin-left: 1rem;
      }
  }
  
  
  .cta-button {
      display: inline-block;
      padding: 12px 24px;
      background-color: var(--morado);
      color: #FFFFFF;
      text-decoration: none;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
      width: 10rem;
      text-align: center;
      margin-top: 1rem;
  }
  
  .hero-right {
      flex-basis: 50%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
  }
  
  .hero-right img {
      margin-left: 20px;
  }
  
  .countdown {
      padding: 50px;
      background-color: #735794;
      color: #FFFFFF;
      text-align: center;
  }
  
  .congress-section {
      padding: 50px;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
  }
  
  .congress-card {
      display: flex;
      align-items: center;
      background-color: #F4F3ED;
      border-radius: 20px;
      max-width: 70%;
      overflow: hidden;
  }
  
  .congress-card-left {
      flex-basis: 50%;
      width: 50%;
  }
  
  .congress-card-left iframe {
      width: 100%;
  }
  
  .congress-card-right {
      flex-basis: 50%;
      padding: 20px;
      overflow: hidden;
      width: 50%;
  }
  
  .congress-card-right h3 {
      font-size: 24px;
      color: var(--morado);
      margin-bottom: 10px;
  }
  
  .congress-card-right p {
      font-size: 18px;
      color: #191919;
      margin-bottom: 20px;
  }
  
  @media (max-width: 1250px) {
      .congress-card {
          padding: 1rem;
          flex-direction: column;
          max-width: 100%;
      }
  
  
      .congress-card-left,
      .congress-card-right {
          flex-basis: auto;
          width: 100%;
      }
  
      .congress-card-right {
          padding: 1rem;
      }
  
      .congress-card-right h3 {
          font-size: 20px;
      }
  
      .congress-card-right p {
          font-size: 16px;
          margin-bottom: 10px;
      }
  }
  
  .fullwidth-section {
      display: flex;
      align-items: center;
      padding: 50px;
      background-color: #FFFFFF;
  }
  
  .cost-section-container {
      display: grid;
      grid-template-columns: 2fr 3fr;
      background-color: var(--rosa);
  }
  
  .icon-with-text-box {
      display: flex;
      flex-direction: row;
      align-items: center;
  }
  
  .icon-text {
      font-size: 1.25rem;
  }
  
  .icons-main-container {
      background-image: url('https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310100/Fondo-beneficios-1---Amistad-Live_kjpewt.jpg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      padding: 2rem;
  }
  
  .cost-container {
      color: white;
      padding: 3rem;
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  
  .cost-line-1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 2rem;
  }
  
  .cost-line-2 {
      font-size: 3rem;
      font-weight: bold;
      text-align: center;
  }
  
  .cost-line-3 {
      font-size: 5rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 2rem;
  }
  
  .cost-cta-button {
      background-color: white;
      color: var(--morado);
      width: 10rem;
      text-align: center;
      padding: 0.5rem 2rem;
      border-radius: 1rem;
      font-size: 1.25rem;
      cursor: pointer;
  }
  
  @media (max-width: 768px) {
      .cost-section-container {
          display: flex;
          flex-direction: column;
      }
  
      .icon-with-text-box {
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
      }
  
      .icons-main-container {
          padding: 1rem;
      }
  
      .icon-text {
          margin-top: 1rem;
          text-align: center;
      }
  
      .cost-container {
          padding: 1rem;
          align-self: center;
      }
  
      .cost-line-1 {
          font-size: 1.25rem;
      }
  
      .cost-line-2 {
          font-size: 2.5rem;
      }
  
      .cost-line-3 {
          font-size: 4rem;
      }
  }
  
  .gratis-cta-button {
      background-color: var(--rosa);
      color: white;
      width: 10rem;
      text-align: center;
      padding: 0.5rem 2rem;
      border-radius: 1rem;
      font-size: 1.25rem;
      cursor: pointer;
  }
  
  .gratis-cta-button {
      background-color: var(--rosa);
      color: white;
      width: 10rem;
      text-align: center;
      padding: 0.5rem 2rem;
      border-radius: 1rem;
      font-size: 1.25rem;
      cursor: pointer;
  }
  
  .como-llegar {
      background-color: var(--morado);
      color: white;
      width: 10rem;
      text-align: center;
      padding: 0.5rem 2rem;
      border-radius: 1rem;
      cursor: pointer;
  }
  
  .botton-centred {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
  }
  
  .congress-card-photo {
      background-image: url('https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Yvonne-02---Amistad-Live_wrn55u.jpg');
      background-size: cover;
      width: 50%;
      min-height: 25rem;
  }
  
  
  
  .concert-date {
      border: 1px solid var(--morado);
      padding: 0.25rem 1rem;
      border-radius: 12px;
      font-size: 1.25rem;
      margin-bottom: 2rem;
  }
  
  .concert-date-price {
      border: 1px solid var(--morado);
      background-color: var(--morado);
      color: white;
      padding: 0.25rem 1rem;
      border-radius: 12px;
      margin-right: -2rem;
  }
  
  .concert-date-container {
      text-align: center;
      margin-top: 1rem;
  }
  
  .congress-card .gratis {
      margin-top: 2rem;
      text-align: center;
  }
  
  @media (max-width: 1250px) {
      .congress-section{
          padding: 1rem;
      }
  
      .congress-card {
          flex-direction: column-reverse;
      }
  
      .congress-card-photo {
          width: 100%;
          min-height: 20rem;
          background-position-y: 20%;
      }
  
      .congress-card-right {
          margin-bottom: 2rem;
      }
  
      .concert-date-container {
          margin-top: 1rem;
          text-align: center;
      }
  
      .concert-date {
          margin-top: 1rem;
          text-align: center;
      }
  
      .concert-date-price {
          margin-right: -1rem;
          margin-top: 1rem;
      }
  
      .congress-card .gratis {
          margin-top: 1rem;
      }
  
      .botton-centred {
          display: flex;
          justify-content: center;
      }
  }
  
  s {
      text-decoration: none;
      position: relative;
  }
  
  s::before {
      top: 50%;
      background: red;
      opacity: .7;
      content: '';
      width: 110%;
      position: absolute;
      height: .1em;
      border-radius: .1em;
      left: -5%;
      white-space: nowrap;
      display: block;
      transform: rotate(-15deg);
  }
  
  .white-card-section {
      padding: 50px;
      background-color: #FFFFFF;
  }
  
  .white-card {
      display: flex;
      align-items: center;
      background-color: #F4F3ED;
      border-radius: 20px;
  }
  
  .white-card-left {
      flex-basis: 50%;
      padding: 20px;
  }
  
  .white-card-left h3 {
      font-size: 24px;
      color: #191919;
      margin-bottom: 10px;
  }
  
  .white-card-left p {
      font-size: 18px;
      color: #191919;
      margin-bottom: 20px;
  }
  
  .white-card-right {
      flex-basis: 50%;
  }
  
  .white-card-right h3 {
      color: var(--morado)
  }
  
  .white-card-image {
      flex-basis: 50%;
      background-image: url('https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Yvonne-02---Amistad-Live_wrn55u.jpg');
  }
  
  .white-card-right img {
      width: 100%;
      border-radius: 20px;
  }
  
  @media (max-width: 1250px) {
      .white-card {
          flex-direction: column;
      }
  
      .white-card-left {
          padding: 20px;
          text-align: center;
      }
  
      .white-card-left img {
          aspect-ratio: 600 / 430;
          width: 100%;
          height: auto;
      }
  
      .white-card-right {
          text-align: center;
      }
  
      .white-card-image {
          width: 100%;
          height: 300px;
          border-radius: 20px;
          margin-bottom: 20px;
      }
  
      .white-card-right img {
          width: 100%;
          max-width: 300px;
          border-radius: 20px;
      }
  }
  
  .image-background-section {
      padding: 50px;
      background-image: url('https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Fondo-conferencistas---Amistad-Live_akguqw.jpg');
      background-size: cover;
      background-position: center;
      color: #FFFFFF;
  }
  
  .conferencistas-card {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(0, 450px));
      gap: 3rem;
      justify-content: center;
  }
  
  .conferencista {
      text-align: center;
      background-color: white;
      border: 2px solid var(--beige);
      border-radius: 2rem;
      padding: 3rem 2rem;
      color: var(--negro);
  }
  
  .conferencista img {
      border-radius: 50%;
  }
  
  .conferencista h4 {
      font-size: 24px;
      margin: 10px 0;
  }
  
  .conferencista p {
      font-size: 18px;
      text-align: left;
  }
  
  @media (max-width: 768px) {
  
      .image-background-section{
          padding: 1rem;
      }
  
      .conferencista {
          padding: 1rem;
      }
  
      .conferencista img {
          width: 80%;
          height: auto;
      }
  }
  
  .timeline-section {
      padding: 50px;
      background-color: #FFFFFF;
  }
  
  .small-hero {
      padding: 50px;
      background-image: url('https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Llamada-de-accio%CC%81n---Amistad-Live_xr1c3k.jpg');
      background-size: cover;
      background-position: right;
      color: #FFFFFF;
  }
  
  .small-hero-content {
      margin-bottom: 20px;
      max-width: 25rem;
      text-align: center;
      margin-left: 2rem;
  }
  
  .small-hero-content h1 {
      font-size: 3.5rem;
      color: #FFFFFF;
      margin-bottom: 5px;
  }
  
  .small-hero-content h2 {
      font-size: 24px;
      color: #FFFFFF;
      margin-bottom: 10px;
  }
  
  .white-card-section:last-child {
      margin-bottom: 0;
  }
  
  .mini-footer {
      padding: 10px 20px;
      background-color: #191919;
      color: #FFFFFF;
      text-align: center;
  }
  
  
  /* AQUI VA EL CSS DEL TIMELINE  */
  
  .timeline-title {
      text-align: center;
      margin: 1rem auto;
      font-size: 1.25rem;
  }
  
  
  .timeline-section {
      padding: 50px;
      background-color: #FFFFFF;
  }
  
  .timeline-main {
      background-color: var(--beige);
  
      border-radius: 2rem;
      overflow: hidden;
  }
  
  .timeline-header {
      background-color: var(--morado);
      color: white;
      font-weight: bold;
      font-size: 1.25rem;
      padding: 1rem 3rem;
  }
  
  .timeline-container {
      background-color: var(--beige);
  }
  
  
  .timeline {
      border-left: 4px solid black;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
      background: rgba(255, 255, 255, 0.03);
      color: black;
      margin: 10px auto;
      letter-spacing: 0.5px;
      position: relative;
      line-height: 1.4em;
      font-size: 1.03em;
      padding: 50px;
      list-style: none;
      text-align: left;
      font-weight: 100;
      max-width: 30%;
  }
  
  .timeline h1 {
      letter-spacing: 1.5px;
      font-weight: 100;
      font-size: 1.4em;
  }
  
  .timeline h2,
  .timeline h3 {
      letter-spacing: 1.5px;
      font-weight: 400;
      font-size: 1.4em;
  }
  
  .timeline .event {
      border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
      padding-bottom: 10px;
      margin-bottom: 10px;
      position: relative;
  }
  
  .timeline .event:last-of-type {
      padding-bottom: 0;
      margin-bottom: 0;
      border: none;
  }
  
  .timeline .event:before,
  .timeline .event:after {
      position: absolute;
      display: block;
      top: 0;
  }
  
  .timeline .event:before {
      left: -217.5px;
      color: black;
      content: attr(data-date);
      text-align: right;
      font-weight: 100;
      font-size: 0.9em;
      min-width: 120px;
  }
  
  .timeline .event:after {
      left: -57.85px;
      background: red;
      border-radius: 50%;
      height: 11px;
      width: 11px;
      content: "";
      top: 5px;
  }
  
  @media (max-width: 768px) {
      #timeline-content {
          margin-left: 10rem;
      }
  
  }
  
    `);

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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/B0s2Uxa2LtI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div class="congress-card-right">
            <h3>Experimenta un día de transformación y avivamiento con el poder del Espíritu Santo</h3>
            <p>Estamos emocionadas de presentarte este evento que te brindará una oportunidad única de aprendizaje, conexión y transformación personal.</p>
            <p>Descubre las estrategias más efectivas para alcanzar tus metas y sueños, mientras te conectas con otras mujeres apasionadas y comprometidas como tú.</p>
          </div>
        </div>
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
          <span class="cost-line-3">$500.00</span>
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
  title: 'Congreso de Mujeres 2023 - Vivamos en Libertad - Amistad Live',
  meta: [
    {
      name: 'Congreso entre Mujeres: Vivamos en Libertad - Amistad Live',
      content: 'Somos Amistad Live, una comunidad, una familia',
    },
  ],
};
