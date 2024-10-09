import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Feature} from '../../interfaces/common/feature.interface';

const API_URL = '../../../../json/';


@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  // Inject
  private readonly httpClient = inject(HttpClient);


  /**
   * getAllFeatures()
   */

  getAllFeatures() {
    return this.httpClient.get<{ data: Feature[], success: boolean }>(API_URL + 'features.db.json');
  }

}
