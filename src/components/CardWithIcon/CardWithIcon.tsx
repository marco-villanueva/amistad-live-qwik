import { Slot, component$ } from '@builder.io/qwik';
import styles from './CardWithIcon.module.css';
import { AmistadIcon } from '../icons/AmistadIcon';
import { Typography } from '../UI/Typography';

export interface CardWithIconProps {
    title: string;
}

export const CardWithIcon = component$<CardWithIconProps>(({title}) => {
    return (
        <div class={styles.card}>
            <div class={styles.infoContainer}>
                <AmistadIcon variant="dark" style={styles.figure} />
                <Typography as="h4" style={styles.title}>{title}</Typography>
                <Typography as="span" style={styles.description}>
                    <Slot/>
                </Typography>
            </div>
            <div class={styles.decorator}></div>
        </div>
    );
});