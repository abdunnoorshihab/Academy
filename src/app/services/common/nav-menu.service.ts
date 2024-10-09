import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LanguageService} from '../core/language.service';
import {NavMenu} from '../../interfaces/common/nav-menu.interface';

const API_URL = '../../../../json/';


@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  // Inject
  private readonly httpClient = inject(HttpClient);
  private readonly languageService = inject(LanguageService);


  /**
   * Language Base Http Client Init
   * getNavMenus()
   */

  getNavMenus() {
    const currentLanguage = this.languageService.currentLanguage;
    return this.httpClient.get<{ data: NavMenu[], success: boolean }>(API_URL + currentLanguage + '/nav-menu.db.json');
  }

}
