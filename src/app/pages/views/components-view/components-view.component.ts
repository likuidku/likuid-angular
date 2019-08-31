import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewerService } from '../../../services/lkd-viewer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lkd-components-view',
  templateUrl: './components-view.component.html',
  styleUrls: ['./components-view.component.scss']
})
export class ComponentsViewComponent implements OnInit, OnDestroy {

  public showView = 'overview';
  private showSubscription: Subscription = null;

  constructor(
    public viewer: ViewerService
  ) {
  }

  ngOnInit() {
    this.showSubscription = this.viewer.showLabel$.subscribe((label) => {
      this.showView = label;
    });
  }

  ngOnDestroy() {
    this.showSubscription.unsubscribe();
  }
}
