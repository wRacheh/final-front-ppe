import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/models/conge';
import { CongeService } from 'src/app/services/conge.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-list-conge',
  templateUrl: './list-conge.component.html',
  styleUrls: ['./list-conge.component.scss']
})
export class ListCongeComponent implements OnInit {

  constructor(private token:TokenStorageService, private conge:CongeService) { }
  public listConge : Conge[]=[]
  nomEmployee:any
  currentUser:any
  ngOnInit(): void {
    this.currentUser=this.token.getUser();
    this.nomEmployee=this.currentUser.nom;
    this.GetCongeByEmployee()
  }


  GetCongeByEmployee(){
    this.conge.getCongeByEmployee(this.nomEmployee).subscribe(res=>{
      this.listConge=res;
    })
  }
}
