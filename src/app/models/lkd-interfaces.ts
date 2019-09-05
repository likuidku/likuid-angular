// ----------------------------------------------
// --- COMPONENTS
// ----------------------------------------------

export interface NavLink {

  link: string;
  name?: string;
  image?: string;
  isActive?: boolean;
}

export interface NavBar {

  color: string;
  links: NavLink[];
  home?: NavLink;
  external?: NavLink;
}

export interface Footer { // TODO: NEW DATA & BINDING

  color: string;
}

export interface Sidebar {

  title: {
    text: string;
    link: string;
  };
  items: string[];
}

export interface Alert {

  title: string;
  icon?: string;
  message?: string;
  labels?: string[];
  accept: string;
  dismiss?: string;
  link?: {
    text: string;
    link: string;
  };
}

export interface Card {
  title: string;
  text: string;
  icon?: string;
  image?: string;
  link?: string;
  button?: {
    text: string;
    link: string;
  };
}

export interface StoryCard {

  name: string;
  title: string;
  text: string;
  image: string;
  skew?: boolean;
}

export interface Button {

  text: string;
  link: string;
  color?: string;
  icon?: string;
}

// ----------------------------------------------
// --- LAYOUTS
// ----------------------------------------------

export interface Catcheye {
  title: string;
  subtitle: string;
  c2a: string;
  logo?: string;
  back?: string;
}

export interface BlockText {

  title: string;
  text: string;
}

export interface BlockTrimg {

  blockTexts: BlockText[];
  tri: string[];
  title?: string;
  button?: Button;
}

export interface BlockCard {

  cards: Card[];
  back?: string;
  title?: string;
  button?: Button;
}
