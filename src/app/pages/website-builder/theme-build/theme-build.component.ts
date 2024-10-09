import {Component, EventEmitter, inject, OnDestroy, OnInit, Output} from '@angular/core';
import {ThemeBuildOpt} from '../../../interfaces/common/theme-build-opt.interface';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../services/core/language.service';
import {ThemeBuildOptService} from '../../../services/common/theme-build-opt.service';
import {ThemeData} from '../../../interfaces/common/theme-data.interface';
import {ThemeDataService} from '../../../services/common/theme-data.service';

@Component({
  selector: 'app-theme-build',
  templateUrl: './theme-build.component.html',
  styleUrl: './theme-build.component.scss'
})
export class ThemeBuildComponent implements OnInit, OnDestroy {


  // Store Data
  @Output() onBuildComplete = new EventEmitter();
  selectedTheme: ThemeData = null;
  themeBuildOpts: ThemeBuildOpt[] = [];
  themes: ThemeData[] = [];
  isThemeBuildStart: boolean = false;
  isLoading: boolean = false;
  isProjectBuildDone: boolean = false;

  // Countdown
  selectedThemeBuildOpt: ThemeBuildOpt;
  countDown = 0;
  isCountDownEnd = false;
  timeInstance = null;

  // Inject
  private readonly themeBuildOptService = inject(ThemeBuildOptService);
  private readonly themeDataService = inject(ThemeDataService);
  private readonly languageService = inject(LanguageService);

  // Subscriptions
  private subLanguage: Subscription;
  private subDataGet: Subscription;
  private subDataGet2: Subscription;

  ngOnInit() {
    this.subLanguage = this.languageService.refreshLanguage$.subscribe(() => {
      if (this.isThemeBuildStart) {
        this.getThemeBuildOpts();
      } else {
        this.getThemes();
      }
    })

    // Base data
    this.getThemes();

  }


  /**
   * HTTP Client
   * getThemeBuildOpts()
   * getThemes()
   */

  private getThemeBuildOpts() {
    this.subDataGet = this.themeBuildOptService.getThemeBuildOpts()
      .subscribe({
        next: res => {
          this.isLoading = false;
          this.themeBuildOpts = res.data;
          this.isThemeBuildStart = true;
          this.selectedThemeBuildOpt = this.themeBuildOpts[0];
          this.countTime(this.selectedThemeBuildOpt.timeInSec);
        },
        error: err => {
          console.log(err)
        }
      })
  }

  private getThemes() {
    this.subDataGet2 = this.themeDataService.getThemes()
      .subscribe({
        next: res => {
          this.themes = res.data;
          this.selectedTheme = this.themes.find(f => f.status === 'lived');
        },
        error: err => {
          console.log(err)
        }
      })
  }


  /**
   * Event Methods
   * onSelectTheme()
   * onBuild()
   */
  onSelectTheme($event: ThemeData) {
    this.selectedTheme = $event;
  }

  onBuild() {
    this.isLoading = true;
    setTimeout(() => {
      this.getThemeBuildOpts()
    }, 200)

  }

  countTime(timeInSec: number) {
    const count = (num: number) => () => {
      this.countDown = num;
      num = num === 0 ? 0 : num - 1;
      if (num <= 0) {
        clearInterval(this.timeInstance);
        this.countDown = 0;
        this.isCountDownEnd = true;
        if (this.isCountDownEnd) {
          this.goNextStep();
        }
      }
    };
    this.timeInstance = setInterval(count(timeInSec), 1000);
  }

  private goNextStep() {
    const fIndex = this.themeBuildOpts.findIndex(f => f._id === this.selectedThemeBuildOpt._id);

    if (fIndex  === (this.themeBuildOpts.length - 1)) {
      this.themeBuildOpts[this.themeBuildOpts.length - 1].status = 'completed';
      this.isProjectBuildDone = true;
      this.onBuildComplete.emit(this.isProjectBuildDone);
    } else {
      this.isCountDownEnd = false;
      this.themeBuildOpts[fIndex].status = 'completed';
      this.themeBuildOpts[fIndex + 1].status = 'working';
      this.selectedThemeBuildOpt = this.themeBuildOpts[fIndex + 1];

      this.countTime(this.selectedThemeBuildOpt.timeInSec)
    }
  }

  ngOnDestroy() {
    if (this.subLanguage) {
      this.subLanguage.unsubscribe();
    }
    if (this.subDataGet) {
      this.subDataGet.unsubscribe();
    }
    if (this.subDataGet2) {
      this.subDataGet2.unsubscribe();
    }
  }


}
