import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("logged") == "true"){
      this.changeStatus(true);
    }
  }

  changeStatus(status : boolean) : void {
    this.isLoggedIn = status;
  }

}
