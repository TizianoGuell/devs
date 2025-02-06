import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificacionLoginService {
  private usuariosRegistrados: any[] = [];

  constructor() {
    const usuariosGuardados = localStorage.getItem('usuarios');
    if(usuariosGuardados) {
      this.usuariosRegistrados = JSON.parse(usuariosGuardados);
    }
  }

  verficarData(email: string, password: string): string | true {
    const usuario = this.usuariosRegistrados.find(u => u.email === email);
    
    if (!usuario) {
      return "El correo no está registrado";
    }
    
    if (usuario.password !== password) {
      return "Contraseña incorrecta";
    }
    
    this.guardarData(usuario.nombre, email,usuario.rol);
    return true;
  }

  guardarData(nombre: string, email: string,rol:string): void {
    localStorage.setItem('usuarioActual', JSON.stringify({
      nombre: nombre,
      email: email,
      timestamp: new Date().getTime(),
      rol:rol
    }));
  }

  getUsuarioActual(): any {
    return JSON.parse(localStorage.getItem('usuarioActual') || '{}');
  }
  logout(): void {
    localStorage.removeItem('usuarioActual');
  }
} 