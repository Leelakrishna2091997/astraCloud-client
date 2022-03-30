import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticateGuard } from './core/guards/authenticate.guard';
import { UserValidateComponent } from './user-validate/user-validate.component';
import { DenominationComponent } from './denomination/denomination.component';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './sumary/summary.component';


const routes: Routes = [
  { path: '', component: UserValidateComponent },
  // { path: 'userHome', component: UserHomeComponent, canActivate: [AuthenticateGuard] },
  { path: 'home', component: HomeComponent},
  { path: 'deposit', component: DepositComponent },
  { path: 'denomination', component: DenominationComponent },
  { path: 'summary', component: SummaryComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
