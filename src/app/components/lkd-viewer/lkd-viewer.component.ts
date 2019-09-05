import {
  Component,
  Directive,
  ElementRef,
  Renderer2,
  Input,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ChangeDetectionStrategy,
  OnChanges,
  AfterViewChecked,
  OnInit
} from '@angular/core';
import { ViewerService } from '../../services/lkd-viewer.service';

// --------------------------------------------------
// --- VIEW DIRECTIVE
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector:  'lkd-view',
})
export class LkdViewDirective {

  @Input() title: string;

  constructor(
    public ref: ElementRef
  ) {}
}

// --------------------------------------------------
// --- VIEWER COMPONENT
// --------------------------------------------------

@Component({
  selector: 'lkd-viewer',
  template: `<div class="view-labels">
              <lkd-view *ngFor="let label of labels" title="{{label}}" (click)="selectView(label)">{{label}}
              </lkd-view>
            </div>
            <div class="view-content">
              <ng-content #viewer></ng-content>
            </div>`,
  providers: [
    ViewerService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LkdViewerComponent implements OnInit, AfterViewInit, OnChanges, AfterViewChecked {

  @ViewChildren(LkdViewDirective) viewList: QueryList<LkdViewDirective>;

  @Input() labels: string[] = [];

  public activeLabel = '';

  constructor(
    private renderer: Renderer2,
    public viewerService: ViewerService
  ) {}

  ngOnInit(): void {
    this.activeLabel = this.labels[0];
  }

  ngOnChanges(): void {
    this.activeLabel = this.labels[0];
  }

  ngAfterViewInit(): void {
    this.selectView(this.activeLabel);
  }

  ngAfterViewChecked(): void {
    this.selectView(this.activeLabel);
  }

  selectView(label: string): void {
    this.viewList.forEach((view) => {
      if (view.title === label) {
        this.renderer.addClass(view.ref.nativeElement, 'active');
        this.activeLabel = label;
        this.viewerService.activateLabel(label);
      } else {
        this.renderer.removeClass(view.ref.nativeElement, 'active');
      }
    });
  }
}
