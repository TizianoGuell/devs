import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FormVerifyService } from './services/form-verify.service';
import { VerificacionLoginService } from './services/verificacion-login.service';
import { VerificacionRegistroService } from './services/verificacion-registro.service';
import { AuthGuard } from './guards/auth.guard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    FormVerifyService,
    VerificacionLoginService,
    VerificacionRegistroService,
    AuthGuard

  ]
};
