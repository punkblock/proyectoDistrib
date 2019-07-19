import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Vista3Page } from '../vista3/vista3.page';
import { NavController } from '@ionic/angular';

//import { ActivatedRoute } from '@angular/router';//

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.page.html',
  styleUrls: ['./vista2.page.scss'],
})
export class Vista2Page implements OnInit {
//argumentos=null//
  respuesta: any;
  $data: any;
  $data2: any;
  minn: number = 0;
  maxx: number = 0;
  frecuencia: number = 140;// 140 -> masculino
  lim1: number = 0;
  lim2: number = 0;
  frecuenciaFundamental: number = 140;// 140 -> anciano(m)
  sexo: string;
  tipo: string;
  condition: boolean=false;
  go:boolean=false;
  x: any;
  
  constructor(public userServiceService: UserServiceService, public navCtrl: NavController) { }//(private activeRoute: ActivatedRoute)
  
  ngOnInit() {
  //this.argumentos= this.activeRoute.snapshot.paramMap.get('id');
  //acceder a los datos enviados a traves de this.argumentos
    this.rangos();
    
    if(this.go===true){
      this.x = setInterval(()=>this.edades(),1000);
    }
  }

  rangos() {
    this.$data=null;
    this.userServiceService.getRangos()
      .subscribe(
        (data) => { // Éxito
          this.$data=data;
          console.log(this.$data);
          let quer = JSON.stringify(data);
          let quer2 = JSON.parse(quer);
          let quer3 = JSON.stringify(quer2.rangos);
          let quer4 = JSON.parse(quer3);
          for (let i=0;i<2;i++){
            let min = JSON.stringify(quer4[i]).slice(8,11);
            this.minn= parseInt(min);
            let max = JSON.stringify(quer4[i]).slice(19,22);
            this.maxx= parseInt(max);
            if (this.frecuencia >= this.minn && this.frecuencia <= this.maxx){
              let spliit = JSON.stringify(quer4[i]).slice(30,41);
              let sex = spliit.split(",");
              this.sexo = sex[0];
              console.log(this.sexo);
            }
            console.log(this.minn);
            console.log(this.maxx);
          }
        },
        (error) =>{
          console.error(error);
        }
      )
      this.go=true;
  }
  min(min: any) {
    throw new Error("Método no implementado.");
  }

  edades() {
    this.stoop();
    this.condition=false;
    this.userServiceService.getEdades()
    .subscribe(
      (data) => { // Éxito
        console.log(data);
        if(this.sexo === '"Masculino"'){
          this.$data2=data;
          // console.log(this.$data2);
          let quer = JSON.stringify(data);
          let quer2 = JSON.parse(quer);
          let quer3 = JSON.stringify(quer2.edades);
          let quer4 = JSON.parse(quer3);
          for (let i=0;i<4;i++){
            let li1 = JSON.stringify(quer4[i]).slice(8,11);
            this.lim1= parseInt(li1);
            let li2 = JSON.stringify(quer4[i]).slice(19,22);
            this.lim2= parseInt(li2);
            if ((this.frecuenciaFundamental >= this.lim1 && this.frecuenciaFundamental <= this.lim2) && this.condition === false){
              let spliit = JSON.stringify(quer4[i]).slice(30,41);
              let tip = spliit.split(",");
              this.tipo = tip[0];
              this.condition=true;
              console.log(this.tipo);
            }
            // console.log(this.lim1);
            // console.log(this.lim2);
          }
        }else {if(this.sexo === '"Femenino"'){
          this.$data2=data;
          console.log(this.$data2);
          let quer = JSON.stringify(data);
          let quer2 = JSON.parse(quer);
          let quer3 = JSON.stringify(quer2.edades);
          let quer4 = JSON.parse(quer3);
          for (let i=4;i<8;i++){
            let li1 = JSON.stringify(quer4[i]).slice(8,11);
            this.lim1= parseInt(li1);
            let li2 = JSON.stringify(quer4[i]).slice(19,22);
            this.lim2= parseInt(li2);
            if ((this.frecuenciaFundamental >= this.minn && this.frecuenciaFundamental <= this.maxx) && this.condition === false){
              let spliit = JSON.stringify(quer4[i]).slice(30,41);
              let tip = spliit.split(",");
              this.tipo = tip[0];
              console.log(this.tipo);
              this.condition=true;
            }
            // console.log(this.lim1);
            // console.log(this.lim2);
          }
        }
      }}
      ,
      (error) =>{
        console.error(error);
      }
    )
  }

  stoop() {
    clearInterval(this.x);
    // clearInterval(this.pl);
  }

}
