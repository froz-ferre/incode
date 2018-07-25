import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './components/store/store.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StoreComponent
  ],
  exports: [
    StoreComponent
  ]
})
export class CoreModule { }
