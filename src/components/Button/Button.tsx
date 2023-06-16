import { component$ } from "@builder.io/qwik";
import styles from './Button.module.css';

export interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary' | 'nav';
  type?: "reset" | "submit" | "button" | undefined;
}

export const Button = component$<ButtonProps>(({ text, variant, type }) => {
  return (
    <button type={type} class={`${styles.btn} ${styles[variant]}`}>
      {text}
    </button>
  );
});