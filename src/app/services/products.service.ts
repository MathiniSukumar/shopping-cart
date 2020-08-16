import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';

import { productsUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { 
    
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(productsUrl); 
  }

}
