import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Order } from '../Models/order';
import {Observable} from 'rxjs';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json'
})}
@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {
  url:string=" http://localhost:3000/place-order"

  constructor(private service:HttpClient) { }
  public AddOrder(order:Order){
    return this.service.post<any>(this.url,order);
  }
  public GetOrders(){
    return this.service.get<any>(this.url);
  }
}