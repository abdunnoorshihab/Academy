import {Component} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  myData: any = {
    bg: 'white',
    color: '#1B9AAA',
  };

  // Lazy Component View
  // showLazyComponent: string[] = [];


  /**
   * ON Lazy Component Load
   */
  // loadNextComponent(type: 'sec1' | 'sec2' | 'sec3' | 'sec4' | 'sec5' | 'sec6') {
  //   this.showLazyComponent.push(type);
  // }

  // checkComponentLoad(type: 'sec1' | 'sec2' | 'sec3' | 'sec4' | 'sec5' | 'sec6'): boolean {
  //   const fIndex = this.showLazyComponent.findIndex(f => f === type);
  //   return fIndex !== -1;
  // }
}
