import { Component, OnInit } from '@angular/core';

import { ConfigService } from './../config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private config: ConfigService) {}
  appInfo: Object
  ngOnInit() {
    this.appInfo = this.config.getAppInfo();
  }

}
