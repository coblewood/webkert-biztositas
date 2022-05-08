import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSuccessRoutingModule } from './user-success-routing.module';
import { UserSuccessComponent } from './user-success.component';


@NgModule({
  declarations: [
    UserSuccessComponent
  ],
  imports: [
    CommonModule,
    UserSuccessRoutingModule
  ]
})
export class UserSuccessModule { }
