import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserNotSuccessComponent } from './user-not-success.component';

const routes: Routes = [{ path: '', component: UserNotSuccessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserNotSuccessRoutingModule { }
