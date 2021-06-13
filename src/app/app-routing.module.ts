import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { SecureService } from './guards/secure.service';
import { UserGuard } from './guards/user.guard';
import { AddDepartementComponent } from './pages/add-departement/add-departement.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { AllCongeComponent } from './pages/all-conge/all-conge.component';
import { AllPermissionComponent } from './pages/all-permission/all-permission.component';
import { AllPointageComponent } from './pages/all-pointage/all-pointage.component';
import { DemandeCongeComponent } from './pages/demande-conge/demande-conge.component';
import { DemandePermissionComponent } from './pages/demande-permission/demande-permission.component';
import { HistoriquePointageComponent } from './pages/historique-pointage/historique-pointage.component';
import { HomeComponent } from './pages/home/home.component';
import { ListCongeComponent } from './pages/list-conge/list-conge.component';
import { ListDepartementComponent } from './pages/list-departement/list-departement.component';
import { ListEmployeeComponent } from './pages/list-employee/list-employee.component';
import { ListPermissionComponent } from './pages/list-permission/list-permission.component';
import { LoginComponent } from './pages/login/login.component';
import { PointageComponent } from './pages/pointage/pointage.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'add-employee',component:AddEmployeeComponent, canActivate:[AdminGuard]},
  {path: 'list-employee',component:ListEmployeeComponent, canActivate:[AdminGuard]},
  {path: 'add-departement', component:AddDepartementComponent, canActivate:[AdminGuard]},
  {path: 'list-departement',component:ListDepartementComponent, canActivate:[AdminGuard]},
  {path: 'all/conge',component:AllCongeComponent, canActivate:[AdminGuard]},
  {path: 'all/permission',component:AllPermissionComponent, canActivate:[AdminGuard]},
  {path: 'login',component:LoginComponent,canActivate:[SecureService] },
  {path: 'profile',component:ProfileComponent, canActivate:[AuthGuard]},
  {path: 'demande/conge',component:DemandeCongeComponent, canActivate:[UserGuard]},
  {path: 'demande/permission',component:DemandePermissionComponent, canActivate:[UserGuard]},
  {path: 'pointage',component:PointageComponent},
  {path: 'historique/conge',component:ListCongeComponent, canActivate:[UserGuard]}, 
  {path: 'historique/permlssion',component:ListPermissionComponent, canActivate:[UserGuard]},
  {path:'historique/pointage', component:HistoriquePointageComponent, canActivate:[UserGuard]},
  {path:'pointage/all', component:AllPointageComponent, canActivate:[AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
