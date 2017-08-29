import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

  constructor(private http: Http) { }

  getProjects() {
    return this.http.get("http://localhost:3000/users/projects")
        .map(data => {
          data.json();
          return data.json();
    });
   }
  }
