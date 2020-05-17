import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [ProductoComponent, CarritoComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductoComponent, CarritoComponent]
})
export class ComponentsModule { }
