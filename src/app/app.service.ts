import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
@Injectable()
export class AppService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  tryLogin(creds) {
    return this.http.post(this.config.appUrl + '/login', creds);
  }

}
