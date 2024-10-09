import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {DEFAULT_LANGUAGE} from '../../core/utils/app-data';

export type LanguageType = 'en' | 'bn';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _currentLanguage: string = DEFAULT_LANGUAGE;
  private _refreshLanguage = new Subject<void>();

  get refreshLanguage$() {
    return this._refreshLanguage;
  }

  get currentLanguage() {
    return this._currentLanguage;
  }

  setCurrentLanguage(language: LanguageType) {
    this._currentLanguage = language;
    this._refreshLanguage.next();
  }

}
