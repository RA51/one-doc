import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule }  from './app-routing.module';
import { DashboardLayoutComponent }  from './layout/dashboard.layout.component';
import { AddressComponent }  from './address/address.component';
import { LogoutComponent } from './authentication/logout.component';
import { AuthGuardService } from './authentication/services/auth-guard.service';
import { AuthService } from './authentication/services/auth.service';
import {  NoopAnimationsModule  } from '@angular/platform-browser/animations';
/* import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,MatSidenavModule } from '@angular/material';
 */
import { MatButtonModule, MatListModule   , MatNativeDateModule,
      MatToolbarModule , MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule,MatDatepickerModule
} from '@angular/material';
    import { MatIconModule } from '@angular/material/icon';
    import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfileComponent } from './profile/profile.component';
    
@NgModule({
  imports: [     
        BrowserModule,
            AppRoutingModule,
            NoopAnimationsModule ,
            MatButtonModule, MatToolbarModule ,
    MatRadioModule,
    MatInputModule, MatIconModule,
    MatMenuModule,
    MatCheckboxModule   , MatListModule , MatSidenavModule,MatDatepickerModule,MatNativeDateModule
  ],
  declarations: [
        DashboardLayoutComponent,
		AddressComponent,
		LogoutComponent,
        AppComponent,
        ProfileComponent
  ],
  providers: [ 
        AuthService,
        AuthGuardService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
