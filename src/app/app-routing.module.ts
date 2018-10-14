import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './authentication/services/auth-guard.service';
import { DashboardLayoutComponent }  from './layout/dashboard.layout.component';
import { AddressComponent }  from './address/address.component';
import { ProfileComponent} from './profile/profile.component';
import { ProfileSummaryComponent} from './profile-summary/profile-summary.component';
import {LoginComponent} from './authentication/login.component';
const routes: Routes = [
	/* {
	   path: '',
	   redirectTo: '/article',
	   pathMatch: 'full'
	}, */
	{
	   path: '',
	   component: DashboardLayoutComponent,
	   canActivate: [ AuthGuardService ],
	   children: [
		//  {
		//     path: 'article',
		//     loadChildren: './article/article.module#ArticleModule'
		//  },
		//  {
		//     path: 'address',
		//     component: AddressComponent
		//  },
		 {
			path: 'profile-summary',
			component: ProfileSummaryComponent
				
		 },
		 { 
			path: 'profile',
			component: ProfileComponent, 
		 }
	   ]		
	},
	{
	   path: 'login',
       component: LoginComponent
	}
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