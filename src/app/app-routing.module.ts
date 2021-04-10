import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailComponent } from './component/car/car-detail/car-detail.component';
import { CarComponent } from './component/car/car.component';
import { PaymentComponent } from './component/payment/payment.component';
import { RentalComponent } from './component/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brands/:brandId", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:'cars/filter/:colorId/:brandId', component: CarComponent },
  {path:"cars/cardetails/:carId",component:CarDetailComponent},
  {path:"rental/:carId", component:RentalComponent},
  {path:"payment/:rental", component:PaymentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
