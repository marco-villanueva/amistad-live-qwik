import { component$ } from "@builder.io/qwik";
import { NavBar } from "../NavBar/NavBar";

import styles from './Header.module.css';


export const Header = component$(() => {
  return (
    <div class={styles.header}>
      <div>Logo</div>
      <NavBar />
    </div>
  )
});