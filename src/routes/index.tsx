import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ButtonProps } from '~/components/Button/Button';
import { CardWithIcon } from '~/components/CardWithIcon/CardWithIcon';
import { Headline } from '~/components/Headline/Headline';
import { Hero } from '~/components/Hero/Hero';

import styles from './index.module.css';
import { Typography } from '~/components/UI/Typography';
import { Photo } from '~/components/Photo/Photo';

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
      <div class={styles.gridCardContainer}>
        <CardWithIcon title="Title card">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat inventore dolor numquam reiciendis in quis quisquam quod facere dolore eaque voluptatibus, earum saepe, vitae voluptas et qui? Architecto, error?
        </CardWithIcon>
        <CardWithIcon title="Title card">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat inventore dolor numquam reiciendis in quis quisquam quod facere dolore eaque voluptatibus, earum saepe, vitae voluptas et qui? Architecto, error?
        </CardWithIcon>
        <CardWithIcon title="Title card">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat inventore dolor numquam reiciendis in quis quisquam quod facere dolore eaque voluptatibus, earum saepe, vitae voluptas et qui? Architecto, error?
        </CardWithIcon>
      </div>
      <Headline headline='LOVE AND COMPASSION' subHeadline='and this is sub-headline' />
      <Typography as="p" style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Typography>
      <div class={styles.gridImagesContainer}>
      <Photo src='https://cdn.pixabay.com/photo/2022/04/30/20/45/friendship-7166375_1280.jpg' alt="family" />
      <Photo src='https://cdn.pixabay.com/photo/2017/08/30/12/18/kid-2696865_1280.jpg' alt="kid" />
      <Photo src='https://cdn.pixabay.com/photo/2016/11/29/04/48/man-1867390_1280.jpg' alt="pray" />
      </div>
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
