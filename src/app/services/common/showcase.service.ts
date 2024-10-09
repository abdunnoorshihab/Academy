import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Showcase} from '../../interfaces/common/showcase.interface';
import {LanguageService} from '../core/language.service';

const API_URL = '../../../../json/';


@Injectable({
  providedIn: 'root'
})
export class ShowcaseService {

  // Inject
  private readonly httpClient = inject(HttpClient);
  private readonly languageService = inject(LanguageService);


  /**
   * Language Base Http Client Init
   * getShowcase()
   */

  getShowcase() {
    const currentLanguage = this.languageService.currentLanguage;
    return this.httpClient.get<{ data: Showcase, success: boolean }>(API_URL + currentLanguage + '/showcase.db.json');
  }

}
