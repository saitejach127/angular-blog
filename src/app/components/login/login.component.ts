import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private location:Location, private route: Router, private appComp: AppComponent) { }

  back(): void {
    this.location.back();
  }

  handleSubmit(e:any,username: string, password: string): void {
    e.preventDefault();
    localStorage.setItem("logged", "true");
    this.appComp.changeStatus(true);
    console.log("Login submitted", username, password);
    this.route.navigate(["/dashboard"]);
  }

  ngOnInit(): void {
  }

}
