import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { window } from 'rxjs/operators/window';

@Component({
  selector: 'app-myquestions',
  templateUrl: './myquestions.component.html',
  styleUrls: ['./myquestions.component.css']
})
export class MyquestionsComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }
  myquestions: any = [];

  ngOnInit() {
    this.questionsService.getQuestionByUser().subscribe(questions =>{
      console.log("My questions " + questions);
      this.myquestions = questions
    }
    );
  }
  deleteQuestion(question){
    this.questionsService.deleteQuestion(question._id);
    this.questionsService.getQuestionByUser().subscribe(questions =>{
      console.log("My questions " + questions);
      this.myquestions = questions
    }
    );
    location.reload();
  }

}
