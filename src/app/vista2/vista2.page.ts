import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';//

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.page.html',
  styleUrls: ['./vista2.page.scss'],
})
export class Vista2Page implements OnInit {
//argumentos=null//
  constructor() { }//(private activeRoute: ActivatedRoute)

  ngOnInit() {
    //this.argumentos= this.activeRoute.snapshot.paramMap.get('id');
  //acceder a los datos enviados a traves de this.argumentos
  }

}
