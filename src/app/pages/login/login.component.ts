import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Employee } from 'src/app/models/employee';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public loginForm:Employee={};
isLoggedIn = false;
isLoginFailed = false;
roles: string[] = [];

user: any;
  constructor(private toastrService: NbToastrService,private auth:AuthService,private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
login(){
  this.auth.signin(this.loginForm).subscribe(res=>{
    console.log(res)
    this.tokenStorage.saveToken(res.token);
    const user={
      id:res.id,
      nom:res.nomEmp,
      prenom:res.prenomEMp,
      email:res.email,
      role:res.roles[0],
      departement:res.department
    }

    this.tokenStorage.saveUser(user);
    setTimeout(() => this.showToastSuccess('top-right', 'success'), 1000);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      location.reload()
  },
  error=>{
    console.log(error)
    setTimeout(() => this.showToastError('top-right', 'danger'), 1000);

  })
}


showToastSuccess(position: any, status: any) {
  //this.index += 1;
  this.toastrService.show(
    status || 'success',
    `Connexion réussite ! bienvenue`,
    { position, status });
} showToastError(position: any, status: any) {
  //this.index += 1;
  this.toastrService.show(
    status || 'danger!',
    `Erreur! Verifier votre adresse email ou mot de passe`,
    { position, status });
}
}
