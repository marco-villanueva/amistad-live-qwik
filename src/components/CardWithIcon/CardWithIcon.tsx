import { component$ } from '@builder.io/qwik';
import styles from './CardWithIcon.module.css';
import { AmistadIcon } from '../icons/AmistadIcon';

export interface CardWithIconProps {
}

export const CardWithIcon = component$<CardWithIconProps>((props) => {
    return (
        <div class={styles.card}>
            <div class={styles.infoContainer}>
                <AmistadIcon variant="dark" style={styles.figure} />
                <h4 class={styles.title}>About us</h4>
                <div class={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div class={styles.decorator}></div>
        </div>
    );
});