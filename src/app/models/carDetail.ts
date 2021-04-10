import { Car } from "./car";
import { CarImage } from "./carImage";

export interface CarDetail extends Car {
    carId:number;
    brandName:string;
    brandId:string;
    colorId:string;
    colorName:string;
    carName:string;
    modelYear:string;
    dailyPrice:number;
    descriptions:string;
    carImages:CarImage[];

}
