import { Injectable } from '@angular/core';

import {
  NavBar,
  Footer,
  Sidebar,
  Alert
} from '../models/lkd-interfaces';
import {
  navBarMain,
  footerMain,
  sidebarComponents,
  alertConfig,
  alertConfigSimple,
  alertConfigNormal
} from '../data/components-data';

@Injectable({
  providedIn: 'root'
})
export class ComponentsDataService {

  // --- DATA IMPORTS --------------------------------

  navBarMain: NavBar = navBarMain;
  footerMain: Footer = footerMain;
  sidebarComponents: Sidebar = sidebarComponents;
  alertConfig: Alert = alertConfig;
  alertConfigSimple: Alert = alertConfigSimple;
  alertConfigNormal: Alert = alertConfigNormal;

  constructor() { }
}
