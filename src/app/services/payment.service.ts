import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  url="https://localhost:44304/api/";

  constructor(private httpClient:HttpClient) { }

  pay(rental:Rental,amount:number){
    let path = this.url + "rentals/paymentadd";
    //rental.returnDate = undefined;
    this.httpClient.post<ResponseModel>(path,{payment:{amount:amount},rental:rental})
  }
}
