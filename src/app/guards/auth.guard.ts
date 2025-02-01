import { Injectable } from "@angular/core";
import { CanActivate,Router } from "@angular/router";
import { VerificacionLoginService } from "../services/verificacion-login.service";

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{
  constructor(private service:VerificacionLoginService, private router:Router){
  }

  canActivate(): boolean {
    let usuario=this.service.getUsuarioActual();
    if(usuario && usuario.email){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }


}