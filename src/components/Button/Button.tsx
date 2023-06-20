import { component$ } from "@builder.io/qwik";
import styles from './Button.module.css';
import { Link } from "@builder.io/qwik-city";

export interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary' | 'nav' | 'green';
  type?: "reset" | "submit" | "button" | undefined;
  href?: string;
}

export const Button = component$<ButtonProps>(({ text, variant, type, href }) => {
  return (
    <Link href={href}>
      <button type={type} class={`${styles.btn} ${styles[variant]}`}>
        {text}
      </button>
    </Link>
  );
});