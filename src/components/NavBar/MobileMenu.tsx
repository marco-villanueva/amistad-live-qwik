import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from './NavBar.module.css';
import { Menu } from './icons/menu';
import { type menu } from "~/interfaces/navbar-interface";
import { Link } from "@builder.io/qwik-city";

export const MobileMenu = component$<menu>(({ sections, activePath }) => {
  const isMenuOpenSignal = useSignal(false);

  const toggleMenu = $(() => isMenuOpenSignal.value = !isMenuOpenSignal.value);
  
  useVisibleTask$(({ track }) => {
    track(() => activePath)
    isMenuOpenSignal.value = false;
  });



  return (
    <div class={styles.mobile}>
      <div class="mr-8">
        <img src="/images/logo.png" />
      </div>
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

          {sections.map(item => {
            return (
              <Link
                key={item.pathname}
                href={item.pathname}
              >
                <span
                  class={
                    `${styles.label} ${activePath === item.pathname ? styles.active : ''}`}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}

        </div>
      </>}
    </div>
  )
});