import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Permission } from 'src/app/models/permission';
import { PermissionService } from 'src/app/services/permission.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-list-permission',
  templateUrl: './list-permission.component.html',
  styleUrls: ['./list-permission.component.scss']
})
export class ListPermissionComponent implements OnInit {
  nomEmployee: any
  currentUser: any

  public listPermission: Permission[] = []
  constructor(private token: TokenStorageService, private permission: PermissionService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.nomEmployee = this.currentUser.nom;
    this.getMyPermission()
  }




  getMyPermission() {
    this.permission.getPermissionByEmployer(this.nomEmployee).subscribe(res => {
      this.listPermission=res
    }, error=>{
      console.log(error)
    })
  }
}
