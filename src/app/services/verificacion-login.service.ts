import { Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VerificacionLoginService {
  private nombre:string;
  private password:string;
  private data:any;
  private datosPrincipales:any
  constructor() {
    this.nombre=""
    this.password=""
    this.datosPrincipales={
      nombre:"Tiziano",
      contra:"12345"
    }
  }

  guardarData(name:string,pass:string){
    this.nombre=name;
    this.password=pass
    this.data={
      nombre:this.nombre,
      contra:this.password
    }
  }

  getData(){
    return this.data
  }

  verficarData(username:string,contrasenia:string){
    if(username==this.datosPrincipales.nombre){
      if(contrasenia==this.datosPrincipales.contra){
        return true
      }
      else{
        return "Contraseña incorrecta"
      }
    }
    else{
      return "Username incorrecto"
    }
  }

}
