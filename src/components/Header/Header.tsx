import { $, component$, useSignal } from '@builder.io/qwik';
import styles from './Header.module.css';
import { AmistadLogo } from '../icons/AmistadLogo';
import { Link } from '@builder.io/qwik-city';
import { useScreenSize } from '~/hooks/useScreenSize';
import { Menu } from "../icons/menu";

export const Header = component$(() => {

  const isMenuOpenSignal = useSignal(false);
  const screenSize = useScreenSize();

  const toggleMenu = $(() => isMenuOpenSignal.value = !isMenuOpenSignal.value);

  const links = (<div class={styles.navMenu}>
    <Link href="/">
      <span>Inicio</span>
    </Link>
    <Link href="/profetas2023">
      <span>Escuela Profética 2023</span>
    </Link>
    {/* <Link>
      <span>Quienes Somos</span>
    </Link>
    <Link>
      <span>Recursos</span>
    </Link>
    <Link>
      <span>Medios</span>
    </Link>
    <Link>
      <span>Contacto</span>
    </Link> */}
    {/* <Button variant="nav" text='Visítanos' /> */}
  </div>);

  const mobileMenu = <>
    <div onClick$={toggleMenu}>
      <Menu />
    </div>

    {isMenuOpenSignal.value && <>
      <div class={styles.overlay} onClick$={toggleMenu}></div>
      <div class={styles['mobile-menu']}>

        <div class={styles.closeButton} onClick$={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>

        <Link href="/">
          <span>Inicio</span>
        </Link>
        <Link href="/profetas2023">
          <span>Escuela Profética 2023</span>
        </Link>
        {/* <Link>
          <span>Inicio</span>
        </Link>
        <Link>
          <span>Quienes Somos</span>
        </Link>
        <Link>
          <span>Recursos</span>
        </Link>
        <Link>
          <span>Medios</span>
        </Link>
        <Link>
          <span>Contacto</span>
        </Link>
        <Button variant="nav" text='Visítanos' /> */}

      </div>
    </>}
  </>

  return (
    <div class={styles.header}>
      <div class={styles.logoContainer}>
        <AmistadLogo variant='dark' style={styles.logo} />
      </div>

      {screenSize === 'mobile' ? mobileMenu : links}
    </div>)
});