import { Component } from '@angular/core';

@Component({
  selector: 'app-website-builder',
  templateUrl: './website-builder.component.html',
  styleUrl: './website-builder.component.scss'
})
export class WebsiteBuilderComponent {
  activeStep: '1' | '2' | '3' | '4'  = '1';

  onSubmitInformationForm(event: any) {
    this.activeStep = '2';
  }

  onSubmitLoginForm(event: any) {
    this.activeStep = '3';
  }

  onBuildComplete(event: any) {
    this.activeStep = '4';
  }
}
