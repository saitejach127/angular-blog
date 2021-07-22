import { Injectable } from '@angular/core';
import { BLOG } from '../defs';
import { Data } from '../data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  blogs: Observable<BLOG[]> = of(Data) ;

  constructor() {

   }

  getBlogs(): Observable<BLOG[]> {
    this.blogs = of(Data);
    return this.blogs;
  }

  getBlog(id: number) : BLOG {
    return Data[Data.findIndex((b) => b.id === id)];
  }

  addBlog(title: string, description: string): void {
    this.blogs = of([...Data, {id:3, title:title, description:description}]);
  }

  removeBlog(id: number): void {
    this.blogs = of(Data.filter((item) => item.id !== id));
  }

}
