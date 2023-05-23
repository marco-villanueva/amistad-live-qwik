import { component$ } from "@builder.io/qwik";
import styles from './Hero.module.css';

export interface HeroProps {
  url?: string;
  title: string;
  subtitle: string;
}

export const Hero = component$<HeroProps>(({url, title, subtitle}) => {
  const heroStyle = {
    backgroundImage: url ? `url(${url})` : 'none',
    backgroundColor: url ? '' : '#fff',
  };

  return (
    <div class={styles["hero"]} style={heroStyle}>
      <div class={styles["hero-content"]}>
        <h1 class={styles["hero-title"]}>{title}</h1>
        <h2 class={styles["hero-subtitle"]}>{subtitle}</h2>
      </div>
    </div>
  );
});