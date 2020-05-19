import { Injectable, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  //@ViewChild('txtFechaEspecial') txtFechaEspecial: ElementRef;
  FECHA_ESPECIAL = '18/5/2020'

  fechaEspecial : boolean

  //acu : number = 0;
  cantTotal : number = 0;

  products: any[] = [];
  cartTotal = 0;

  private productAddedSource = new Subject<any>();


  productAdded$ = this.productAddedSource.asObservable();

  constructor() { }

  addProductToCart(product) { 
    debugger   
    let fecha : string;

    let elemHTML: any = document.getElementsByName('seleccionarFecha')[0];
    fecha = elemHTML.value    

    let exists = false;
    const parsedPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
   
    this.cartTotal += parsedPrice;    
    
    // Search this product on the cart and increment the quantity
    this.products = this.products.map(_product => {
      if (_product.product.id === product.id) {
        _product.quantity++;
        exists = true;
      }
      return _product;
    });
    // Add a new product to the cart if it's a new product
    if (!exists) {
      product.parsedPrice = parsedPrice;
      this.products.push({
        product: product,
        quantity: 1
      });
    }

    this.cantTotal = this.cantidadCarrito(this.products)

    if (this.cantTotal === 5){
      this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal * 0.8});
    } else if (this.cantTotal>10) {
        if (this.esFechaEspecial(fecha)) {
          this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal - 500});
        } else {
          this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal - 200});
        }
    } else {
      this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal});
    }

    // if (this.esFechaEspecial(fecha)){
    //   this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal - 500});
    // }
    // else {
    //   this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal});
    // }
    
  }

  deleteProductFromCart(product) {
    this.products = this.products.filter(_product => {
      if (_product.product.id === product.id) {
        this.cartTotal -= _product.product.parsedPrice * _product.quantity;
        return false;
      }
      return true;
     });
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
  }


  flushCart() {
    this.products = [];
    this.cartTotal = 0;
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
  }

  esFechaEspecial(fecha: string) : boolean {
    if (fecha === this.FECHA_ESPECIAL) {
      return true;
    } else {
      return false
    }
  }

  cantidadCarrito(carrito: any[]) : number {        
    let i;
    let acu = 0;
    
    for (i = 0; i< carrito.length; i++) {
      acu += carrito[i].quantity
    }
  return acu;
  }

}
