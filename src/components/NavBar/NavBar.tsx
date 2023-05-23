
import { component$ } from '@builder.io/qwik';
import { useScreenSize } from '~/hooks/useScreenSize';
import { useLocation } from '@builder.io/qwik-city';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { sections } from '~/utils/constants';

export const NavBar = component$(() => {

    const loc = useLocation()
    const activePath = loc.url.pathname;
    const screenSize = useScreenSize();

    if(screenSize==='mobile'){
        return <MobileMenu sections={sections} activePath={activePath} />
    }

    if(screenSize==='desktop'){
        return <DesktopMenu sections={sections} activePath={activePath} />
    }

    return (<></>)
});

