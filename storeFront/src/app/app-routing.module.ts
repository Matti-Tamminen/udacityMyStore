import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'products', component: ListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'details/:id', component: DetailComponent },
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
