import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService {

  constructor(private http: Http) { }

  getAllQuestions(){
    return this.http.get('api/questions').map(res => res.json());
  }
  postQuestion(res){
    console.log(res);
    return this.http.post('api/questions', res).subscribe(data => {
      console.log(data);
  });
  }

  getQuestion(id){
    return this.http.get('api/questions/' + id).map(res => res.json());
  }
  updateQuestion(res, id){
    console.log("api/questions/: " + id);
    return this.http.put('api/questions/:' + id, res).subscribe(data => {
      console.log(data);
  });
  }
}
