import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-learn-something-card',
  standalone: true,
  imports: [],
  templateUrl: './learn-something-card.component.html',
  styleUrl: './learn-something-card.component.scss'
})
export class LearnSomethingCardComponent {
  @Input({required: true}) inputData: any;

  // ngOnInit(){
  //   console.log("inputData-->",this.inputData);
  // }
}
