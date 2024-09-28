import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Welcome to Script Squad'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: "Welcome Back, let's log in"
    }
];
