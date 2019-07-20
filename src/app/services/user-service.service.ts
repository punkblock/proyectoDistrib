import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  //GET (Devuelve rangos de frecuencia para sexo)
  getRangos() {
      return this.http.get('http://178.128.73.129:3000/rangos/');
    }
  
  // Devuelve rangos de frec. para edad segun sexo
  getEdades() {
      return this.http.get('http://178.128.73.129:3000/edades/');
    }
}
