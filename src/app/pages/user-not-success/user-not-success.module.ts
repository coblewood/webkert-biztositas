import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserNotSuccessRoutingModule } from './user-not-success-routing.module';
import { UserNotSuccessComponent } from './user-not-success.component';


@NgModule({
  declarations: [
    UserNotSuccessComponent
  ],
  imports: [
    CommonModule,
    UserNotSuccessRoutingModule
  ]
})
export class UserNotSuccessModule { }
