import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { QuestionComponent} from './question/question.component';
import { QuestionDetailComponent} from './question-detail/question-detail.component';
import { UniversitySearchComponent } from './university-search/university-search.component';
import { QuestionSearchComponent } from './question-search/question-search.component';
import { ProfessorSearchComponent } from './professor-search/professor-search.component';
import { NoticeEditComponent } from './notice-edit/notice-edit.component';
import { FormFieldsComponent} from './form-fields/form-fields.component';
// import {QuestionComponent} from '/question/question.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'home', component:HomeComponent,canActivate:[AuthGuard]},
    { path: 'admin', component:AdminComponent,canActivate:[AuthGuard]},
    { path: 'profile', component:ProfileComponent,canActivate:[AuthGuard]},
    { path: 'questions', component: QuestionComponent,pathMatch:'full'},
    { path: 'questions/:id', component: QuestionDetailComponent,canActivate:[AuthGuard],pathMatch: 'full'},
    { path: 'university', component: UniversitySearchComponent},
	{ path: 'questionSearch', component: QuestionSearchComponent},
	{ path: 'professorSearch', component: ProfessorSearchComponent},
    { path: 'noticeEdit', component: NoticeEditComponent},
    { path: 'search', component: FormFieldsComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: 'questions' }
];

export const routing = RouterModule.forRoot(appRoutes);