import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  myData: any = {
    bg: 'linear-gradient(90deg,rgb(132, 0, 255), rgb(3, 173, 182))',
    color: 'white',
  };
}
