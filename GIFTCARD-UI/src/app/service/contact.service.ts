import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Contact } from '../Models/contact';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json'
})}


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url:string=" http://localhost:3000/contact-us"

  constructor(private service:HttpClient) { }
  public Contact(contact:Contact)
  {
    return this.service.post(this.url,contact,Requestheaders);
  }

}