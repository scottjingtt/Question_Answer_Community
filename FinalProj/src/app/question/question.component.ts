import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Query } from '@angular/core/src/metadata/di';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questions: any = [];
  newQuestion: any;
  // selectedQuestion: any;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questionsService.getAllQuestions().subscribe(questions =>
      {
        this.questions = questions; 
        this.sortOnTime();
    });
  }

  sortOnTime(){
    this.questions.sort(function(a, b){
      return new Date(b.created_date) > new Date(a.created_date);
    });
  }

  postQuestion(){
    var response = '{"title" : "' + this.newQuestion + '"}';
    console.log(response);
    this.questionsService.postQuestion(JSON.parse(response));
    
    // console.log(this.questions);
    // this.questionsService.getAllQuestions().subscribe(questions =>
    //   { this.questions = questions; 
    // });
    // console.log(this.questions);
    window.location.reload();
  }

}
