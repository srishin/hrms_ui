import { Component, OnInit } from '@angular/core';
import {AdminService} from './../admin.service'
@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styleUrls: ['./user-types.component.scss']
})
export class UserTypesComponent implements OnInit {

  constructor(private admins:AdminService) { }
  roles:Object
  addFlag:Boolean
  ngOnInit() {
  	this.admins.getUserRoles().subscribe(data =>this.roles = data );
  	this.addFlag = false;
  }
  toggleCreateForm(){
  	this.addFlag = !this.addFlag;
  }
}
