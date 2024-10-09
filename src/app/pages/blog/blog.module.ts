import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { BlogCardComponent } from '../../shared/components/blog-card/blog-card.component';
import { RegistrationBoxComponent } from '../../shared/components/registration-box/registration-box.component';


@NgModule({
  declarations: [
    BlogComponent,
    OurBlogComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    RegistrationBoxComponent
  ]
})
export class BlogModule { }
