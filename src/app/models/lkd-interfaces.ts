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
export interface Footer {
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
