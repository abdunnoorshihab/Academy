import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LanguageService} from '../core/language.service';
import {ThemeData} from '../../interfaces/common/theme-data.interface';

const API_URL = '../../../../json/';


@Injectable({
  providedIn: 'root'
})
export class ThemeDataService {

  // Inject
  private readonly httpClient = inject(HttpClient);
  private readonly languageService = inject(LanguageService);


  /**
   * Language Base Http Client Init
   * getThemes()
   */

  getThemes() {
    const currentLanguage = this.languageService.currentLanguage;
    return this.httpClient.get<{
      data: ThemeData[],
      success: boolean
    }>(API_URL + currentLanguage + '/theme-data.db.json');
  }

}
