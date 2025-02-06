import { CanDeactivateFn } from '@angular/router';
import { FormVerifyService } from '../services/form-verify.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
export const authFormGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const service=inject(FormVerifyService)
  const router=inject(Router)

  if(service.getChangesStatus()){
    return true
  }
  else{
    alert("Guarde los cambios del formulario")
    return false
  }
};
