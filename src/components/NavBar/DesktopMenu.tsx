import { component$, useVisibleTask$ } from "@builder.io/qwik";
import styles from './NavBar.module.css';
import { type menu } from "~/interfaces/navbar-interface";
import { Link } from "@builder.io/qwik-city";

export const DesktopMenu = component$<menu>(({ sections, activePath }) => {
  useVisibleTask$(({ track }) => {
    track(()=> activePath);


  });
  
  return (
    <div class={styles.desktop}>
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
  )
});