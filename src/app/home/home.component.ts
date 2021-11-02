import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(private userService: AuthService) {
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('email')
    // console.log(this.user)
  }

}
