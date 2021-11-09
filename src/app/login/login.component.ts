import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = "Login"
  users: any = {}
  submitted = false
  returnUrl: string
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  Submit() {
    this.submitted = true
    this.loginService.login(this.users.email, this.users.password).subscribe(
      (res) => {
        if ((res.status == 200)) {
          //store token in localstorage
          localStorage.setItem('token', res.token)
          localStorage.setItem('email',this.users.email)
          this.router.navigateByUrl('/home')
          this.toastr.success('Login Successfully', 'Success!');          
        }else{
          this.toastr.error('Invalid Username or Password', 'Error!');
        }
      },
      (error) => {
        this.toastr.error('Email not exist.', 'Error!');
        console.log(error)
      },
    )
  }
}
