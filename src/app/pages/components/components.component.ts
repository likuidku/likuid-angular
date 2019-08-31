import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentsDataService } from '../../services/components-data.service';
import { LkdSidebarComponent } from '../../components/lkd-sidebar/lkd-sidebar.component';
import { ViewerService } from '../../services/lkd-viewer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lkd-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  providers: [ViewerService]
})
export class ComponentsComponent implements OnInit {

  // --- SIDEBAR -------------------------------------

  @ViewChild(LkdSidebarComponent, { static: true }) sidebar: LkdSidebarComponent;

  constructor(
    public dataService: ComponentsDataService,
    public viewerService: ViewerService
  ) { }

  ngOnInit() {
    this.viewerService.viewDataSubscribe();
    this.sidebar.config = this.dataService.sidebarComponents;
  }
}
