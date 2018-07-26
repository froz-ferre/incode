import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './components/store/store.component';
import { CartComponent } from './components/cart/cart.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/store', pathMatch: 'full'},
  {path: 'store', component: StoreComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', redirectTo: '/store', pathMatch: 'full'}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    StoreComponent,
    CartComponent
  ],
  exports: [
    StoreComponent
  ]
})
export class CoreModule { }
