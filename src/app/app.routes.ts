import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfigurationComponent } from './dashboard/children/configuration/configuration.component';
import { EstadisticasComponent } from './dashboard/children/estadisticas/estadisticas.component';
import { PanelAdminComponent } from './dashboard/children/panel-admin/panel-admin.component';
import { FormularioComponent } from './dashboard/children/formulario/formulario.component';
import { authDashboardGuard } from './guards/auth-dashboard.guard';
import { authFormGuard } from './guards/auth-form.guard';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:'',    
        pathMatch:'full',
        redirectTo:'register'
    },
    {
        path:"dashboard",
        component:DashboardComponent,
        canActivate:[AuthGuard],
        canActivateChild:[authDashboardGuard],
        children:[
            {
                path:"estadisticas",
                component:EstadisticasComponent
            },
            {
                path:"config",
                component:ConfigurationComponent
            },
            {
                path:"panel-admin",
                component:PanelAdminComponent
            },
            {
                path:"form",
                component:FormularioComponent,
                canDeactivate:[authFormGuard]
            },

        ]
    },
    {
        path:"register",
        component:RegisterComponent
    }
];