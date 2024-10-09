import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsCourseRoutingModule } from './details-course-routing.module';
import { DetailsCourseComponent } from './details-course.component';

import { AboutCourseComponent } from './about-course/about-course.component';
import { SingleFaqComponent } from '../../shared/components/single-faq/single-faq.component';


import { CourseFeaturesComponent } from "../home/course-features/course-features.component";
import { RegistrationBoxComponent } from "../../shared/components/registration-box/registration-box.component";
import { OurAlumnaComponent } from "../home/our-alumna/our-alumna.component";
import { SuccessStoriesComponent } from "../home/success-stories/success-stories.component";


import { DataScincetisComponent } from './data-scincetis/data-scincetis.component';
// import { OurInstructorsComponent } from "../home/our-instructors/our-instructors.component";
import { OurTeamComponent } from '../about-us/our-team/our-team.component';


@NgModule({
  declarations: [
    DetailsCourseComponent,
    AboutCourseComponent,
    DataScincetisComponent
  ],
  imports: [
    CommonModule,
    DetailsCourseRoutingModule,
    SingleFaqComponent,
    CourseFeaturesComponent,
    RegistrationBoxComponent,
    OurAlumnaComponent,
    SuccessStoriesComponent,
    // OurInstructorsComponent,
    OurTeamComponent
]

})
export class DetailsCourseModule { }
