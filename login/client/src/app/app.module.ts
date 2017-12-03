import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { customHttpProvider } from './http/custom-http';
import { AlertComponent } from './directives/alert.component';
// import { AuthGuard } from './_guards/index';
import { AlertService, UserService,AuthenticationService } from './services/index';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './guards/auth.guard';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    customHttpProvider,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
