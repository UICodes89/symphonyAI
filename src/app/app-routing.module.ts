import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from "./app.component"

const routes: Routes = [
  {
    path: 'secure',
    children: [
        
        {
            path: '',
            loadChildren: './secure/secure.module#SecureModule',
        }
    ]
},
{
    path:'',
    redirectTo:'/secure/jobs',
    pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
