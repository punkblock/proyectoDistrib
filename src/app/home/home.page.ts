import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor() {}   

  reproducirAudio(){
    //alert('tu alerta de click funciona')
    //src="assets/Imagenes/mic2.png"
    let sonido = new Audio();
    sonido.src = "assets/Grabaciones/audio.wav"
    sonido.load();
    sonido.play(); 
    return true;
  }


}
