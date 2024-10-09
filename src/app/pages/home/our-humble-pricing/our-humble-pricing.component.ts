import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Pricing} from '../../../interfaces/common/pricing.interface';
import {Subscription} from 'rxjs';
import {PricingService} from '../../../services/common/pricing.service';

@Component({
  selector: 'app-our-humble-pricing',
  templateUrl: './our-humble-pricing.component.html',
  styleUrl: './our-humble-pricing.component.scss',
})
export class OurHumblePricingComponent implements OnInit, OnDestroy {

  // Stored Data
  pricing: Pricing[] = []

  // Inject
  private readonly pricingService = inject(PricingService);

  // Subscriptions
  private subDataGet: Subscription;


  ngOnInit() {
    // Base data
    this.getAllPrices();
  }


  /**
   * HTTP Client
   * getAllPrices()
   */

  private getAllPrices() {
    this.subDataGet = this.pricingService.getAllPrices()
      .subscribe({
        next: res => {
          this.pricing = res.data;
        },
        error: err => {
          console.log(err)
        }
      })
  }

  /**
   * On Destroy
   */
  ngOnDestroy() {
    if (this.subDataGet) {
      this.subDataGet.unsubscribe();
    }
  }

}
