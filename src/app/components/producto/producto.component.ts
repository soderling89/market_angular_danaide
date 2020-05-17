import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modelo/product';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  @Input() product: Product

  detailViewActive: boolean

  constructor(private carritoService : CarritoService) { }

  ngOnInit(): void {
    this.detailViewActive = false
  }

  onProductClick(){
    this.detailViewActive = !this.detailViewActive
  }

  onAddToCart(){
    this.carritoService.addProductToCart(this.product)    
  }

}
