import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [CatalogoComponent],
  imports: [
    CommonModule, ComponentsModule
  ],
  exports: [CatalogoComponent, ComponentsModule]
})
export class PagesModule { }
