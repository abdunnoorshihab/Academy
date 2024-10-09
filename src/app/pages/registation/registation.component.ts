import { Component } from '@angular/core';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrl: './registation.component.scss'
})
export class RegistationComponent {
  myData: any = {
    bg: 'linear-gradient(90deg,rgb(132, 0, 255), rgb(3, 173, 182))',
    color: 'white',
  };
}
