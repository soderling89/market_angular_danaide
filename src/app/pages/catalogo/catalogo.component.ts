import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modelo/product';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {  

  currentDate = new Date(); 

  productos: Product[] = [
    { id: 1, name: 'plancha', price: '3000', available: true, best_seller: true, img: 'plancha.png', description:'Excelente planchado' },
    { id: 2, name: 'termotanque', price: '15000', available: true, best_seller: true, img: 'termotanque.jpg', description:'Excelente termotanque' },
    { id: 3, name: 'heladera', price: '20000', available: true, best_seller: false, img: 'heladera.jpg', description:'Excelente heladera' },
    { id: 4, name: 'microondas', price: '9000', available: true, best_seller: false, img: 'microondas.jpg', description:'Excelente microondas' },
    { id: 5, name: 'cafetera', price: '1000', available: true, best_seller: false, img: 'cafetera.jpg', description:'Excelente cafetera' }

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
