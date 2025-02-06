import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { VerificacionRegistroService } from '../services/verificacion-registro.service';
//import { VerificacionLoginService } from '../services/verificacion-login.service';
@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formularioRegistro: FormGroup;

  constructor(private fb: FormBuilder,private verificarRegistro: VerificacionRegistroService,private router: Router) {
    this.formularioRegistro = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      rol:["",Validators.required]
    });
  }

  onSubmit() {
    if (this.formularioRegistro.valid ) {
      if(this.formularioRegistro.value.password==this.formularioRegistro.value.confirmPassword)
      {
        const resultado = this.verificarRegistro.registrarUsuario(
        this.formularioRegistro.value.fullname,
        this.formularioRegistro.value.email,
        this.formularioRegistro.value.password,
        this.formularioRegistro.value.rol
      );

      if (resultado === true) {
        this.router.navigate(['/login']);
      } else {
        alert(resultado);
      }
    }
    } else {
      alert('Por favor completa todos los campos correctamente');
    }
  }
}