import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/components/Button/Button';

export default component$(() => {
  return (
    <>
      <h1>Sitio web en remodelación 👷‍♂️🛠</h1>
      <h2>Pronto estaremos en línea nuevamente</h2>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
