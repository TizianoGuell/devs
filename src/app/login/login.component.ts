import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificacionLoginService } from '../services/verificacion-login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formulario:FormGroup;
  verificado:any;
  constructor(private fb:FormBuilder, private verificar:VerificacionLoginService, private router:Router){
    this.formulario=this.fb.group({
      username:["", Validators.required],
      password:["",Validators.required]
    })
  }

  onSubmit(){
    this.verificado=this.verificar.verficarData(this.formulario.value.username,this.formulario.value.password)
    if(this.verificado===true){
      this.verificar.guardarData(this.formulario.value.username,this.formulario.value.password)
      this.router.navigate(['dashboard'])
    }
    else{
      alert(this.verificado)
    }
  }
}
