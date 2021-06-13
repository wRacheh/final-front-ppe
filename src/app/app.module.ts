import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbActionsModule, NbAlertModule, NbCalendarModule, NbCheckboxModule, NbDatepickerModule, NbInputModule, NbListModule, NbRadioModule, NbSelectModule, NbSpinnerModule, NbTabsetModule, NbThemeService, NbToastrModule, NbUserModule, NbWindowModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbButtonModule, NbCardModule, NbMenuItem, NbMenuModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { ListEmployeeComponent } from './pages/list-employee/list-employee.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDepartementComponent } from './pages/add-departement/add-departement.component';
import { ListDepartementComponent } from './pages/list-departement/list-departement.component';
import { ListCongeComponent } from './pages/list-conge/list-conge.component';
import { ListPermissionComponent } from './pages/list-permission/list-permission.component';
import { LoginComponent } from './pages/login/login.component';
import { PointageComponent } from './pages/pointage/pointage.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DemandeCongeComponent } from './pages/demande-conge/demande-conge.component';
import { DemandePermissionComponent } from './pages/demande-permission/demande-permission.component';
import { AllCongeComponent } from './pages/all-conge/all-conge.component';
import { AllPermissionComponent } from './pages/all-permission/all-permission.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { HomeComponent } from './pages/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HistoriquePointageComponent } from './pages/historique-pointage/historique-pointage.component';
import { AllPointageComponent } from './pages/all-pointage/all-pointage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    AddDepartementComponent,
    ListDepartementComponent,
    ListCongeComponent,
    ListPermissionComponent,
    LoginComponent,
    PointageComponent,
    ProfileComponent,
    DemandeCongeComponent,
    DemandePermissionComponent,
    AllCongeComponent,
    AllPermissionComponent,
    HomeComponent,
    HistoriquePointageComponent,
    AllPointageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    Ng2SmartTableModule,
    NgbModule,
    NbListModule,
    NbCheckboxModule,
    NbCalendarModule,
    NbToastrModule.forRoot(),
    NbAlertModule,
    NbWindowModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
    }),
    CarouselModule.forRoot(),
    NbSpinnerModule,
    NbTabsetModule,
   // HttpClient,
    HttpClientModule,
    FormsModule,


  ],
  providers: [NbSidebarService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
