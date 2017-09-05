import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminService} from './../admin.service';
@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styleUrls: ['./user-types.component.scss']
})
export class UserTypesComponent implements OnInit {

  constructor(private admins:AdminService,private router: Router) { }
  roles:Object
  addFlag:Boolean
  ngOnInit() {
  	this.admins.getUserRoles().subscribe(data =>this.roles = data );
  	this.addFlag = false;
  }
  toggleCreateForm(){
    this.router.navigate(['/add-user-type']);
  }
}
