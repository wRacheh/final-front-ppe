import { Component, OnInit } from '@angular/core';
import { Pointage } from 'src/app/models/pointage';
import { AdminService } from 'src/app/services/admin.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-historique-pointage',
  templateUrl: './historique-pointage.component.html',
  styleUrls: ['./historique-pointage.component.scss']
})
export class HistoriquePointageComponent implements OnInit {

  public historique : Pointage[]=[]
  employee :any
  constructor(private admin:AdminService,private token:TokenStorageService) { }

  ngOnInit(): void {
    this.employee= this.token.getUser();
    this.getMesPointage()
  }



  getMesPointage(){
    this.admin.getMespointage(this.employee.nom).subscribe(res=>{
      this.historique=res
    })
  }
}
