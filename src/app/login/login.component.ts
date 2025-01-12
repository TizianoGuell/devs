import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificacionLoginService } from '../services/verificacion-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nombre:string="Tiziano";
  edad:number=18
  /*personas:any=[
    "Tiziano","Lucas","david","Juan"
  ]*/
  constructor(private verificar:VerificacionLoginService, private router:Router){

  }
  IrTopBar(){
    this.verificar.guardarNombre(this.nombre);
    this.router.navigate(['topbar']);
  }
}
