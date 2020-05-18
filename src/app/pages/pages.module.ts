import { NgModule } from "@angular/core";
import { ShareModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

// ng2 charts

import { ChartsModule } from 'ng2-charts';



import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';


// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';



@NgModule({
  declarations: [

    PagesComponent,
    Graficas1Component,
    DashboardComponent,
    ProgressComponent,
    IncrementadorComponent,
    GraficoDonaComponent,


  ],

  exports: [
    PagesComponent,
    Graficas1Component,
    DashboardComponent,
    ProgressComponent,
    GraficoDonaComponent,

  ],

  imports: [
    ShareModule,
    FormsModule,
    PAGES_ROUTES,
    ChartsModule,

  ]



  })
export class PagesModule {}
