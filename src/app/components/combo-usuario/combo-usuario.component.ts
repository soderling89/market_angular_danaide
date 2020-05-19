import { Component, OnInit, Input } from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-combo-usuario',
  templateUrl: './combo-usuario.component.html',
  styleUrls: ['./combo-usuario.component.scss']
})
export class ComboUsuarioComponent implements OnInit {
  @Input() usuarios : any;

  usuarioSeleccionado : number;

  vip : boolean

  constructor(private carritoService : CarritoService) { }

  ngOnInit(): void {
  }

  esUsuarioVip() {      
    this.carritoService.getUsuarioVip(this.usuarioSeleccionado).subscribe( (resp) => {
      this.vip = resp
      console.log(resp)
      localStorage.setItem('vip', JSON.stringify(resp));
      localStorage.setItem('idUsuario', JSON.stringify(this.usuarioSeleccionado));
    });    

    Swal.fire('Usuario cambiado', `Se cambio de usuario con éxito!`, 'info')
         
  }  

}
