import { type CSSProperties, Slot, component$ } from '@builder.io/qwik';
import styles from './Typography.module.css';

const classNames = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  p: styles.p,
  span: styles.span
};

export interface TypographyProps {
  as: keyof typeof classNames;
  style?: string;
  sx?: CSSProperties;
}

export const Typography = component$<TypographyProps>(({ as, style, sx, ...props }) => {

  const Tag = as;
  const classNameTag = classNames[as];


  return (
    <Tag style={sx} class={`${classNameTag} ${style}`} {...props}><Slot /></Tag>
  );
});




