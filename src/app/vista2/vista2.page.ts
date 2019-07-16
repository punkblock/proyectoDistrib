import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';//

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.page.html',
  styleUrls: ['./vista2.page.scss'],
})
export class Vista2Page implements OnInit {
  frec: any;
  edad: string;
  sexo: string;
//argumentos=null//
  constructor() { }//(private activeRoute: ActivatedRoute)

  ngOnInit() {
    //this.argumentos= this.activeRoute.snapshot.paramMap.get('id');
  //acceder a los datos enviados a traves de this.argumentos
  }

  rangoEdad(){
      if (this.frec > 230){
        this.edad = "Niño";
      }
      //masculino, discrepancias al usar solo frecuencia
      if (this.frec > 100 && this.frec < 130){
        this.edad = "Adolescente";
      }
      if (this.frec >= 130 && this.frec < 180){
        this.edad = "Adulto";
      }
      if (this.frec >= 180  && this.frec < 230){
        this.edad = "Anciano";
      }
  }

  tipoSexo(){
    if (this.frec > 100  && this.frec < 160){
      this.sexo = "Masculino";
    }
    if (this.frec >= 160  && this.frec < 262){
      this.sexo = "Femenino";
    }
  }

}
