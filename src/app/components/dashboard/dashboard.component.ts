import { Component, OnInit } from '@angular/core';
import { BLOG } from 'src/app/defs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  blogs: BLOG[] = [];

  remove(id: number): void {
    this.dataService.removeBlog(id);
  }

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBlogs().subscribe((newBlogs) => {
      console.log(newBlogs);
      this.blogs = newBlogs;
    })
  }

}
