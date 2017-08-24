import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
@Injectable()
export class AdminService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {}

  getUserRoles() {
    console.log('dd', this.config.appUrl);
    return this.http.get(this.config.appUrl + '/roles');
  }



}
