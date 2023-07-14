import { component$ } from "@builder.io/qwik";
import styles from './Photo.module.css';

export interface PhotoProps {
    src: string;
    alt: string;
    mode?: 'vertical' | 'horizontal'
}

export const Photo = component$<PhotoProps>(({ src, alt, mode = 'vertical' }) => {
    return (
        <figure class={styles.photoContainer}>
            <img
                class={`${styles.photo} ${styles[mode]}`}
                src={src}
                alt={alt} />
        </figure>
    );
});