import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

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
  private user: SocialUser;
  private loggedIn: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: UserService,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // });
  }

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

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(this.authService,"Google Data")
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    console.log(this.authService,"Facebook Data")
  } 
 
  signOut(): void {
    this.authService.signOut();
  }
}
