import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificacionRegistroService {
  private usuariosRegistrados: any[] = [];

  constructor() { 
    // Cargar usuarios existentes de localStorage al inicializar
    const usuariosGuardados = localStorage.getItem('usuarios');
    if(usuariosGuardados) {
      this.usuariosRegistrados = JSON.parse(usuariosGuardados);
    }
  }

  registrarUsuario(nombre: string, email: string, password: string,rol:string): string | true {
    // Validar formato de email
    if (!this.validarEmail(email)) {
      return 'Formato de correo electrónico inválido';
    }

    // Verificar si el email ya está registrado
    if (this.usuariosRegistrados.some(u => u.email === email)) {
      return 'Este correo electrónico ya está registrado';
    }

    // Validar contraseña
    if (!this.validarPassword(password)) {
      return 'La contraseña debe tener al menos 6 caracteres, una mayúscula y un número';
    }

    // Registrar nuevo usuario
    const nuevoUsuario = {
      id: Date.now(),
      nombre,
      email,
      password,
      rol
    };

    this.usuariosRegistrados.push(nuevoUsuario);
    this.guardarEnLocalStorage();
    
    return true;
  }

  private validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  private validarPassword(password: string): boolean {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    return password.length >= 6 && tieneMayuscula && tieneNumero;
  }

  private guardarEnLocalStorage(): void {
    localStorage.setItem('usuarios', JSON.stringify(this.usuariosRegistrados));
  }
}