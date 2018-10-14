import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { AppRoutingModule }  from './app-routing.module';
import { DashboardLayoutComponent }  from './layout/dashboard.layout.component';
import { LogoutComponent } from './authentication/logout.component';
import { AuthGuardService } from './authentication/services/auth-guard.service';
import { AuthService } from './authentication/services/auth.service';
import {  NoopAnimationsModule  } from '@angular/platform-browser/animations';
/* import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,MatSidenavModule } from '@angular/material';
 */
import { MatButtonModule, MatListModule   , MatNativeDateModule,
      MatToolbarModule , MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule,MatDatepickerModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher 
} from '@angular/material';
    import { MatIconModule } from '@angular/material/icon';
    import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfileComponent } from './profile/profile.component';
import {CoreServices}   from './modules/core.service'; 
import { HttpClientModule } from '@angular/common/http';
import {ProfileSummaryComponent} from './profile-summary/profile-summary.component';
import {LoginComponent} from './authentication/login.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [     
        BrowserModule,
            AppRoutingModule,
            NoopAnimationsModule ,
            MatButtonModule, MatToolbarModule ,
    MatRadioModule,MatExpansionModule,
    MatInputModule, MatIconModule,
    MatMenuModule,
    MatCheckboxModule, MatListModule , 
    MatSidenavModule,MatDatepickerModule,MatNativeDateModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,FlexLayoutModule
  ],
  declarations: [
        DashboardLayoutComponent,
		LogoutComponent,
        AppComponent,
        LoginComponent,
        ProfileComponent,
        ProfileSummaryComponent
  ],
  providers: [ 
        AuthService,
        AuthGuardService,
        {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
        CoreServices
        ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
