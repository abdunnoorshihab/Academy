import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OurHumblePricingComponent } from './our-humble-pricing/our-humble-pricing.component';
import { FaqComponent } from './faq/faq.component';
import { FeaturesComponent } from './features/features.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';
import { PriceCardComponent } from '../../shared/components/price-card/price-card.component';
import { LazyLoadComponentDirective } from '../../shared/directives/lazy-load-component.directive';
import { ShowcaseComponent } from './showcase/showcase.component';
import { LearnSomethingComponent } from './learn-something/learn-something.component';
import { LearnSomethingCardComponent } from '../../shared/components/learn-something-card/learn-something-card.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { OurAchievementComponent } from './our-achievement/our-achievement.component';
import { OurAlumnaComponent } from './our-alumna/our-alumna.component';
import { OurCoursesComponent } from './our-courses/our-courses.component';
import { InspiringFuturesComponent } from './inspiring-futures/inspiring-futures.component';
import { CourseFeaturesComponent } from './course-features/course-features.component';
import { RegistrationBoxComponent } from '../../shared/components/registration-box/registration-box.component';
import { SingleCourseComponent } from '../../shared/components/single-course/single-course.component';
import { OurTeamComponent } from '../about-us/our-team/our-team.component';

@NgModule({
  declarations: [
    HomeComponent,
    OurHumblePricingComponent,
    FaqComponent,
    FeaturesComponent,
    TopSectionComponent,
    ShowcaseComponent,
    LearnSomethingComponent,
    OurAchievementComponent,
    OurCoursesComponent,
    InspiringFuturesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PriceCardComponent,
    FeatureCardComponent,
    LazyLoadComponentDirective,
    LearnSomethingCardComponent,
    RegistrationBoxComponent,
    OurAlumnaComponent,
    SuccessStoriesComponent,
    CourseFeaturesComponent,
    SingleCourseComponent,
    OurTeamComponent,
  ],
})
export class HomeModule {}
