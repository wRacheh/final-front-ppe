import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Permission } from 'src/app/models/permission';
import { PermissionService } from 'src/app/services/permission.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-demande-permission',
  templateUrl: './demande-permission.component.html',
  styleUrls: ['./demande-permission.component.scss']
})
export class DemandePermissionComponent implements OnInit {
  empl:any
  public perFrm : Permission={}
  constructor(private toastrService: NbToastrService,private permission:PermissionService,private token:TokenStorageService) { }

  ngOnInit(): void {
    this.empl=this.token.getUser();
  }
  demanderPermission(){
    
    const data={
      heureDebut: this.perFrm.heureDebut,
      heureFin: this.perFrm.heureFin,
      motif:this.perFrm.motif,
      status:'En Attente',
      employee:this.empl
    }
    this.permission.demanderPermission(data).subscribe(
      Response=>{
        console.log(data)
        setTimeout(() => this.showToastSuccess('top-right', 'success'), 1000);
      },
      error=>{
        setTimeout(() => this.showToastError('top-right', 'danger'), 1000);
      }
    )

  }
  
  showToastSuccess(position: any, status: any) {
    //this.index += 1;
    this.toastrService.show(
      status || 'success',
      `Votre demande a été envoyer à l'administrateur`,
      { position, status });
  } showToastError(position: any, status: any) {
    //this.index += 1;
    this.toastrService.show(
      status || 'danger!',
      `Error d'envoie du demande`,
      { position, status });
  }
}
