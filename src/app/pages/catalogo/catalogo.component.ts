import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modelo/product';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  FECHA_ESPECIAL : string = "Fecha especial"

  currentDate = new Date(); 

  productos: Product[] = [
    { id: 1, name: 'plancha', price: '1000', available: true, best_seller: true, img: 'plancha.png', description:'Excelente planchado' },
    { id: 2, name: 'termotanque', price: '8000', available: true, best_seller: true, img: '', description:'Excelente termotanque' },
    { id: 3, name: 'heladera', price: '20000', available: true, best_seller: false, img: '', description:'Excelente heladera' },
    { id: 4, name: 'plancha', price: '1000', available: true, best_seller: false, img: 'plancha.png', description:'Excelente planchado' },
    { id: 5, name: 'plancha', price: '1000', available: true, best_seller: false, img: 'plancha.png', description:'Excelente planchado' }

  ];  

  fechas: any[] = [
    { id: 1, fecha: this.currentDate.toLocaleDateString() },
    { id: 2, fecha: (this.currentDate.getDate() + 1) + '/' + (this.currentDate.getMonth() + 1) + '/' + this.currentDate.getFullYear()},
    { id: 2, fecha: (this.currentDate.getDate() + 2) + '/' + (this.currentDate.getMonth() + 1) + '/' + this.currentDate.getFullYear()},
    { id: 2, fecha: (this.currentDate.getDate() + 3) + '/' + (this.currentDate.getMonth() + 1) + '/' + this.currentDate.getFullYear()},
    { id: 2, fecha: (this.currentDate.getDate() + 4) + '/' + (this.currentDate.getMonth() + 1) + '/' + this.currentDate.getFullYear()},

  ];  

  constructor() { }

  ngOnInit(): void {
  }

}
