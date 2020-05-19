import { NgModule } from "@angular/core";

import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule ({

  imports: [
    RouterModule,
    CommonModule
  ],




declarations: [
  NopagefoundComponent,
  BreadcrumsComponent,
  SiderbarComponent,
  HeaderComponent,
  NopagefoundComponent,

],

exports: [
  NopagefoundComponent,
  HeaderComponent,
  SiderbarComponent,
  BreadcrumsComponent,
  NopagefoundComponent,
]

})
export class ShareModule {}
