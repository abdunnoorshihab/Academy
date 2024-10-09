
import { ContactUsBoxComponent } from './shared/components/contact-us-box/contact-us-box.component';
// import { OurTeamComponent } from './shared/components/our-team/our-team.component';
import { RegistrationBoxComponent } from './shared/components/registration-box/registration-box.component';
import { AppComponent } from './app.component';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { provideImgixLoader } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { environment } from '../environments/environment';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderModule } from './core/header/header.module';

import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,


  
    // ContactUsBoxComponent,
    // OurTeamComponent,
    // RegistrationBoxComponent,
    // OurTeamCardComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterComponent,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideImgixLoader(environment.ftpPrefixPath),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
