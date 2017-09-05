import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminService} from './../admin.service';
@Component({
  selector: 'app-add-user-type',
  templateUrl: './add-user-type.component.html',
  styleUrls: ['./add-user-type.component.scss']
})
export class AddUserTypeComponent implements OnInit {

  constructor(private admins: AdminService, private router: Router) { }
  model: Object;
  ngOnInit() {
    this.model = {name: '', shortName: ''};
  }

  onSubmit() {
   this.admins.addRole(this.model).subscribe(
     data => {
      this.router.navigate(['/user-types']);
     },
     error => console.log(error)
   );
   console.log(this.model);
  }

}
