import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WebsiteBuilderRoutingModule} from './website-builder-routing.module';
import {WebsiteBuilderComponent} from './website-builder.component';
import {TopProgressStepperComponent} from './top-progress-stepper/top-progress-stepper.component';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {InformationFormComponent} from './information-form/information-form.component';
import {FormInputItemComponent} from '../../shared/components/form-input-item/form-input-item.component';
import {FormSelectItemComponent} from '../../shared/components/form-select-item/form-select-item.component';
import { LoginRegistrationFormComponent } from './login-registration-form/login-registration-form.component';
import {SafeHtmlCustomPipe} from '../../shared/pipes/safe-html.pipe';
import { ThemeBuildComponent } from './theme-build/theme-build.component';
import {ThemeCardComponent} from '../../shared/components/theme-card/theme-card.component';
import {SecToTimePipe} from '../../shared/pipes/sec-to-time.pipe';
import { BuildCompleteComponent } from './build-complete/build-complete.component';


@NgModule({
  declarations: [
    WebsiteBuilderComponent,
    TopProgressStepperComponent,
    InformationFormComponent,
    LoginRegistrationFormComponent,
    ThemeBuildComponent,
    BuildCompleteComponent
  ],
  imports: [
    CommonModule,
    WebsiteBuilderRoutingModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    FormInputItemComponent,
    FormSelectItemComponent,
    SafeHtmlCustomPipe,
    ThemeCardComponent,
    SecToTimePipe,
  ]
})
export class WebsiteBuilderModule {
}
