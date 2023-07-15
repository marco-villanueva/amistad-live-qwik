import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { type ButtonProps } from '~/components/Button/Button';
import { CardWithIcon } from '~/components/CardWithIcon/CardWithIcon';
import { Headline } from '~/components/Headline/Headline';
import { Hero } from '~/components/Hero/Hero';

import styles from './index.module.css';
import { Typography } from '~/components/UI/Typography';
// import { Photo } from '~/components/Photo/Photo';

export default component$(() => {

  const actionButton: ButtonProps[] = [
    // {
    //   text: 'Quiero saber más',
    //   variant: 'primary',
    //   href: "/contacto"
    // },
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
      <Headline headline='En Amistad Live' subHeadline='Somos Familia' />
      <div class={styles.gridCardContainer}>
        <CardWithIcon title="Servicio">
          Quieres experimentar la dicha de servir a otros, ¡únete a un equipo!, Estaremos felices de tenerte en nuestras filas y hay equipos de todos los intereses: anfitriones, cocina, jovenes, niños, y muchos equipos más.
        </CardWithIcon>
        <CardWithIcon title="Nuestras reuniones">
          Puedes acompañarnos en todas nuestras reuniones, las reuniones generales los domingos, Celebremos la vida los martes, o quizás, alguna de nuestras reuiones entre mujeres, varones, evangelismo y muchas más. ¡Contáctanos para mayores informes!
        </CardWithIcon>
        <CardWithIcon title="Online">
          Tambien puedes seguirnos en nuestras redes sociales, trasmitimos las reuniones cada domingo en Youtube, o puedes platicar con nostros a través de nuestro Facebook, Instagram o directametne a través de WhatsApp ¿Quieres contactarnos?
        </CardWithIcon>
      </div>
      <Headline subHeadline='En amistad live no solo escucharás sobre Dios' headline='¡Podrás experiemntarlo y vivirlo!' />
      <Typography as="p" style={styles.paragraph}>
        Actualmente nustro sitio se encuentra en remodelación por lo que posiblemente no encuntres todo lo que buscas aquí, pero pronto volveremos a estar en línea.
      </Typography>
      <Typography as="h4" style={styles.paragraph}>
        ¡Pero puedes contactarnos o seguirnos en nuestras redes sociales!
      </Typography>
      {/* <div class={styles.gridImagesContainer}>
        <Photo src='https://cdn.pixabay.com/photo/2017/08/30/12/18/kid-2696865_1280.jpg' alt="kid" />
        <Photo src='https://cdn.pixabay.com/photo/2022/04/30/20/45/friendship-7166375_1280.jpg' alt="family" />
        <Photo src='https://cdn.pixabay.com/photo/2016/11/29/04/48/man-1867390_1280.jpg' alt="pray" />
      </div> */}
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
