import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactUsBoxComponent } from '../../shared/components/contact-us-box/contact-us-box.component';
import { RegistrationBoxComponent } from '../../shared/components/registration-box/registration-box.component';
// import { MemberCardComponent } from '../../shared/components/our-team-card/member-card/member-card.component';
// import { RegistrationBoxComponent } from './registration-box/registration-box.component';
// import { ContactUsBoxComponent } from './contact-us-box/contact-us-box.component';
// import { OurTeamComponent } from './our-team/our-team.component';


@NgModule({
  declarations: [
    ContactComponent,
    ContactUsBoxComponent,
    ContactUsBoxComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    RegistrationBoxComponent
  ]
})
export class ContactModule { }
