import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  url="https://localhost:44304/api/";
  constructor(private httpClient:HttpClient) { }

  getCar():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.url+"cars/getcardetail"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.url+"cars/getcarsdetailsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);

   }
   getCarsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.url + "cars/getcarsdetailsbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsDetail():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.url+"cars/getcardetail";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.url + "cars/getcardetailbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetails(carId: number): Observable<SingleResponseModel<CarDetail>> {
    let newPath = this.url + "cars/getcardetailbycarid?carId=" + carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }
 
  getCarsByFilter(colorId:number,brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.url+"cars/getcarsbyfilter?colorId="+colorId+"&brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}