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

// ----------------------------------------------
// --- LAYOUTS
// ----------------------------------------------

export interface BlockTxt {

  title: string;
  text: string;
}

export interface BlockTri {

  title: string;
  button?: {
    text: string;
    link: string;
    color?: string;
    icon?: string;
  };
  blockTexts: BlockTxt[];
  tri: string[];
}
