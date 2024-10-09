import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Showcase} from '../../../interfaces/common/showcase.interface';
import {Subscription} from 'rxjs';
import {ShowcaseService} from '../../../services/common/showcase.service';
import {LanguageService} from '../../../services/core/language.service';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrl: './top-section.component.scss'
})
export class TopSectionComponent implements OnInit, OnDestroy {

  // Stored Data
  showcase: Showcase;

  // Inject
  private readonly showcaseService = inject(ShowcaseService);
  private readonly languageService = inject(LanguageService);

  // Subscriptions
  private subLanguage: Subscription;
  private subDataGet: Subscription;


  ngOnInit() {

    this.subLanguage = this.languageService.refreshLanguage$.subscribe(() => {
      this.getShowcase();
    })

    // Base data
    this.getShowcase();

  }


  /**
   * HTTP Client
   * getShowcase()
   */

  private getShowcase() {
    this.subDataGet = this.showcaseService.getShowcase()
      .subscribe({
        next: res => {
          this.showcase = res.data;
        },
        error: err => {
          console.log(err)
        }
      })
  }

  ngOnDestroy() {
    if (this.subLanguage) {
      this.subLanguage.unsubscribe();
    }
    if (this.subDataGet) {
      this.subDataGet.unsubscribe();
    }
  }

}
