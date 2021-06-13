import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private _router: Router,
    private token: TokenStorageService
) {

}
 
  canActivate(){
    let user =this.token.getUser();
    let role = user.role


    if (role =="ADMIN"){
      return true
    }else {
      this._router.navigate(['/home']);
      return false
    }
  }
   
}
