import { component$ } from "@builder.io/qwik";
import styles from './Footer.module.css';

export const Footer = component$(() => {
  return (
    <div class={styles.footer}>
      <section class={styles['address-container']} >
        <span class={styles['address-title']}>Visítanos en:</span>
        <span class={styles['address-text']}>Privada Sol #7 Col. Chapultepec, Cuernavaca, Morelos, México. C.P. 62450</span>
        <span class={styles['address-link']}>Búscanos en Google Maps</span>
      </section>
      <section class={styles['phone-container']} >
        <span class={styles['phone-title']} >Contáctanos: </span>
        <span class={styles['phone-text']} >WhatsApp: +52 (777) 608-9602</span>
      </section>
    </div>
  )
});