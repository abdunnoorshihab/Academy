import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LanguageService} from '../core/language.service';
import {ThemeBuildOpt} from '../../interfaces/common/theme-build-opt.interface';

const API_URL = '../../../../json/';


@Injectable({
  providedIn: 'root'
})
export class ThemeBuildOptService {

  // Inject
  private readonly httpClient = inject(HttpClient);
  private readonly languageService = inject(LanguageService);


  /**
   * Language Base Http Client Init
   * getNavMenus()
   */

  getThemeBuildOpts() {
    const currentLanguage = this.languageService.currentLanguage;
    return this.httpClient.get<{
      data: ThemeBuildOpt[],
      success: boolean
    }>(API_URL + currentLanguage + '/theme-build-opt.db.json');
  }

}
