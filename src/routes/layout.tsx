import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (<div>
    <Header />
    <main>
      <Slot />
    </main>
    <Footer />
  </div>);
});
