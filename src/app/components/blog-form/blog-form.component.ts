import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  handleSubmit(e: any, title: string, desc: string): void {
    this.dataService.addBlog(title, desc).subscribe((success) => {
      console.log(success);
    });
    this.route.navigate(["/dashboard"]);
  }

  constructor(private dataService: DataService, private route: Router) { }

  ngOnInit(): void {
  }

}
