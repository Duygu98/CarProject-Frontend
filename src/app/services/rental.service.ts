import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  url='https://localhost:44304/api/';
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.url + 'rentals/getrentaldetail'
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  getRentalByCarId(carId : number):Observable<ListResponseModel<Rental>>{
    let newPath = this.url + 'rentals/getrentaldetailbycarId?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  payRental(rental:Rental, amount:number){
    let newPath = this.url + 'rentals/add';
    return this.httpClient.post<ResponseModel>(newPath,{payment:{amount:amount},rental:{rental}})
  }
  addRental(rental:Rental){
    let newPath = this.url + 'rentals/add'
    this.httpClient.post(newPath,rental).subscribe()
  }
}