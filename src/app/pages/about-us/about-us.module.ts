import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { QualityCourseComponent } from './quality-course/quality-course.component';
import { TitleBannerComponent } from './title-banner/title-banner.component';
import { AboutUsBannerComponent } from './about-us-banner/about-us-banner.component';
import { WhatYouWillLearnComponent } from './what-you-will-learn/what-you-will-learn.component';
import { SingleFaqComponent } from '../../shared/components/single-faq/single-faq.component';
import { CourseFeaturesComponent } from "../home/course-features/course-features.component";
import { SuccessStoriesComponent } from "../home/success-stories/success-stories.component";
import { OurAlumnaComponent } from "../home/our-alumna/our-alumna.component";
import { RegistrationBoxComponent } from '../../shared/components/registration-box/registration-box.component';
// import { OurInstructorsComponent } from "../home/our-instructors/our-instructors.component";
import { OurTeamComponent } from './our-team/our-team.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    QualityCourseComponent,
    TitleBannerComponent,
    AboutUsBannerComponent,
    WhatYouWillLearnComponent,
    
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SingleFaqComponent,
    CourseFeaturesComponent,
    SuccessStoriesComponent,
    OurAlumnaComponent,
    RegistrationBoxComponent,
    // OurInstructorsComponent,
    OurTeamComponent,
]
})
export class AboutUsModule { }
