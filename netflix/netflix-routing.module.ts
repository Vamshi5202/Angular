import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';

import { NetflixPage } from './netflix.page';

const routes: Routes = [
  {
    path: '',
    component: NetflixPage,
    canActivate:[AuthguardGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./sigin/sigin.module').then( m => m.SiginPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetflixPageRoutingModule {}
