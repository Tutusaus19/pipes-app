import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
    // i18nSelect
  nombre: string = 'Carlos';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //Metodos para cambiar  i18nSelect
  cambiarNombre(){
      this.nombre = 'Daniela'
      this.genero = 'femenino'
  }

  // i18nPlural
  clientes:string[] = ['Carlos', 'Daniela', 'Bruno', 'Lucas', 'Charlie', 'Sabrina']
  clientesMap = {
      '<1': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos un cliente esperando.',
      '=2': 'tenemos 2 clientes esperando',
      'other': 'tenemos # clientes esperando'

  }

  //Metodos para cambiar  i18nPlural
  anadirCliente(cliente:string){
    this.clientes.push(cliente);
  }
  eliminarCliente(){
    this.clientes.shift();
  }

  //KeyValue Pipe

  persona = {
    nombre:'Carlos',
    edad: 25,
    direccion: 'Madrid,España'
  }

  // JSON PIPE

  heroes = [
    {
      nombre:'Spiderman',
      power: 80
    },
    {
      nombre:'Hulk',
      power: 100
    },
    {
      nombre:'Batman',
      power: 90
    }
  ]

  //Observable

myObservable = interval(3500);
valorPromesa = new Promise((res, reject)=>{
  setTimeout(()=>{
    res('Tenemos data de promesa')
  }, 3500)
})
}




