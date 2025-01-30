import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
        component:DashboardComponent
    },
    {
        path:"register",
        component:RegisterComponent
    }
];