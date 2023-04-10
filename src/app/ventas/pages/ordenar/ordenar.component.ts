import { Component } from '@angular/core';
import { Color, Heroes } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})

export class OrdenarComponent{

  enMayusculas: boolean = false;
  order: string = '';

  toggleMayusculas(){
    this.enMayusculas = !this.enMayusculas
  }

  heroes: Heroes[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Spiderman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde
    }
  ];

  cambiarOrden(value:string){
      this.order = value;
  }
}
