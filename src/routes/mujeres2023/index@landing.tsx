import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Countdown } from '~/components/Countdown/Countdown';
import { AmistadLogo } from '~/components/icons/AmistadLogo';


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
          <a href="https://wa.me/527776089602" class="cta-button">CUPO LIMITADO</a>
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AKeUssuu3Is" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
          <a href="https://wa.me/527776089602" class="cost-cta-button">777-608-9602</a>
        </div>
      </section>

      <section class="image-background-section">
        <div class="conferencistas-card">
          <div class="conferencista">
            <img src="https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Yvonne-03---Amistad-Live_waosew.png" width="350" height="347" alt="Conferencista 1" />
            <h4>Nombre Conferencista 1</h4>
            <p>Descripción Conferencista 1</p>
          </div>
          <div class="conferencista">
            <img src="https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310100/Dra.-Pardillo-2---Amistad-Live_fmjb8s.png" width="350" height="347" alt="Conferencista 2" />
            <h4>Nombre Conferencista 2</h4>
            <p>Descripción Conferencista 2</p>
          </div>
        </div>
      </section>

      <section class="timeline-section">
        <div class="timeline-card">
          <h3>Fecha del Congreso</h3>
          <div class="timeline-content">
            <div class="timeline-item">
              <div class="timeline-time">Hora 1</div>
              <div class="timeline-description">Descripción 1</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-time">Hora 2</div>
              <div class="timeline-description">Descripción 2</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-time">Hora 3</div>
              <div class="timeline-description">Descripción 3</div>
            </div>
          </div>
        </div>
      </section>

      <section class="small-hero">
        <div class="small-hero-content">
          <h1>Título del Small Hero</h1>
          <h2>Subtítulo</h2>
          <a href="https://wa.me/527776089602" class="cta-button">777-608-9602</a>
        </div>
      </section>

      <section class="white-card-section">
        <div class="white-card">
          <div class="white-card-left">
            <img src="https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Foto-Contacto---Amistad-Live_aqissd.jpg" width="600" height="430" alt="Imagen" />
          </div>
          <div class="white-card-right">
            <h3>Título</h3>
            <p>Descripción</p>
          </div>
        </div>
      </section>

      <footer>
        <div class="footer">
          <AmistadLogo variant='light' style="amistad-logo" />
          <div class="social-icons">
          </div>
        </div>
      </footer>

      <footer class="mini-footer">
        <p>Aviso de privacidad</p>
        <p>Amistad Live 2023</p>
      </footer>
    </div>
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
