import { Component, OnInit } from '@angular/core';
import { Pointage } from 'src/app/models/pointage';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-pointage',
  templateUrl: './all-pointage.component.html',
  styleUrls: ['./all-pointage.component.scss']
})
export class AllPointageComponent implements OnInit {
public listP :Pointage[]=[]

public nameEmpl ={name:""}
  constructor(private admin:AdminService) { }

  ngOnInit(): void {
    this.getAllPointage();
  }



  getAllPointage(){
    this.admin.getAllPointage().subscribe(res=>{
      this.listP=res
    },error=>{
      console.log(error)
    })
  }

  filtrerPointage(){
    this.admin.getPointageByEmployername(this.nameEmpl.name).subscribe(
      res=>{
        this.listP=res;
      },
      error=>{console.log(error)

      }
    )
  }

  refreshlist(){
    this.getAllPointage()
  }
}
