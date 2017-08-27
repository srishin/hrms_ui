import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import { ConfigService } from './config.service';
import { AdminService } from './admin.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UserTypesComponent } from './user-types/user-types.component';
import { LeaveTypesComponent } from './leave-types/leave-types.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';

import { AvailableComponent } from './available/available.component';
import { TakenComponent } from './taken/taken.component';
import { RequestComponent } from './request/request.component';
import { AddRolesComponent } from './add-roles/add-roles.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetComponent,
    DashboardComponent,
    UserTypesComponent,
    LeaveTypesComponent,
    AvailableComponent,
    TakenComponent,
    RequestComponent,
    ViewRequestsComponent,
    AddRolesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AppService,
    ConfigService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
