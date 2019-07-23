import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductGridComponent } from './product-grid.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ProductGridComponent],
  exports: [ProductGridComponent]
})
export class ProductGridModule { }
