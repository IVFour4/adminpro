import { NgModule } from "@angular/core";
import { ShareModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';



@NgModule({
  declarations: [

    PagesComponent,
    Graficas1Component,
    DashboardComponent,
    ProgressComponent,
  ],

  exports: [
    PagesComponent,
    Graficas1Component,
    DashboardComponent,
    ProgressComponent,
  ],

  imports: [
    ShareModule,
    PAGES_ROUTES,
  ]



  })
export class PagesModule {}
