import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles:[]
})
export class BasicosComponent {

  // Lower-Upper-TitleCase
    nombreLower: string = 'carlos';
    nombreUpper: string = 'CARLOS';
    nombreCompleto: string = 'cArLoS tUtUsaUS'

    //Fechas
    fecha: Date = new Date();

}
