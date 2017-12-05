import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/users').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/users/' + _id).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/users/register', user);
    }
    update(user:User){
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(!currentUser._id){
            throw "no _id";
        }
        if(!currentUser.token){
            throw "no token found";
        }
        return this.http.put('/users/' + user._id,user)
        .map((response:Response) =>{
            let user = response.json();
            if(user){
                currentUser.username=user.username,
                currentUser.firstName=user.firstName,
                currentUser.lastName=user.lastName,
                currentUser.created_date=user.created_date,
                currentUser.identity=user.identity,
                currentUser.major=user.major,
                currentUser.email=user.email,
                currentUser.image=user.image,
                localStorage.setItem('currentUser',JSON.stringify(currentUser));
                // localStorage.setItem('currentUser',JSON.stringify(user));
            }
        });
    }

    // update(user: User) {
    //     return this.http.put('/users/' + user._id, user);
    // }

    delete(_id: string) {
        return this.http.delete('/users/' + _id);
    }
}