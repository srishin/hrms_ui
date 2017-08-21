import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() {}

  getAppInfo() {
    return {
    	name:'Test_app',
    	version:'1.0',
    	year:new Date().getFullYear()
    };
  }

}
