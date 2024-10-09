import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {RouterModule} from "@angular/router";
// import {PriceCardComponent} from '../../shared/components/price-card/price-card.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // PriceCardComponent
  ],
  exports:[
  HeaderComponent
]
})
export class HeaderModule { }
