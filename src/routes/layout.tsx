import { component$, Slot } from '@builder.io/qwik';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import styles from './layout.module.css'

export default component$(() => {
  return (
    <div class={styles.body}>
      <Header />
      <main class={styles.main}>
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
