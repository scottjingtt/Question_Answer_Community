import { Component} from '@angular/core';
import { UserService,QuestionsService } from '../services/index';


@Component({
  selector: 'local-search',
  templateUrl: './local-search.component.html'
})
export class LocalSearchComponent {
  localResults: any = [];
  showQuestions:boolean;
  showProfessors:boolean;
  keyword:string;
  constructor(private questionsService: QuestionsService,
              private userService: UserService) { }

    localSearchQuestions() {
      this.questionsService.getAllQuestions().subscribe(questions =>
        {
          this.showQuestions = true;
          this.showProfessors = false;
          this.localResults = questions; 
          this.sortOnTime();
      });
    }
    localSearchProfessors() {
      this.userService.getByKey(this.keyword).subscribe(professors =>
        {
          this.showProfessors = true;
          this.showQuestions = false;
          this.localResults = professors; 
          this.sortOnTime();
      });
    }
    sortOnTime(){
      this.localResults.sort(function(a, b){
        return new Date(b.created_date) > new Date(a.created_date);
      });
    }
    
}
