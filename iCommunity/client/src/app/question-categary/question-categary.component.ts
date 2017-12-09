import { Resolve, Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'categary',
  templateUrl: './question-categary.component.html'
})
export class QuestionCategaryComponent implements OnInit {

  questions: any = [];

  categories: any = ["Science", "Engineering", "History", "Culture"];

  categoryCount: any = [];

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(){
    this.questionsService.getAllQuestions().subscribe(questions =>
        this.questions = questions);
  }

}
