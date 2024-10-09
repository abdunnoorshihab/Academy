import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FAQ} from '../../../interfaces/common/faq.interface';
import {FaqService} from '../../../services/common/faq.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit, OnDestroy {
  // Stored Data
  faqs: FAQ[] = [];
  activeId: string = null;

  // Inject
  private readonly faqService = inject(FaqService);

  // Subscriptions
  private subDataGet: Subscription;


  ngOnInit() {
    // Base data
    this.getAllFaq();
  }


  /**
   * HTTP Client
   * getAllFaq()
   */

  private getAllFaq() {
    this.subDataGet = this.faqService.getAllFaq()
      .subscribe({
        next: res => {
          this.faqs = res.data;
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

  onItemToggle(event: string) {
    this.activeId = event;
  }
}
