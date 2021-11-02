import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './services/auth.service';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

    constructor(private userService: AuthService,
      private translate: TranslateService,) {
        this.userService.user.subscribe(x => this.user = x);
        translate.setDefaultLang('en')
    }

    useLanguage(language: string) {
      this.translate.use(language)
    }
    logout() {
        this.userService.logout();
    }
}
