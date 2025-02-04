import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VerificacionLoginService } from '../services/verificacion-login.service';
import { TopbarComponent } from '../topbar/topbar.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TopbarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Usando Signals para estado reactivo
  seccionActiva = signal('estadisticas');
  usuarioNombre = signal('Invitado');
  usuarioEmail = signal('usuario@ejemplo.com');
  usuarioIniciales = signal('??');
  modoOscuro = signal(false);

  constructor(private loginService: VerificacionLoginService) {}

  ngOnInit() {
    const usuario = this.loginService.getUsuarioActual();
    this.usuarioNombre.set(usuario.nombre || 'Invitado');
    this.usuarioEmail.set(usuario.email || 'usuario@ejemplo.com');
    this.usuarioIniciales.set(this.generarIniciales());
  }

  private generarIniciales(): string {
    return this.usuarioNombre().split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }

  cambiarSeccion(seccion: string) {
    this.seccionActiva.set(seccion);
  }

  toggleModo() {
    this.modoOscuro.update(value => !value);
    document.body.classList.toggle('modo-oscuro', this.modoOscuro());
  }
}