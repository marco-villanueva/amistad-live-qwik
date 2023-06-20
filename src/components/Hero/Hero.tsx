import { JSXNode, component$ } from '@builder.io/qwik';

import styles from './Hero.module.css';
import { JSX } from '@builder.io/qwik/jsx-runtime';
import { Button, ButtonProps } from '../Button/Button';

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
      <div style={{textAlign: align}}  class={styles.subTitle}>{subtitle}</div>
      <div style={{textAlign: align}}  class={styles.title}>{title}</div>
      <div style={{textAlign: align}} class={styles.actions}>
        {actions && actions.length &&
          actions.map((action, i) => <Button key={i} variant={action.variant} text={action.text} href={action.href} />)}
      </div>
      <div style={{textAlign: align}}  class={styles.note}>{note}</div>
    </div>
  );
});

