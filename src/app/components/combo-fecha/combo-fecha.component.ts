import { Component, OnInit, Input } from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-combo-fecha',
  templateUrl: './combo-fecha.component.html',
  styleUrls: ['./combo-fecha.component.scss']
})
export class ComboFechaComponent implements OnInit {
  @Input() fechas : any

  fechaSeleccionada : string

  fechaEspecial : boolean

  constructor(private carritoService : CarritoService) { }

  ngOnInit(): void {   

  }

  get esFechaEspecial() {        
    if (this.carritoService.esFechaEspecial(this.fechaSeleccionada)) {
      return true;
    } else {
      return false
    }
  }

}
