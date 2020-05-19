import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ComboFechaComponent } from './combo-fecha/combo-fecha.component';



@NgModule({
  declarations: [ProductoComponent, CarritoComponent, ComboFechaComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductoComponent, CarritoComponent, ComboFechaComponent]
})
export class ComponentsModule { }
