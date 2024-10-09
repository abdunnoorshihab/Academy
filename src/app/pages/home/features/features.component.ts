import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Feature} from '../../../interfaces/common/feature.interface';
import {FeaturesService} from '../../../services/common/features.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements OnInit, OnDestroy {

  // Stored Data
  features: Feature[] = []

  // Inject
  private readonly featuresService = inject(FeaturesService);

  // Subscriptions
  private subDataGet: Subscription;


  ngOnInit() {
    // Base data
    this.getAllFeatures();
  }


  /**
   * HTTP Client
   * getAllFeatures()
   */

  private getAllFeatures() {
    this.subDataGet = this.featuresService.getAllFeatures()
      .subscribe({
        next: res => {
          this.features = res.data;
        },
        error: err => {
          console.log(err)
        }
      })
  }

  ngOnDestroy() {
    if (this.subDataGet) {
      this.subDataGet.unsubscribe();
    }
  }

}
