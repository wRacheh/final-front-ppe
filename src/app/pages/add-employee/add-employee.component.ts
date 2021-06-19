import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { error } from 'protractor';
import { Departements } from 'src/app/models/departements';
import { Employee } from 'src/app/models/employee';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  errorMessage=""
  successMessage=""
  public addFrm :Employee={}
  public departementList :Departements[]=[];

  constructor(private toastrService: NbToastrService,private admin:AdminService, private auth:AuthService) { }

  ngOnInit(): void {
    this.getAllDepartements();
    this.errorMessage=""
    this.successMessage=""
  }

  getAllDepartements(){
    this.admin.getAll().subscribe(res=>{
      this.departementList=res;
    },
    error=>{
      console.log(error)
    }
    )
  }

  addEmployee(){
    this.auth.signup(this.addFrm).subscribe(res=>{
      setTimeout(() => this.showToastSuccess('top-right', 'success'), 100);
      this.successMessage=res.message;

    },
    error=>{
      console.log(error.error.message);
      this.errorMessage=error.error.message;
      setTimeout(() => this.showToastError('top-right', 'danger'), 100);

    })
  }











  

  showToastSuccess(position: any, status: any) {
    //this.index += 1;
    this.toastrService.show(
      status || 'success',
      this.successMessage,
      { position, status });
  } 
  

  showToastError(position: any, status: any) {
    //this.index += 1;
    this.toastrService.show(
      status || 'danger',
      this.errorMessage,
      { position, status });
  } 
}
