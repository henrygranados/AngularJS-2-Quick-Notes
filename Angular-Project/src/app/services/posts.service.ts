import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{

  constructor(private http: Http){
    console.log("Initializing...");
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(res => res.json());
  }
}
