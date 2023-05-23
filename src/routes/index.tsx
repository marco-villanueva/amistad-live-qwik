import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from '~/components/Hero/Hero';

export default component$(() => {
  return (
    <>
      <Hero title='Amistad Live' subtitle='Bienvenido a Casa' url='https://cdn.pixabay.com/photo/2017/01/03/07/32/bible-1948778_960_720.jpg'/>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Bienvenidos a Amistad Live',
  meta: [
    {
      name: 'Amistad Live',
      content: 'Es una comunidad centrada en Dios cerca de ti',
    },
  ],
};
