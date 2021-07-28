import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BLOG } from 'src/app/defs';
import { DataService } from 'src/app/services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog?: any;

  back(): void {
    this.location.back();
  }

  constructor(private route: ActivatedRoute, private location: Location, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBlog(Number(this.route.snapshot.paramMap.get("id"))).subscribe((newBlog) => {
      console.log(newBlog);
      this.blog = newBlog;
    })
  }

}
