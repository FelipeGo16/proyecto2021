import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  nombre = 'Juan Carlos';
  saldo = 1000.50;
  dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  articulos = [{
      codigo: 1,
      descripcion: "papas",
      precio: 12.33
    },{
      codigo: 2,
      descripcion: "manzanas",
      precio: 54
    }];
  fechaActual = new Date();

  

  @Input() datos;
  
  constructor() { }

  ngOnInit(): void {
  }

}
