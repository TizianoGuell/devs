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
  usuarioActual: any = {
    nombre: 'Invitado',
    email: 'usuario@ejemplo.com'
  };

  constructor(private verificar: VerificacionLoginService) {
    this.cargarDatos(); // Cargar automáticamente al iniciar
  }

  cargarDatos() {
    const datos = this.verificar.getUsuarioActual();
    this.usuarioActual = {
      nombre: datos.nombre || 'Invitado',
      email: datos.email || 'usuario@ejemplo.com'
    };
  }
}