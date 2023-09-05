import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product, exampleProductList } from '../domain/products';
import { Observable, delay, of, tap } from 'rxjs';

const productRestApiUrl = 'http://localhost:4001/products'
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  public getAllProductsRohrpost() {
    return this.httpClient.get<Product[]>(productRestApiUrl)
      .pipe(tap((data) => console.log('products received', data)))

    // return of(exampleProductList)
    //   .pipe(tap((data) => console.log('daten vor dem Delay erkannt', data)))
    //   .pipe(delay(2000))
    //   .pipe(tap((data) => console.log('daten nach dem Delay erkannt', data)));
  }

  public getProductById(id: string) {
    return exampleProductList.find(product => id === product.id)
  }

  public async getProductsByFetchApi() {
    const result = await fetch(productRestApiUrl)
    const data = await result.json()
    console.log(data)
    return data as Product[]
  }
}
