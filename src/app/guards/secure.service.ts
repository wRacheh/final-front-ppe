import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SecureService implements CanActivate{

  constructor( private _router: Router,
    private token: TokenStorageService) { }


    canActivate(){
      let identity = this.token.getToken()
      if (!identity){
        return true
      }else {
        this._router.navigate(['home']);
        return false
      }
    }
}
