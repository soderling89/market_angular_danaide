import { Injectable, ElementRef, ViewChild } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from '../modelo/pedido';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private urlEndPoint: string = 'http://localhost:8080/api/pedidos';
  private urlEndPointUsuarioVip: string = 'http://localhost:8080/usuarios/vip';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
  FECHA_ESPECIAL = '23/5/2020'

  fechaEspecial : boolean

    

  pagoTotal : number = 0;
  cantTotal : number = 0;

  products: any[] = [];
  cartTotal = 0;

  private productAddedSource = new Subject<any>();


  productAdded$ = this.productAddedSource.asObservable();

  constructor(private http: HttpClient) { }

  addProductToCart(product) {            
    let fecha : string;

    let vip = JSON.parse(localStorage.getItem('vip')); 

    let elemHTML: any = document.getElementsByName('seleccionarFecha')[0];
    fecha = elemHTML.value    

    let exists = false;
    const parsedPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
   
    this.cartTotal += parsedPrice;     
    
    this.products = this.products.map(_product => {
      if (_product.product.id === product.id) {
        _product.quantity++;
        exists = true;
      }
      return _product;
    });
    
    if (!exists) {
      product.parsedPrice = parsedPrice;
      this.products.push({
        product: product,
        quantity: 1
      });
    }

    this.cantTotal = this.cantidadCarrito(this.products)

    if (this.cantTotal === 5){
      this.pagoTotal = this.cartTotal * 0.8;
      this.productAddedSource.next({ products: this.products, cartTotal: this.pagoTotal});
    } else if (this.cantTotal>10) {
        if (vip) {
          this.pagoTotal = this.cartTotal - 700;
          this.productAddedSource.next({ products: this.products, cartTotal: this.pagoTotal});
        } else if (this.esFechaEspecial(fecha)) {
          this.pagoTotal = this.cartTotal - 500;
          this.productAddedSource.next({ products: this.products, cartTotal: this.pagoTotal});
        }
         else {
          this.pagoTotal = this.cartTotal - 200;
          this.productAddedSource.next({ products: this.products, cartTotal: this.pagoTotal});
        }
    } else {
      this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal});
    }   
    
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

  create() : Observable<Pedido> {
    let idUsuario : number = JSON.parse(localStorage.getItem('idUsuario'));
    let nuevopedido : Pedido = new Pedido(idUsuario, new Date(), this.pagoTotal);    

    return this.http.post<Pedido>(this.urlEndPoint, nuevopedido, {headers: this.httpHeaders})
  }

  getUsuarioVip(id : number): Observable<boolean>{
    return this.http.get<boolean>(`${this.urlEndPointUsuarioVip}/${id}`)
  }

}
