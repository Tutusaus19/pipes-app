import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private primeNGConfig: PrimeNGConfig){}


  //Con esto estamos haciendo que los grids que tienen botón para aparecer y desaparecer tengan un efecto de splash
      ngOnInit() {
          this.primeNGConfig.ripple = true;

      }


}
