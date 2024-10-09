import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WebsiteBuilderComponent} from './website-builder.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteBuilderRoutingModule { }
