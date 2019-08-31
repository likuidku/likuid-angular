import { Component, OnInit, Input, EventEmitter, Directive, ElementRef, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alert } from '../../models/lkd-interfaces';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'lkd-alert-title'
})
export class LkdAlertTitleDirective {

  constructor() {}
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'lkd-alert-message'
})
export class LkdAlertMessageDirective {

  constructor() {}
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'lkd-alert-link'
})
export class LkdAlertLinkDirective {

  constructor() {}
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'lkd-alert',
  templateUrl: './lkd-alert.component.html'
})
export class LkdAlertComponent implements OnInit {

  @Input() config: Alert;

  public visible = false;
  public alertVisible: EventEmitter<boolean> = new EventEmitter<boolean>();
  public alertInput: EventEmitter<string> = new EventEmitter<string>();
  public alertAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  public alertLink: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  dismissAlert() {
    this.hideAlert();
    this.alertAction.emit(false);
  }

  okAlert() {
    this.hideAlert();
    this.alertAction.emit(true);
  }

  submitAlert() {
    this.hideAlert();
    this.alertInput.emit('TODO: Submit form');
  }

  linkAlert() {
    this.hideAlert();
    this.alertLink.emit(true);
  }

  hideAlert() {
    this.visible = false;
    this.alertVisible.emit(false);
  }

  showAlert() {
    this.visible = true;
    this.alertVisible.emit(true);
  }

  toggleAlert() {
    this.visible = !this.visible;
    this.alertVisible.emit(this.visible);
  }

}
