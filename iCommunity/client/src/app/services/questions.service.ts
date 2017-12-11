import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService {

  constructor(private http: Http) { }

  getAllQuestions(){
    // return this.http.get('http://localhost:3000/api/questions').map(res => res.json());
    return this.http.get('/api/questions').map((response: Response) => response.json());
    
  }
  postQuestion(res){
    console.log(res);
  //   return this.http.post('http://localhost:3000/api/questions', res).subscribe(data => {
  //     console.log(data);
  // });
  return this.http.post('/api/questions', res).subscribe(data => {
    console.log(data);
});
  }

  getQuestion(id){
    return this.http.get('/api/questions/' + id).map(res => res.json());
  }
  updateQuestion(res, id){
    console.log("api/questions/" + id);
    return this.http.put('/api/questions/' + id, res).subscribe(data => {
      console.log(data);
  });
  }
  getQuestionByCategory(category){
    return this.http.get('/api/questions/category/' + category).map(res => res.json());
  }
  getQuestionByUser(){
    var currentUser = localStorage.getItem('currentUser');
    console.log("Here" + JSON.parse(currentUser)._id);
    return this.http.get('/api/questions/' + JSON.parse(currentUser).username + '/' + JSON.parse(currentUser)._id).map(res => res.json());
  }
  deleteQuestion(id){
    return this.http.delete('/api/questions/' + id).subscribe(data => {
      console.log(data);
    });
  }
}
