
import { component$ } from '@builder.io/qwik';
import { useScreenSize } from '~/hooks/useScreenSize';
import styles from './NavBar.module.css';
import { Menu } from './icons/menu';

export const NavBar = component$(() => {
  
    const screenSize = useScreenSize();

    if(screenSize==='mobile'){
        return (<div class={styles.mobile}>
            <Menu />
        </div>)
    }

    if(screenSize==='desktop'){
        return (<div class={styles.desktop}>
            <div>Sección 1</div>
            <div>Sección 2</div>
            <div>Sección 3</div>
            <div>Sección 4</div>
            <div>Sección 5</div>
        </div>)
    }

    return (<></>)
});

