import { CanActivateChildFn } from '@angular/router';
import { VerificacionLoginService } from '../services/verificacion-login.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
export const authDashboardGuard: CanActivateChildFn = (childRoute, state) => {
  const verficar=inject(VerificacionLoginService)
  const router=inject(Router)

  if(verficar.getUsuarioActual().rol==1){
    return true
  }
  else{
    return router.parseUrl('/dashboard')

    /* valido
    router.navigate(['/login']);
    return false;*/
  }

};



/*



// Versión en clases
@Injectable({ providedIn: 'root' })
export class AuthDashboardGuard implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  
   if(verficar.getUsuarioActual().rol==1){
    return true
  }
  else{
    return router.parseUrl('/dashboard')

    valido
    router.navigate(['/login']);
    return false;
}
  
*/