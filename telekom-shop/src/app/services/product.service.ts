import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product, exampleProductList } from '../domain/products';
import { BehaviorSubject, Observable, delay, of, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

const productRestApiUrl = 'http://localhost:4001/products'
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public currentProduct$ = new BehaviorSubject<Product | undefined>(undefined)
  constructor(private httpClient: HttpClient) {
  }

  public setCurrentProductId(id: string) {
    this.httpClient.get<Product>(`${productRestApiUrl}/${id}`).subscribe(data => {
      this.currentProduct$.next(data)
    })
  }

  public getAllProducts$() {
    return this.httpClient.get<Product[]>(productRestApiUrl)
      .pipe(tap((data) => console.log('products received', data)))

    // return of(exampleProductList)
    //   .pipe(tap((data) => console.log('daten vor dem Delay erkannt', data)))
    //   .pipe(delay(2000))
    //   .pipe(tap((data) => console.log('daten nach dem Delay erkannt', data)));
  }

  public getProductById$(id: string) {
    return this.httpClient.get<Product>(`${productRestApiUrl}/${id}`)
  }

  public async getProductsByFetchApi() {
    const result = await fetch(productRestApiUrl)
    const data = await result.json()
    console.log(data)
    return data as Product[]
  }
}
