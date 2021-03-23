import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  url="https://localhost:44304/api/";
  constructor(private httpClient:HttpClient) { }

  getCar():Observable<ListResponseModel<Car>>{
    let newPath=this.url+"cars/getcardetail"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getProductsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.url+"cars/getcarsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

   }
   getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.url + "cars/getcarsdetailbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
