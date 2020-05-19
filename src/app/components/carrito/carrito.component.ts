import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';
import {Router, ActivatedRoute} from '@angular/router'
import Swal from 'sweetalert2';


const OFFSET_HEIGHT = 170;
const PRODUCT_HEIGHT = 48;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  products: any[] = [];
  numProducts = 0;
  animatePlop = false;
  animatePopout = false;
  expanded = false;
  expandedHeight: string;
  cartTotal = 0;
  inherit: string;


  changeDetectorRef: ChangeDetectorRef;


  constructor(private carritoService: CarritoService, changeDetectorRef: ChangeDetectorRef, private router: Router) {
    this.changeDetectorRef = changeDetectorRef;
  }

  ngOnInit() {
    this.expandedHeight = '0';
    this.carritoService.productAdded$.subscribe(data => {
      this.products = data.products;
      this.cartTotal = data.cartTotal;
      this.numProducts = data.products.reduce((acc, product) => {
        acc += product.quantity;
        return acc;
      }, 0);

      // Make a plop animation
      if (this.numProducts > 1) {
        this.animatePlop = true;
        setTimeout(() => {
          this.animatePlop = false;
        }, 160);
      } else if (this.numProducts === 1) {
        this.animatePopout = true;
        setTimeout(() => {
          this.animatePopout = false;
        }, 300);
      }
      this.expandedHeight = (this.products.length * PRODUCT_HEIGHT + OFFSET_HEIGHT) + 'px';
      if (!this.products.length) {
        this.expanded = false;
      }
      this.changeDetectorRef.detectChanges();
    });
  }

  deleteProduct(product) {
    this.carritoService.deleteProductFromCart(product);
  }

  onCartClick() {
    this.expanded = !this.expanded;
  }

  create(): void {
    this.carritoService.create()
      .subscribe(resp => {              
        Swal.fire('Nuevo pedido', `Nuevo pedido creado con éxito!`, 'success').then(function() {
          localStorage.clear();
          window.location.reload();
      });
        
      }
      );
  }

}
