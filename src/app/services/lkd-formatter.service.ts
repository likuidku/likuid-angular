import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatterService {


  constructor() { }

  // --- TRANSPARENTIZE COLORS -----------------------

  ttzeColorHEX(color: string, ratio = 'bc') {
    return color + ratio;
  }

  // --- LINEAR GRADIENT -----------------------------

  linearGradientBack(colorA?: string, colorB?: string, image?: string) {
    if (colorA && colorB && image) {
      return `linear-gradient(to right bottom, ${colorA}, ${colorB}), ${image}`;
    } else if (colorA && colorB && !image) {
      return `linear-gradient(to right bottom, ${colorA}, ${colorB})`;
    } else if (colorA && !colorB && !image) {
      return `linear-gradient(to right bottom, ${colorA}, transparent)`;
    }
  }

  // --- CLASS GENERATOR -----------------------------

  generatorClassLKD(element: string, format: string[]): string {

    let lkdClass: string;

    switch (format.length) {
      case 1:
        lkdClass = `lkd-${element}-${format[0]}`;
        break;
      case 2:
        lkdClass = `lkd-${element}-${format[0]}-${format[1]}`;
        break;
      default:
        lkdClass = `lkd-${element}`;
    }

    return lkdClass;
  }






}
