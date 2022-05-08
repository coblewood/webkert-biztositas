import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSuccessComponent } from './user-success.component';

const routes: Routes = [{ path: '', component: UserSuccessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSuccessRoutingModule { }
