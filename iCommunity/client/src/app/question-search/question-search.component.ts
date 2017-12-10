import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Query } from '@angular/core/src/metadata/di';
import { $ } from 'protractor';

@Component({
  selector: 'app-question-search',
  templateUrl: './question-search.component.html',
  styleUrls: ['./question-search.component.css']
})


export class QuestionSearchComponent implements OnInit {

  questions: any = [];
  newQuestion: any;
  // selectedQuestion: any;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questionsService.getAllQuestions().subscribe(questions =>
      {
        console.log(questions);

var s= (<HTMLInputElement>document.getElementById('keywordID')).value;
console.log("Innew"+s);
let someArray = questions;    
var finalArray =[];          
 
            for (let entry of someArray) {  
             
              if (entry.title === s)
              {
              
finalArray.push(entry);
}
            }

        this.questions= finalArray; 
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

 

}
