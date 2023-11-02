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

    .landing {
        background-color: #2c8a9f;
    }
    header {
        background-color: #2c8a9f;
    }
  
  .hero {
      display: flex;
      align-items: center;
      justify-content: end;
      background-image: url('https://res.cloudinary.com/dr3e3isjq/image/upload/v1698947955/escuela-profetica-1440x600_w9hvzp.png');
      background-size: cover;
      aspect-ratio: 1440 / 600;
      padding: 2rem 4rem;
  }
  
  @media (max-width: 768px) {
      .header {
          padding: 2rem 2rem;
      }
  
      .hero {
          flex-direction: column;
          padding: 3rem 1rem;
      }
  }
  
  @media (max-width: 1250px) {
      .header {
          padding: 2rem 2rem;
      }
  
      .hero {
        flex-direction: column;
        align-items: end;
        padding: 2rem 3rem;
      }
  
  }
  
  .countdown {
      padding: 50px;
      color: #FFFFFF;
      text-align: center;
      background-color: #193050;
  }
  
  .congress-section {
      padding: 2rem;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
  }
  
  .congress-card {
      display: flex;
      align-items: center;
      border-radius: 20px;
      max-width: 90%;
      overflow: hidden;
      color: white;
  }
  
  .congress-card-left {
      flex-basis: 50%;
      width: 50%;
  }
  
  .congress-card-left iframe {
      width: 100%;
  }
  
  .congress-card-right {
      text-align: center;
      flex-basis: 50%;
      padding: 20px;
      overflow: hidden;
      width: 50%;
  }
  
  .congress-card-right h3 {
      font-size: 24px;
      color: var(--azul);
      margin-bottom: 10px;
  }
  
  .congress-card-right p {
      font-size: 18px;
      color: #191919;
      margin-bottom: 20px;
  }
  
  @media (max-width: 1250px) {
      .congress-card {
          padding: 2rem;
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
  
  
  
  
  .botton-centred {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
  }
  
  .congress-card-photo {
      background-image: url('https://res.cloudinary.com/dr3e3isjq/image/upload/v1689310101/Foto-1---Amistad-Live_gqk3xg.jpg');
      background-size: cover;
      width: 50%;
      min-height: 25rem;
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
      background-color: var(--azul);
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

  .image-video {
    display: flex;
    justify-content: center;
    margin: 5rem auto;
    flex-wrap: wrap;
    gap: 1rem;
  }
    `);

    const targetDate = '2023-11-21T19:00:00';

    return (
        <div class="landing">

            <section class="hero">
            </section>

            <section class="countdown">
                <Countdown date={targetDate} />
            </section>

            <section class="congress-section">
                <div class="congress-card">
                    <div class="congress-card-left">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/n1BOoDA2GHA?si=sKBZKmLJYydEhuH3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div class="congress-card-right">
                        <h2>Milagros aún siguen sucediendo en el nombre de Jesús</h2>
                        <h2>¡No te pierdas de este tiempo poderoso!</h2>
                    </div>
                </div>
            </section>

            <section class="image-video">

                <div style={{
                    backgroundImage: "url('https://res.cloudinary.com/dr3e3isjq/image/upload/v1698947955/Profeta_Daniel_Piedra_skqeix.png')",
                    backgroundSize: "cover",
                    width: "560px",
                    aspectRatio: "1 / 1",
                }} />

                <iframe width="315" height="560"
                    src="https://youtube.com/embed/ZKxbMDxtudY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>

            </section>

            <section class="image-video">

                <iframe width="315" height="560"
                    src="https://www.youtube.com/embed/zBjyXAEBSWo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>

                <div style={{
                    backgroundImage: "url('https://res.cloudinary.com/dr3e3isjq/image/upload/v1698947956/Profeta_Mario_knpry0.png')",
                    backgroundSize: "cover",
                    width: "560px",
                    aspectRatio: "1 / 1",
                }} />


            </section>

            <section class="image-video">

                <div style={{
                    backgroundImage: "url('https://res.cloudinary.com/dr3e3isjq/image/upload/v1698947955/Pastor_Randy_fa7xo8.png')",
                    backgroundSize: "cover",
                    width: "560px",
                    aspectRatio: "1 / 1",
                }} />

                <iframe width="315" height="560"
                    src="https://www.youtube.com/embed/ARUVKDqkcUo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>

            </section>

            <div style={{
                backgroundImage: "url('https://res.cloudinary.com/dr3e3isjq/image/upload/v1698947955/como-llegar-y-whats_md8x8q.png')",
                backgroundSize: "cover",
                width: "80%",
                margin: "auto",
                aspectRatio: "963 / 600",

            }} />


            <div style={{
                marginTop: "4rem",
                backgroundImage: "url('https://res.cloudinary.com/dr3e3isjq/image/upload/v1698951223/formas_de_pago_ws9dgh.jpg')",
                backgroundSize: "cover",
                width: "100%",
                aspectRatio: "1439 / 450",
            }} />



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
    title: 'Noche de Adoración con Yvonne Muñoz - Amistad Live',
    meta: [
        {
            name: 'Noche de Adoración con Yvonne Muñoz - Amistad Live',
            content: 'Somos Amistad Live, una comunidad, una familia',
        },
    ],
};
