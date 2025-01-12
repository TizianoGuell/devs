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
  constructor(private verificar:VerificacionLoginService){
    this.nuevoNombre="Invitado"
  }
  cargar(){
    this.nuevoNombre=this.verificar.getNombre();
  }

}
