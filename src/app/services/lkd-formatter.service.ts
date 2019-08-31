import { Injectable, ElementRef, Renderer2, QueryList } from '@angular/core';
import { LkdViewDirective } from '../components/lkd-viewer/lkd-viewer.component';

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

  // DEPRECATED ELIMINAR TODAS

  // --- CLASS ADDER --------------------------------- 

  addClass(addClass: string, element: ElementRef, renderer: Renderer2): void {
    renderer.addClass(element.nativeElement, addClass);
  }

  // --- CLASS REMOVER -------------------------------

  removeClass(removeClass: string, element: ElementRef, renderer: Renderer2): void {
    renderer.removeClass(element.nativeElement, removeClass);
  }

  // --- ATTR REMOVER --------------------------------

  removeAttr(removeAttr: string, element: ElementRef, renderer: Renderer2): void {
    renderer.removeAttribute(element.nativeElement, removeAttr);
  }

  setAttr(setAttr: string, element: ElementRef, renderer: Renderer2): void {
    renderer.setAttribute(element.nativeElement, setAttr, '');
  }





}
