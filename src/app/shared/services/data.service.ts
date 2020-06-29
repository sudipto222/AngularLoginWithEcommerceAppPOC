import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _httpClient: HttpClient) {}

  getProducts(): Observable<Product> {
    return this._httpClient.get<Product>(`${environment.BASE_URL}products`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getProductById(productId): Observable<Product> {
    return this._httpClient.get<Product>(
      `${environment.BASE_URL}products/${productId}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
