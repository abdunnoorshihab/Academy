import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from './contact.component';
import { ContactUsBoxComponent } from '../../shared/components/contact-us-box/contact-us-box.component';

const routes: Routes = [
  {path: '', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
