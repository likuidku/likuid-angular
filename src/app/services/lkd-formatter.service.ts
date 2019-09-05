import { Injectable, ElementRef, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatterService {


  constructor() { }

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
