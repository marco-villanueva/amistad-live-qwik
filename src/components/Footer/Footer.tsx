import { component$ } from '@builder.io/qwik';
import styles from './Footer.module.css';
import { FacebookIcon } from '../icons/FacebookIcon';
import { InstagramIcon } from '../icons/InstagramIcon';
import { YoutubeIcon } from '../icons/YoutubeIcon';
import { WhatsappIcon } from '../icons/WhatsappIcon';
import { Button } from '../Button/Button';
import { AmistadIcon } from '../icons/AmistadIcon';

export const Footer = component$(() => {
  return <div class={styles.main}>
    <div class={styles.branding}>
      <AmistadIcon variant="light" style={styles.logo} />
      <div class={styles.title}>Amistad Live Cuernavaca</div>
      <div class={styles.subtitle}>Dirección:</div>
      <div class={styles.adress}>Privada Sol #7 Col. Chapultepec, Cuernavaca, Morelos, México. C.P. 62450</div>
    </div>
    <div class={styles.links}>
      <div class={styles.quickLinks}>
        <h5>Quick Links</h5>
        <ul>
          <li><a href="#">Enlace 1</a></li>
          <li><a href="#">Enlace 2</a></li>
          <li><a href="#">Enlace 3</a></li>
        </ul>
      </div>
      <div class={styles.socialNetworks}>
        <h5>Social Networks</h5>
        <div class={styles.socialNetworksIcons}>
          <a href="#" aria-label="Browse our Facebook"><FacebookIcon style={styles.icon} /></a>
          <a href="#" aria-label="Browse our Instagram"><InstagramIcon style={styles.icon} /></a>
          <a href="#" aria-label="Browse our Youtube"><YoutubeIcon style={styles.icon} /></a>
          <a href="#" aria-label="Contact us by Whatsapp"><WhatsappIcon style={styles.icon} /></a>
        </div>
      </div>
    </div>
    <div class={styles.newsletter}>
      <h5>Newsletter Subscribe</h5>
      <form class={styles.form}>
        <input class={styles.input} type="email" placeholder="Correo electrónico" />
        <Button type="submit" text="Suscribirse" variant="primary" />
      </form>
    </div>
  </div>
});