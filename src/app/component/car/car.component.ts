import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  carsDetail:CarDetail[]=[];
  currentCar: Car;
  dataLoaded=false;
  constructor(private carService:CarService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if(param['colorId']&&param['brandId']){
         this.getCarsByFilter(param['colorId'],param['brandId']);
       } else if (param['colorId']) {
         this.getCarsByColorId(param['colorId'])
       }else  if (param['brandId'])  {
         this.getCarsByBrandId(param['brandId']);
       }
        else {
         this.getCarsDetail();
       }
     });
  }

  getCars(){
    this.carService.getCar().subscribe(response=>{
      this.carsDetail=response.data
      this.dataLoaded=true;
    });
  }
  getCarsDetail() {
    this.carService.getCarsDetail().subscribe(response => {
      this.carsDetail = response.data 
    })
      this.dataLoaded=true;
  };
  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.carsDetail=response.data
      this.dataLoaded=true;
    });
 }
 getCarsByColorId(colorId:number){
  this.carService.getCarsByColorId(colorId).subscribe(response => {
    this.carsDetail = response.data;
    this.dataLoaded = true;
  })
 }
 getCarsByFilter(colorId:number,brandId:number){
  this.carService.getCarsByFilter(colorId,brandId).subscribe(response=>{
    this.carsDetail=response.data;
    this.dataLoaded=true;
  })
}
 
}
