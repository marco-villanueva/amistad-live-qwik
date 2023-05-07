import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import styles from './styles.css?inline';

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
