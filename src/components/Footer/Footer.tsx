import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span class="footer-title">Visítanos en:</span>
        <a class="link link-hover">Privada Sol #7 Col. Chapultepec, Cuernavaca, Morelos, México. C.P. 62450</a>
        <a class="link link-hover">Búscanos en Google Maps</a>
      </div>
      <div>
        <span class="footer-title">Contáctanos: </span>
        <a class="link link-hover">WhatsApp: +52 (777) 608-9602</a>
      </div>
    </footer>
  )
});