import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component, OnChanges, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { error } from 'protractor';
import { Departements } from 'src/app/models/departements';
import { Employee } from 'src/app/models/employee';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss'],
})
export class ListEmployeeComponent implements OnInit,OnChanges  {
  public closeResult = '';
  public listEmpl: Employee[] = [];
  public listDepartement: Departements[] = [];
  public updFrm: Employee = {}
  currentEmp = null;
  currentIndex = -1;
  currentEmployee: any;
  currentDepartement = null;
  search  = {
    nom :""
  }
  constructor(toastrService: NbToastrService, private modalService: NgbModal, private admin: AdminService) {
  }


  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllDepartement();
  }
  ngOnChanges(){
    this.getAllEmployee();

  }
  


  setActiveEmp(_employee: any, index: any): void {
    this.currentEmployee = _employee;
    this.currentIndex = index;
  }
  getAllDepartement() {
    this.admin.getAll().subscribe(res => {
      this.listDepartement = res
    },
      error => {
        console.log(error)
      })
  }

  getAllEmployee() {
    this.admin.getAllEmployee().subscribe(res => {
      this.listEmpl = res;
    }, error => { console.log(error) })
  }

  updateEmpl() {
    this.admin.updateEmployee(this.currentEmployee.id, this.updFrm).subscribe(res => {
      this.getAllEmployee();

    },error=>{
      console.log(error)
    })
  }

  deletEmpl():void{
    this.admin.deletEmployeeById(this.currentEmployee.id)
    .subscribe(
      response=>{
        this.getAllEmployee();
        this.currentEmployee=null
      },   
      error=>{
        console.log(error)
      }
    ); 
  }
refreshlist(){
  this.getAllEmployee()
}

getEmployeeByName(){
  this.admin.getEmployeByNomEmp(this.search.nom).subscribe(res=>{
    this.listEmpl=res
  })
}


  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  clickMethod(name: string) {
    if (confirm("Are you sure to delete " + name)) {
      console.log("Implement delete functionality here");
    }
  }
}
