import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewerService } from '../../../services/lkd-viewer.service';
import { Subscription } from 'rxjs';
import { ComponentsDataService } from 'src/app/services/components-data.service';

@Component({
  selector: 'lkd-alerts-view',
  templateUrl: './alerts-view.component.html',
  styleUrls: ['./alerts-view.component.scss']
})
export class AlertsViewComponent implements OnInit, OnDestroy {

  public showView = 'overview';
  private showSubscription: Subscription = null;

  constructor(
    public viewer: ViewerService,
    public dataService: ComponentsDataService
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
