import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-combo-fecha',
  templateUrl: './combo-fecha.component.html',
  styleUrls: ['./combo-fecha.component.scss']
})
export class ComboFechaComponent implements OnInit {
  @Input() fechas : any

  fechaSeleccionada : any

  constructor() { }

  ngOnInit(): void {
  }

}
