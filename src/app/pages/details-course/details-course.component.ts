import { Component } from '@angular/core';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrl: './details-course.component.scss'
})
export class DetailsCourseComponent {
  myData: any = {
    bg: 'linear-gradient(90deg,rgb(132, 0, 255), rgb(3, 173, 182))',
    color: 'white',
  };
}
