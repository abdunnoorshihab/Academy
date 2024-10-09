import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FAQ} from '../../interfaces/common/faq.interface';

const API_URL = '../../../../json/';


@Injectable({
  providedIn: 'root'
})
export class FaqService {

  // Inject
  private readonly httpClient = inject(HttpClient);


  /**
   * getAllFeatures()
   */

  getAllFaq() {
    return this.httpClient.get<{ data: FAQ[], success: boolean }>(API_URL + 'faq.db.json');
  }

}
