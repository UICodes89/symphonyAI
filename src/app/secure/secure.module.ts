import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SecureRoutingModule} from "./secure.routing";
import {LayoutComponent} from "./layout-component/layout.component";
import {MaterialModule} from "../material";


import {JobdetailsService} from "../service/jobdetails.service";
import { PostedJobComponent } from './posted-jobs/posted-job.component';
import { ShorlistedComponent } from './shorlisted/shorlisted.component';
import { IntrviewsComponent } from './intrviews/intrviews.component';

@NgModule({
  imports: [
    CommonModule,
    SecureRoutingModule,
    MaterialModule
  ],
  declarations: [ LayoutComponent, PostedJobComponent, ShorlistedComponent, IntrviewsComponent],
  providers:[JobdetailsService]
})
export class SecureModule { }
