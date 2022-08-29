import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';

import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [

  { path: 'login/callback', component: OktaCallbackComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [OktaAuthGuard] },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: 'profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
