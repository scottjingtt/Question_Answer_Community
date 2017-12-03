import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    // { path: '', redirectTo:'home',pathMatch:'full'},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'home', component:HomeComponent,canActivate:[AuthGuard]},
    { path: 'admin', component:AdminComponent},
    { path: 'profile', component:ProfileComponent,canActivate:[AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);