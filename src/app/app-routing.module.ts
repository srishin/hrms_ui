import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UserTypesComponent } from './user-types/user-types.component';
import { LeaveTypesComponent } from './leave-types/leave-types.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';

import { AvailableComponent } from './available/available.component';
import { TakenComponent } from './taken/taken.component';
import { RequestComponent } from './request/request.component';
import { AddUserTypeComponent } from './add-user-type/add-user-type.component';
// import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'request', component: RequestComponent },
  { path: 'taken', component: TakenComponent },
  { path: 'available', component: AvailableComponent },
  { path: 'user-types', component: UserTypesComponent },
  { path: 'leave-types', component: LeaveTypesComponent },
  { path: 'add-user-type', component: AddUserTypeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: TakenComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}