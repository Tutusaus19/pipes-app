import { Component } from '@angular/core';

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
  clientes:string[] = ['Maria', 'Pedro', 'Carlos', 'Daniela', 'Hola', 'Hola']
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
}
