import { Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VerificacionLoginService {
  private nombre:string;
  
  constructor() {
    this.nombre=""
  }

  guardarNombre(name:string){
    this.nombre=name;
  }

  getNombre(){
    return this.nombre
  }

}
