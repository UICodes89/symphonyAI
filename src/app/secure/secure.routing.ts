import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LayoutComponent} from "./layout-component/layout.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'jobs', component: LayoutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }