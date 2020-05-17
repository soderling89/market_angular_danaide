import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modelo/product';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  productos: Product[] = [
    { id: 1, name: 'plancha', price: '1000', available: true, best_seller: true, img: 'plancha.png', description:'Excelente planchado' },
    { id: 1, name: 'plancha', price: '1000', available: true, best_seller: true, img: 'plancha.png', description:'Excelente planchado' },
    { id: 1, name: 'plancha', price: '1000', available: true, best_seller: false, img: 'plancha.png', description:'Excelente planchado' },
    { id: 1, name: 'plancha', price: '1000', available: true, best_seller: false, img: 'plancha.png', description:'Excelente planchado' },
    { id: 1, name: 'plancha', price: '1000', available: true, best_seller: false, img: 'plancha.png', description:'Excelente planchado' }

  ];  

  constructor() { }

  ngOnInit(): void {
  }

}
