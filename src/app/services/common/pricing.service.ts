
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pricing } from '../../interfaces/common/pricing.interface';


const API_URL = '../../../../json/';


@Injectable({
  providedIn: 'root'
})
export class PricingService {

  // Inject
  private readonly httpClient = inject(HttpClient);


  /**
   * getAllFeatures()
   */

  getAllPrices() {
    return this.httpClient.get<{ data: Pricing[], success: boolean }>(API_URL + 'pricing.db.json');
  }

}
