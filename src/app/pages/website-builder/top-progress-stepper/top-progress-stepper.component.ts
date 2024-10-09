import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-top-progress-stepper',
  templateUrl: './top-progress-stepper.component.html',
  styleUrl: './top-progress-stepper.component.scss'
})
export class TopProgressStepperComponent {

  @Input() activeStep: '1' | '2' | '3' | '4' = '1';

}
