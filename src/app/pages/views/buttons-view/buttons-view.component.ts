import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewerService } from 'src/app/services/lkd-viewer.service';

@Component({
  selector: 'lkd-buttons-view',
  templateUrl: './buttons-view.component.html',
  styleUrls: ['./buttons-view.component.scss']
})
export class ButtonsViewComponent implements OnInit, OnDestroy {

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
