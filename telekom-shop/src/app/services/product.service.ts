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
  
  public productList$ = new BehaviorSubject<Product[]>([])
  public currentProduct$ = new BehaviorSubject<Product | undefined>(undefined)
  
  constructor(private httpClient: HttpClient) {
  }

  // example getting rest data with HTTPClient
  public setCurrentProductId(id: string) {
    this.httpClient.get<Product>(`${productRestApiUrl}/${id}`).subscribe(data => {
      this.currentProduct$.next(data)
    })
  }

  // commented because users of this service will trigger http get requests
  // every time they want to get a product list

  // public getAllProducts$() {
  //   return this.httpClient.get<Product[]>(productRestApiUrl)
  //     .pipe(tap((data) => console.log('products received', data)))

  //   // return of(exampleProductList)
  //   //   .pipe(tap((data) => console.log('daten vor dem Delay erkannt', data)))
  //   //   .pipe(delay(2000))
  //   //   .pipe(tap((data) => console.log('daten nach dem Delay erkannt', data)));
  // }

  public getProductById$(id: string) {
    return this.httpClient.get<Product>(`${productRestApiUrl}/${id}`)
  }

  // example getting data from REST with fetch API
  public async reloadProductsByFetchApi() {
    this.productList$.next([])
    // todo: Promises in depth explain....
    await new Promise(resolve => setTimeout(resolve, 1000))
    const result = await fetch(productRestApiUrl)
    const data = await result.json()
    this.productList$.next(data as Product[])
  }

  public addNew(product: Partial<Product>) {
    this.httpClient.post(`${productRestApiUrl}`,product)
      .subscribe(response => console.log('response', response) )
  }
}
