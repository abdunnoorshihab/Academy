import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistationRoutingModule } from './registation-routing.module';
import { RegistationComponent } from './registation.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationBoxComponent } from '../../shared/components/registration-box/registration-box.component';


@NgModule({
  declarations: [
    RegistationComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegistationRoutingModule,
    RegistrationBoxComponent
  ]
})
export class RegistationModule { }
