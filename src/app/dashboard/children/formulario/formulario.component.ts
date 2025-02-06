import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormVerifyService } from '../../../services/form-verify.service';
@Component({
  selector: 'app-formulario',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  form:FormGroup;
  constructor(private router:Router,private fb:FormBuilder, private verify:FormVerifyService){
    this.form=fb.group({
      nombre:["",Validators.required],
      email:["",Validators.required],
      rol:["",Validators.required],
    })
    verify.saveChanges(false)
  }

  onSubmit(){
    if(this.form.valid){
      this.verify.saveChanges(true);
    }
    this.router.navigate(['dashboard'])
  }
}
