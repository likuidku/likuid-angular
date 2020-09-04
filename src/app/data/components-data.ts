import {
  NavBar,
  Footer,
  Sidebar,
  Alert
} from '../models/lkd-interfaces';

// --------------------------------------------------
// --- NAVBAR DATA
// --------------------------------------------------

export const navBarMain: NavBar = {
  color: 'primary',
  home: {
    name: 'likuid',
    link: '/home',
    image: 'logo-ng.svg'
  },
  external: {
    image: 'github.png',
    link: 'https://github.com/likuidku/likuid-angular',
  },
  links: [
    {
      name: 'components',
      link: '/components',
    },
    {
      name: 'themes',
      link: '/themes',
    },
    {
      name: 'docs',
      link: '/docs',
    }
  ]
};

// --------------------------------------------------
// --- FOOTER DATA
// --------------------------------------------------

export const footerMain: Footer = {
  color: 'dark',
};

// --------------------------------------------------
// --- SIDEBAR DATA
// --------------------------------------------------

export const sidebarComponents: Sidebar = {
  title: {
    text: 'getting started',
    link: 'getting-started'
  },
  items:  [
    'alerts',
    'buttons',
    'cards',
    'pie',
    'menus',
    'sidebars',
    'tabs'
  ]
};

// --------------------------------------------------
// --- ALERTS DATA
// --------------------------------------------------

export const alertConfig: Alert = {
  title: 'I Ching',
  icon: 'diamond.svg',
  message: 'La perseverancia trae ventura',
  labels: ['signo superior', 'signo inferior'],
  accept: 'aceptar',
  dismiss: 'cancelar',
  link: {
    text: '¿Cómo puedo saber el signo?',
    link: 'likuid.eu'
  }
};

export const alertConfigSimple: Alert = {
  title: 'Hexagrama Enviado',
  accept: 'ok'
};

export const alertConfigNormal: Alert = {
  title: 'Error Fatal',
  message: 'no ha sido posible encontrar el hexagrama',
  accept: 'ok'
};
