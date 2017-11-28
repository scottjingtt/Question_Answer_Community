import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsService } from './questions.service';
import { QuestionDetailComponent } from './question-detail/question-detail.component'

const ROUTES = [
  {
    path: '',
    redirectTo: 'questions',
    pathMatch: 'full'
  },
  {
    path: 'questions',
    component: QuestionComponent
  },
  { path: 'questions/:id',      
    component: QuestionDetailComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
