import { component$ } from "@builder.io/qwik";
import styles from './menu.module.css';

export const Menu = component$((props) => {
    return (
        <div class={styles.menu}>
            <svg width={20} height={20} viewBox="0 0 100 80" {...props}>
                <path d="M0 0h100v20H0zM0 30h100v20H0zM0 60h100v20H0z" />
            </svg>
        </div>
    )
});

