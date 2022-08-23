import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataSourceBase } from './data-source.service';
import { Order, Product } from './entities';
import { HttpClient } from '@angular/common/http';

// const protocol = "http";
// const hostname= "localhost";
// const prot = 4600;
// const urls = {
//   products: `${protocol}://${hostname}:${prot}/products`,
//   orders: `${protocol}://${hostname}:${prot}/orders`
// }
const urls = {
  products: `/api/products`,
  orders: `/api/orders`
}

@Injectable({
  providedIn: 'root'
})
export class RemoteDataSourceService extends DataSourceBase {
  constructor(private http: HttpClient) { 
    super();
  }

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(urls.products);
  }

  storeOrder(order: Order): Observable<number> {
    let orderData = {
      lines: [...order.orderLines.values()].map(ol => ({
        productId: ol.product.id,
        productName: ol.product.name,
        quantity: ol.quantity
      }))
    }
    return this.http.post<{ id: number }>(urls.orders, orderData).pipe<number>(map(val => val.id));
  }
}
