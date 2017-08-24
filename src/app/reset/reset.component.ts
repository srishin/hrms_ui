import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../config.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor(private config: ConfigService) {}
  appInfo: Object
  ngOnInit() {
    this.appInfo = this.config.getAppInfo();
  }

}
