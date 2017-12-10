import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Query } from '@angular/core/src/metadata/di';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questions: any = [];
  newQuestion: any;
  questionCategory: any;
  categories: any = ["Science", "Engineering", "History", "Culture"];
  currentUser: any = null;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questionsService.getAllQuestions().subscribe(questions =>
      {
        if(localStorage.hasOwnProperty('currentUser')){
          this.currentUser = localStorage.getItem('currentUser');
        }else{
          this.currentUser = null;
        }
        console.log("questions are " + questions);
        this.questions = questions; 
        this.sortOnTime();
    });
    // this.questionsService.getQuestions().then( questions=>{
    //   this.questions = questions;
    // })
  }

  sortOnTime(){
    this.questions.sort(function(a, b){
      return new Date(b.created_date) > new Date(a.created_date);
    });
  }

  postQuestion(){

    var response = '{"title" : "' + this.newQuestion + '", "creator" : {"id": "' + JSON.parse(localStorage.getItem("currentUser"))._id+ '", "user" : "' + JSON.parse(localStorage.getItem("currentUser")).username +'"}, "category": "' + this.questionCategory  + '"}';
    console.log("category is " + this.questionCategory);
    this.questionsService.postQuestion(JSON.parse(response));
    this.sortOnTime();
    // console.log(this.questions);
    // this.questionsService.getAllQuestions().subscribe(questions =>
    //   { this.questions = questions; 
    // });
    // console.log(this.questions);
    window.location.reload();
  }

  searchQuestion(){
    JSON.parse(this.questions)
  }

  getQuestionByCategory(category){
    console.log(category);
    if(category != "All"){
      this.questionsService.getQuestionByCategory(category).subscribe(questions=>
      {
        console.log(questions);
        this.questions = questions; 
        this.sortOnTime();
      });
    }else{
      this.questionsService.getAllQuestions().subscribe(questions =>
        {
          this.questions = questions; 
          this.sortOnTime();
      });
    }
  }

}
