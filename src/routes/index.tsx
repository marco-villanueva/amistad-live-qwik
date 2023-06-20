import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Button, ButtonProps } from '~/components/Button/Button';
import { Headline } from '~/components/Headline/Headline';
import { Hero } from '~/components/Hero/Hero';

export default component$(() => {

  const actionButton: ButtonProps[] = [
    {
      text: 'Quiero saber más',
      variant: 'primary',
      href: "/contacto"
    },
    {
      text: 'WhatsApp',
      variant: 'green',
      href: "https://api.whatsapp.com/send/?phone=527776089602&text&type=phone_number&app_absent=0"
    },
  ]


  return (
    <div>
      <Hero
        imageUrl="https://cdn.pixabay.com/photo/2016/11/29/04/50/blur-1867402_1280.jpg"
        title='Únete a la comunidad'
        subtitle='Bienvenidos a Amistad Live'
        note='¡Y síguenos en todas nuestras redes sociales!'
        actions={actionButton}
        align='right'
      />
      <Headline headline='this is Headline' subHeadline='and this is sub-headline' />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Bienvenidos a Amistad Live',
  meta: [
    {
      name: 'Amistad Live',
      content: 'Somos Amistad Live, una comunidad, una familia',
    },
  ],
};
