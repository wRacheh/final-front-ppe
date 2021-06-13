import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { error } from 'protractor';
import { Conge } from 'src/app/models/conge';
import { Employee } from 'src/app/models/employee';
import { CongeService } from 'src/app/services/conge.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.scss']
})
export class DemandeCongeComponent implements OnInit {
  date = new Date();
  empl:any
  public congeFrm : Conge={}


  constructor(private toastrService: NbToastrService,private conge : CongeService,private token:TokenStorageService) { }

  ngOnInit(): void {
    this.empl= this.token.getUser();
  
  }

  demanderconge(){
   const data={
    dateDebut: this.congeFrm.dateDebut,
    dateFin: this.congeFrm.dateFin,
    motif:this.congeFrm.motif,
    status:"En Attente",
    employee:this.empl
   }
   console.log(data)
    this.conge.demanderConge(data).subscribe(
     
      Response=>{
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
