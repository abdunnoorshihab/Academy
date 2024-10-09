import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  myData: any = {
    bg: 'linear-gradient(90deg,rgb(132, 0, 255), rgb(3, 173, 182))',
    color: 'white',
  };
}
