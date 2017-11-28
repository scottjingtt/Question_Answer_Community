import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'app/questions.service';
import { Query } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questions: any = [];
  question: any;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questionsService.getAllQuestions().subscribe(questions =>
      { this.questions = questions; 
    });
  }

  postQuestion(){
    var response = '{"title" : "' + this.question + '"}';
    console.log(response);
    this.questionsService.postQuestion(JSON.parse(response));
    
    console.log(this.questions);
    this.questionsService.getAllQuestions().subscribe(questions =>
      { this.questions = questions; 
    });
    console.log(this.questions);

  }

}
