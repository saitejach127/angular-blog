import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route: Router, private appcomp: AppComponent) { }

  ngOnInit(): void {
    localStorage.removeItem("logged");
    this.appcomp.changeStatus(false);
    this.route.navigate(["/"]);
  }

}
