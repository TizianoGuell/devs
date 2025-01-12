import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './topbar/topbar.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:'',    
        pathMatch:'full',
        redirectTo:'login'
    },
    {
        path:"topbar",
        component:TopbarComponent
    }
];