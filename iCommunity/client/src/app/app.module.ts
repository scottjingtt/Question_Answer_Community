import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { customHttpProvider } from './http/custom-http';
import { AlertComponent } from './directives/alert.component';
// import { AuthGuard } from './_guards/index';
import { AlertService, UserService,AuthenticationService,QuestionsService } from './services/index';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './guards/auth.guard';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionComponent} from './question/question.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { QuestionCategaryComponent } from './question-categary/question-categary.component';
import { NoticeComponent } from './notice/notice.component';
import { QuestionSearchComponent } from './question-search/question-search.component';
import { UniversitySearchComponent } from './university-search/university-search.component';
import { PlacesService } from './services/places.service';
import { UniversitySearchResultComponent} from './university-search-result/university-search-result.component';
// import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ProfileComponent,
    QuestionComponent,
    QuestionDetailComponent,
    NavigationComponent,
    QuestionCategaryComponent,
    NoticeComponent,
    QuestionSearchComponent,
    UniversitySearchComponent,
    UniversitySearchResultComponent
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
    UserService,
    QuestionsService,
    PlacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
