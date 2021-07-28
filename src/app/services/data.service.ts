import { Injectable } from '@angular/core';
import { BLOG } from '../defs';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http:HttpClient) {

   }

  getBlogs() : Observable<BLOG[]> {
    return this.http.get<BLOG[]>("http://localhost:8080/blog-rest/webapi/blogs/all");
  }

   getBlog(id: number): Observable<BLOG> {
    return this.http.get<BLOG>(`http://localhost:8080/blog-rest/webapi/blogs?id=${id}`);
  }

  addBlog(title: string, description: string){
    console.log(title, description);
    var newBlog : BLOG = {
      title,
      description,
      createdOn : "22-022-022"
    }
    const body = (newBlog);
    return this.http.post("http://localhost:8080/blog-rest/webapi/blogs", body, this.httpOptions);
  }

  removeBlog(id: number): void {
    
  }

}
