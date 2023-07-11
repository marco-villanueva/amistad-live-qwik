import { JSXNode, component$ } from '@builder.io/qwik';

import styles from './Hero.module.css';
import { JSX } from '@builder.io/qwik/jsx-runtime';
import { Button, ButtonProps } from '../Button/Button';
import { Typography } from '../UI/Typography';

export interface HeroProps {
  subtitle?: string;
  title: string;
  imageUrl: string;
  actions?: ButtonProps[];
  note?: string;
  align?: 'right' | 'left'
}

export const Hero = component$<HeroProps>(({ title, subtitle, imageUrl, actions, note, align = 'left'}) => {

  return (
    <div style={{
      backgroundImage: `linear-gradient(#00000066, #00000066), url(${imageUrl})`,
      alignItems: `${align === 'right' ? 'flex-end' : 'flex-start'}`,
    }} class={styles.hero}>
      <Typography as="h2" sx={{textAlign: align}} style={styles.subTitle}>{subtitle}</Typography>
      <Typography as="h1" sx={{textAlign: align}} style={styles.title}>{title}</Typography>
      <div style={{textAlign: align}} class={styles.actions}>
        {actions && actions.length &&
          actions.map((action, i) => <Button key={i} variant={action.variant} text={action.text} href={action.href} />)}
      </div>
      <Typography as="p" sx={{textAlign: align}} style={styles.note}>{note}</Typography>
    </div>
  );
});

