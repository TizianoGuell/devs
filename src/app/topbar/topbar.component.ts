import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificacionLoginService } from '../services/verificacion-login.service';
@Component({
  selector: 'app-topbar',
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  nuevoNombre:string;
  nuevaContra:string;
  data:any;
  constructor(private verificar:VerificacionLoginService){
    this.nuevoNombre="Invitado"
    this.nuevaContra="123"
  }
  cargar(){
    this.data=this.verificar.getData();
    this.nuevaContra=this.data.contra;
    this.nuevoNombre=this.data.nombre;
  }

}
