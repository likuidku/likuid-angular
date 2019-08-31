import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  public viewDataSubscription: Subscription;

  private showlabelSource = new Subject<string>();
  public showLabel$ = this.showlabelSource.asObservable();

  public viewLabels: string[];
  public viewTitle = '';

  constructor(
    public route: ActivatedRoute
  ) { }

  activateLabel(label: string) {
    this.showlabelSource.next(label);
  }

  viewDataSubscribe() {
    this.viewDataSubscription = this.route.url.subscribe(() => {
      this.viewTitle = this.route.firstChild.routeConfig.data.title;
      this.viewLabels = this.route.firstChild.routeConfig.data.labels;
    });
  }

  viewDataUnsubscribe() {
    this.viewDataSubscription.unsubscribe();
  }
}
