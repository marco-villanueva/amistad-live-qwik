
import { component$ } from '@builder.io/qwik';
import styles from './Headline.module.css';

export interface HeadlineProps {
  headline: string;
  subHeadline: string;
}

export const Headline = component$<HeadlineProps>(({ headline, subHeadline }) => {
  return (
    <div class={styles.container}>
      <div class={styles.subHeadline}>{subHeadline}</div>
      <h2 class={styles.headline}>{headline}</h2>
    </div>
  );
});