import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private location: Location, private route: Router, private appcomp: AppComponent) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

  handleSubmit(e:any,username: string, password: string): void {
    e.preventDefault();
    localStorage.setItem("logged", "true");
    this.appcomp.changeStatus(true);
    console.log("Login submitted", username, password);
    this.route.navigate(["/dashboard"]);
  }

}
