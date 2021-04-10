export interface Rental{
    rentalId?:number;
    carId:number;
    brandName : string;
    colorName:string;
    customerId : number;
    rentDate : Date;
    returnDate:Date;
}