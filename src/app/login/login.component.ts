import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from './../config.service';
import { AppService } from './../app.service';
import { Login } from './login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private config: ConfigService,
    private app: AppService
  ) { }
  appInfo: Object;
  model = new Login('', '');
  ngOnInit() {
    this.appInfo = this.config.getAppInfo();
    this.model.email = 'hrms@localhost.com';
    this.model.password = 'hrms';
    console.log(this.config.appUrl);
  }

  submit() {
    console.log(this.model);
    this.app.tryLogin(this.model).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/dashboard']);
      },
      error => console.log(error)
    );
  }

}
