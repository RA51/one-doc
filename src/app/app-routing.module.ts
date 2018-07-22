import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './authentication/services/auth-guard.service';
import { DashboardLayoutComponent }  from './layout/dashboard.layout.component';
import { AddressComponent }  from './address/address.component';
import { ProfileComponent} from './profile/profile.component';

const routes: Routes = [
	{
	   path: '',
	   redirectTo: '/article',
	   pathMatch: 'full'
	},
	{
	   path: '',
	   component: DashboardLayoutComponent,
	   canActivate: [ AuthGuardService ],
	   children: [
		 {
		    path: 'article',
		    loadChildren: './article/article.module#ArticleModule'
		 },
		 {
		    path: 'address',
		    component: AddressComponent
		 }
	   ]		
	},
	{
	   path: 'login',
       loadChildren: './authentication/auth.module#AuthModule'
	},
	{
		path: 'profile',
		component: ProfileComponent,
		canActivate: [ AuthGuardService ]	
	 },
];

@NgModule({
  imports: [ 
          RouterModule.forRoot(routes) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ } 