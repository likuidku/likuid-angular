import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// --- PAGES -----------------------------------------
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
// --- TEMP ------------------------------------------
import { DocsComponent } from './pages/docs/docs.component';
import { ComponentsComponent } from './pages/components/components.component';
import { ThemeComponent } from './pages/theme/theme.component';
// --- VIEWS -----------------------------------------
import { ComponentsViewComponent } from './pages/views/components-view/components-view.component';
import { AlertsViewComponent } from './pages/views/alerts-view/alerts-view.component';
import { ButtonsViewComponent } from './pages/views/buttons-view/buttons-view.component';
import { CardsViewComponent } from './pages/views/cards-view/cards-view.component';
import { FootersViewComponent } from './pages/views/footers-view/footers-view.component';
import { MenusViewComponent } from './pages/views/menus-view/menus-view.component';
import { SidebarViewComponent } from './pages/views/sidebar-view/sidebar-view.component';
import { TabsViewComponent } from './pages/views/tabs-view/tabs-view.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'components', redirectTo: '/components/getting-started', pathMatch: 'full'  },
  { path: 'components', component: ComponentsComponent,
    children: [
      { path: 'getting-started', component: ComponentsViewComponent, data: { title: 'introduction', labels: ['overview', 'categories']}},
      { path: 'alerts', component: AlertsViewComponent,  data: { title: 'Alerts & Dialogs', labels: ['overview', 'api', 'examples']}},
      { path: 'buttons', component: ButtonsViewComponent, data: { title: 'Buttons', labels: ['overview', 'sass', 'api', 'examples']}},
      { path: 'cards', component: CardsViewComponent, data: { title: 'Cards', labels: ['overview', 'sass', 'api', 'examples']}},
      { path: 'footers', component: FootersViewComponent, data: { title: 'Footers', labels: ['overview', 'sass', 'api', 'examples']}},
      { path: 'menus', component: MenusViewComponent, data: { title: 'Menus', labels: ['overview', 'sass', 'api', 'examples']}},
      { path: 'sidebars', component: SidebarViewComponent, data: { title: 'Sidebars', labels: ['overview', 'sass', 'api', 'examples']}},
      { path: 'tabs', component: TabsViewComponent, data: { title: 'Tabs', labels: ['overview', 'sass', 'api', 'examples']}},
    ]
  },
  { path: 'themes', component: ThemeComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
