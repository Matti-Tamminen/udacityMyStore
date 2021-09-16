import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'products', component: ListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'details/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
