import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  myData: any = {
    bg: 'linear-gradient(90deg,rgb(132, 0, 255), rgb(3, 173, 182))',
    color: 'white',
  };

  // constructor(private router: Router) {}

  // ngOnInit(): void {
  //   const fullPath = this.router.url;
  //   console.log('Full URL:', fullPath);
  // }
}
