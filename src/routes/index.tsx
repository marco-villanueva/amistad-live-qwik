import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div>Start Here</div>
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
