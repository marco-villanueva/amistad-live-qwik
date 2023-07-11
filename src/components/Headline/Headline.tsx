
import { component$ } from '@builder.io/qwik';
import { Typography } from '../UI/Typography';
import styles from './Headline.module.css';

export interface HeadlineProps {
  headline: string;
  subHeadline: string;
}

export const Headline = component$<HeadlineProps>(({ headline, subHeadline }) => {
  return (
    <div class={styles.container}>
      <Typography as="p" style={styles.subHeadline}>{subHeadline}</Typography>
      <Typography as="h2" style={styles.headline}>{headline}</Typography>
    </div>
  );
});