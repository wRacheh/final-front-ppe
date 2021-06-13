import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    private _router: Router,
    private token: TokenStorageService
) {

}
 
  canActivate(){
    let token =this.token.getToken();
    if (token){
      return true
    }else {
      this._router.navigate(['/login']);
      return false
    }
  }
   
  
}
