import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registration-box',
  standalone: true,
  imports: [],
  templateUrl: './registration-box.component.html',
  styleUrl: './registration-box.component.scss'
})
export class RegistrationBoxComponent {
  @Input({required: true}) inputData: any;

  // ngOnInit(){
  //   console.log("-----> inputData ---", this.inputData);
    
  // }
}
