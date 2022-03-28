import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateGuard } from './core/guards/authenticate.guard';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserValidateComponent } from './user-validate/user-validate.component';


const routes: Routes = [
  {
    path: '',
    component: UserValidateComponent
  },
  { path: 'home', component: UserHomeComponent, canActivate: [AuthenticateGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
