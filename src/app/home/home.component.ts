import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor() {
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('email')
    // console.log(this.user)
  }

}
