import { Resolve, Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';


@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private questionsService: QuestionsService) { }

  id: any;
  selectedQuestion: any;
  answers: any = [];
  newAnswer: any;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.questionsService.getQuestion(this.id).subscribe(question =>
      { 
        this.answers = question["answers"];
        this.sortOnTime();
        this.selectedQuestion = question;
    });
  }
  gotolist(){
    this.router.navigate(['questions']);
  }
  postAnswer(){
    console.log(this.newAnswer);
    this.answers.push({"body" : this.newAnswer, "date" : Date.now()});
    this.selectedQuestion["answers"] = this.answers;
    this.questionsService.updateQuestion(this.selectedQuestion, this.selectedQuestion["_id"]);
    this.sortOnTime();
    // window.location.reload();
  }
  sortOnTime(){
    this.answers.sort(function(a, b){
      return new Date(b.date) > new Date(a.date);
    });
  }

}
