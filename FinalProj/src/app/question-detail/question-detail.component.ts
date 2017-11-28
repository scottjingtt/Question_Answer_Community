import { Component, OnInit } from '@angular/core';
import { Resolve, Router, ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../questions.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private questionsService: QuestionsService) { }

  id: any;
  selectedQuestion: any;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.questionsService.getQuestion(this.id).subscribe(question =>
      { this.selectedQuestion = question;
    });
  }
  gotolist(){
    this.router.navigate(['questions']);
  }

}
